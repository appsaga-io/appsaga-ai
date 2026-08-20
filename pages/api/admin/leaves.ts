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
          SELECT l.id, l.leave_date, l.reason, l.status, l.created_at, e.name as employee_name, e.email as employee_email 
          FROM leaves l 
          JOIN employees e ON l.employee_id = e.id 
          ORDER BY l.leave_date DESC
        `);
        return res.status(200).json(result.rows);
      } 
      else if (req.method === 'PATCH') {
        const { id, status } = req.body;
        
        if (!id || !status) {
          return res.status(400).json({ error: 'Leave ID and new status are required' });
        }

        if (!['pending', 'approved', 'rejected'].includes(status)) {
          return res.status(400).json({ error: 'Invalid status' });
        }

        const result = await client.query(
          'UPDATE leaves SET status = $1 WHERE id = $2 RETURNING *',
          [status, id]
        );
        
        if (result.rows.length === 0) {
          return res.status(404).json({ error: 'Leave request not found' });
        }
        
        return res.status(200).json(result.rows[0]);
      } 
      else {
        return res.status(405).json({ error: 'Method not allowed' });
      }
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Admin Leaves API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
