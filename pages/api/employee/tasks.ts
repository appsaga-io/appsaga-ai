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
        const result = await client.query('SELECT * FROM tasks WHERE employee_id = $1 ORDER BY created_at DESC', [employeeId]);
        return res.status(200).json(result.rows);
      } 
      
      else if (req.method === 'POST') {
        const { title } = req.body;
        if (!title) {
          return res.status(400).json({ error: 'Task title is required' });
        }
        const result = await client.query(
          'INSERT INTO tasks (employee_id, title) VALUES ($1, $2) RETURNING *',
          [employeeId, title]
        );
        return res.status(201).json(result.rows[0]);
      }
      
      else if (req.method === 'PATCH') {
        const { id, status } = req.body;
        if (!id || !status) {
          return res.status(400).json({ error: 'Task ID and status are required' });
        }
        // Ensure task belongs to employee
        const checkRes = await client.query('SELECT * FROM tasks WHERE id = $1 AND employee_id = $2', [id, employeeId]);
        if (checkRes.rows.length === 0) {
          return res.status(404).json({ error: 'Task not found' });
        }

        const result = await client.query(
          'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *',
          [status, id]
        );
        return res.status(200).json(result.rows[0]);
      }

      else {
        return res.status(405).json({ error: 'Method not allowed' });
      }
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Task API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
