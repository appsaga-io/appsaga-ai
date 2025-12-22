
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { password } = req.body;
    const envPassword = process.env.ADMIN_PASSWORD;

    if (!envPassword) {
        return res.status(500).json({ error: 'Server misconfiguration: ADMIN_PASSWORD not set' });
    }

    if (password === envPassword) {
        // Set cookie
        // HttpOnly = true (not accessible to JS)
        // Path = /
        // Max-Age = 1 day
        res.setHeader('Set-Cookie', `admin_auth=true; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`);
        return res.status(200).json({ success: true });
    }

    return res.status(401).json({ error: 'Invalid password' });
}
