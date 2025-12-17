import type { NextApiRequest, NextApiResponse } from "next";

type SubscribeBody = { email?: string; website?: string };
type ApiResponse = { ok: true } | { ok: false; error: string };

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function getClientIp(req: NextApiRequest) {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.length) return xf.split(",")[0]?.trim() || "unknown";
  return req.socket.remoteAddress || "unknown";
}

function rateLimit(key: string, max: number, windowMs: number) {
  const g = globalThis as unknown as { __appsaga_rl?: Map<string, { ts: number; count: number }> };
  if (!g.__appsaga_rl) g.__appsaga_rl = new Map();
  const now = Date.now();
  const prev = g.__appsaga_rl.get(key);
  if (!prev || now - prev.ts > windowMs) {
    g.__appsaga_rl.set(key, { ts: now, count: 1 });
    return { allowed: true };
  }
  if (prev.count >= max) return { allowed: false };
  prev.count += 1;
  g.__appsaga_rl.set(key, prev);
  return { allowed: true };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  res.setHeader("Cache-Control", "no-store");

  const ip = getClientIp(req);
  const rl = rateLimit(`subscribe:${ip}`, 8, 60_000);
  if (!rl.allowed) return res.status(429).json({ ok: false, error: "Too many requests. Try again soon." });

  const body = req.body as SubscribeBody;
  const email = (body.email || "").trim();
  const website = (body.website || "").trim();
  // Honeypot: bots often fill hidden field. Silently accept.
  if (website) return res.status(200).json({ ok: true });
  if (!email) return res.status(400).json({ ok: false, error: "Email is required" });
  if (!isEmail(email)) return res.status(400).json({ ok: false, error: "Invalid email" });
  if (email.length > 254) return res.status(400).json({ ok: false, error: "Invalid email" });

  const payload = { email, submittedAt: new Date().toISOString() };

  try {
    // Generic webhook (Mailchimp, ConvertKit, etc.) via Zapier/Make
    const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
    if (webhook) {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) return res.status(502).json({ ok: false, error: "Subscription webhook failed" });
      return res.status(200).json({ ok: true });
    }

    // eslint-disable-next-line no-console
    console.log("[subscribe] subscription received (no provider configured)", payload);
    return res.status(200).json({ ok: true });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[subscribe] failed", e);
    return res.status(500).json({ ok: false, error: "Subscription failed" });
  }
}


