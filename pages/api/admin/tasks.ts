import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/lib/db';
import { verifyJwt } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check admin auth - verify JWT
  const token = req.cookies.admin_auth;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Admin access required' });
  }

  const payload = verifyJwt(token);
  if (!payload || payload.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized: Admin access required' });
  }

  if (!pool) {
    return res.status(500).json({ error: 'Database connection not established' });
  }

  try {
    const client = await pool.connect();
    try {
      if (req.method === 'GET') {
        const result = await client.query(`
          SELECT t.id, t.title, t.status, t.created_at, e.name as employee_name, e.email as employee_email 
          FROM tasks t 
          JOIN employees e ON t.employee_id = e.id 
          ORDER BY t.created_at DESC
        `);
        return res.status(200).json(result.rows);
      } 
      else {
        return res.status(405).json({ error: 'Method not allowed' });
      }
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Admin Tasks API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
