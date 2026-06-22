import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyJwt } from '@/lib/auth';
import pool from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = req.cookies.employee_token;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const payload = verifyJwt(token);
  if (!payload) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  if (!pool) {
    return res.status(500).json({ error: 'Database connection not established' });
  }

  try {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT id, email, name, created_at FROM employees WHERE id = $1', [payload.id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      return res.status(200).json(result.rows[0]);
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Error fetching employee:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
