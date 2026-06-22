import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { signJwt } from '@/lib/auth';
import pool from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  if (!pool) {
    return res.status(500).json({ error: 'Database connection not established' });
  }

  try {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM employees WHERE email = $1', [email]);
      
      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const employee = result.rows[0];
      const match = await bcrypt.compare(password, employee.password_hash);

      if (!match) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Generate JWT
      const token = signJwt({ id: employee.id, email: employee.email, name: employee.name });

      // Set cookie
      res.setHeader('Set-Cookie', `employee_token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`);
      return res.status(200).json({ success: true });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
