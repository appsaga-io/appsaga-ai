import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  message?: string;
  website?: string; // honeypot
};

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
  const rl = rateLimit(`contact:${ip}`, 6, 60_000);
  if (!rl.allowed) return res.status(429).json({ ok: false, error: "Too many requests. Try again soon." });

  const body = req.body as ContactBody;
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const interest = (body.interest || "").trim();
  const message = (body.message || "").trim();
  const website = (body.website || "").trim();

  // Honeypot: bots often fill hidden "website" field. Silently accept.
  if (website) return res.status(200).json({ ok: true });

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }
  if (name.length > 120) return res.status(400).json({ ok: false, error: "Name is too long" });
  if (company.length > 120) return res.status(400).json({ ok: false, error: "Company is too long" });
  if (interest.length > 120) return res.status(400).json({ ok: false, error: "Interest is too long" });
  if (message.length > 5000) return res.status(400).json({ ok: false, error: "Message is too long" });

  const payload = {
    name,
    email,
    company,
    interest,
    message,
    submittedAt: new Date().toISOString(),
  };

  const sendgridKey = process.env.SENDGRID_API_KEY;
  const sendgridFrom = process.env.SENDGRID_FROM_EMAIL;
  const sendgridTo = process.env.SENDGRID_TO_EMAIL;

  try {
    if (sendgridKey && sendgridFrom && sendgridTo) {
      sgMail.setApiKey(sendgridKey);
      await sgMail.send({
        to: sendgridTo,
        from: sendgridFrom,
        subject: `New contact: ${name}${company ? ` (${company})` : ""}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : "",
          interest ? `Interest: ${interest}` : "",
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
      return res.status(200).json({ ok: true });
    }

    // Generic webhook fallback (Zapier/Make/Slack/etc.)
    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (webhook) {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        return res.status(502).json({ ok: false, error: "Webhook failed" });
      }
      return res.status(200).json({ ok: true });
    }

    // Safe fallback: accept the submission (useful for local dev)
    // eslint-disable-next-line no-console
    console.log("[contact] submission received (no provider configured)", payload);
    return res.status(200).json({ ok: true });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("[contact] failed", e);
    return res.status(500).json({ ok: false, error: "Failed to submit. Try again." });
  }
}


