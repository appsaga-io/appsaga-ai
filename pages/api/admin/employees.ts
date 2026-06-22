import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import pool from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check admin auth
  const adminAuth = req.cookies.admin_auth;
  if (adminAuth !== 'true') {
    return res.status(401).json({ error: 'Unauthorized: Admin access required' });
  }

  if (!pool) {
    return res.status(500).json({ error: 'Database connection not established' });
  }

  try {
    const client = await pool.connect();
    try {
      if (req.method === 'GET') {
        const result = await client.query('SELECT id, name, email, created_at FROM employees ORDER BY created_at DESC');
        return res.status(200).json(result.rows);
      } 
      else if (req.method === 'POST') {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
          return res.status(400).json({ error: 'Name, email, and password are required' });
        }

        // Check if employee already exists
        const checkRes = await client.query('SELECT id FROM employees WHERE email = $1', [email]);
        if (checkRes.rows.length > 0) {
          return res.status(400).json({ error: 'An employee with this email already exists' });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        
        const result = await client.query(
          'INSERT INTO employees (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email, created_at',
          [name, email, passwordHash]
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
    console.error('Admin Employees API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
