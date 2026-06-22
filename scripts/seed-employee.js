require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const { Pool: NeonPool, neonConfig } = require('@neondatabase/serverless');
const ws = require('ws');

neonConfig.webSocketConstructor = ws;

async function run() {
  let pool;
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set in .env.local');
    process.exit(1);
  }

  const isLocal = process.env.DATABASE_URL.includes('localhost') || process.env.DATABASE_URL.includes('127.0.0.1');
  
  if (isLocal) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  } else {
    pool = new NeonPool({ connectionString: process.env.DATABASE_URL, ssl: true });
  }

  const client = await pool.connect();

  try {
    // 1. Run schema.sql
    const schemaSql = fs.readFileSync(path.join(__dirname, '../schema.sql'), 'utf-8');
    console.log('Running schema.sql...');
    await client.query(schemaSql);
    console.log('Schema updated successfully.');

    // 2. Seed an employee
    const email = 'employee@appsaga.io';
    const password = 'password123';
    
    // Check if employee exists
    const checkRes = await client.query('SELECT * FROM employees WHERE email = $1', [email]);
    if (checkRes.rows.length === 0) {
      console.log('Seeding employee...');
      const passwordHash = await bcrypt.hash(password, 10);
      await client.query(
        'INSERT INTO employees (email, password_hash, name) VALUES ($1, $2, $3)',
        [email, passwordHash, 'Test Employee']
      );
      console.log(`Employee seeded: ${email} / ${password}`);
    } else {
      console.log(`Employee ${email} already exists.`);
    }

  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    client.release();
    pool.end();
  }
}

run();
