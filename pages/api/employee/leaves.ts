import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyJwt } from '@/lib/auth';
import pool from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

  const employeeId = payload.id;

  try {
    const client = await pool.connect();
    try {
      if (req.method === 'GET') {
        const result = await client.query('SELECT * FROM leaves WHERE employee_id = $1 ORDER BY leave_date DESC', [employeeId]);
        return res.status(200).json(result.rows);
      } 
      
      else if (req.method === 'POST') {
        const { leave_date, reason } = req.body;
        if (!leave_date) {
          return res.status(400).json({ error: 'Leave date is required' });
        }

        const dateObj = new Date(leave_date);
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();

        // Check if there is already a leave for this month and year (pending or approved)
        // Ignoring rejected leaves as they don't count towards the quota.
        const checkRes = await client.query(`
          SELECT * FROM leaves 
          WHERE employee_id = $1 
            AND EXTRACT(MONTH FROM leave_date) = $2 
            AND EXTRACT(YEAR FROM leave_date) = $3
            AND status != 'rejected'
        `, [employeeId, month, year]);

        if (checkRes.rows.length > 0) {
          return res.status(400).json({ error: 'You have already requested or taken a leave for this month.' });
        }

        const result = await client.query(
          'INSERT INTO leaves (employee_id, leave_date, reason) VALUES ($1, $2, $3) RETURNING *',
          [employeeId, leave_date, reason || '']
        );
        return res.status(201).json(result.rows[0]);
      }

      else {
        return res.status(405).json({ error: 'Method not allowed' });
      }
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Leaves API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
