import { Pool as PgPool } from 'pg';
import { Pool as NeonPool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

// Configure Neon driver to use 'ws' package in Node environment
neonConfig.webSocketConstructor = ws;

let pool: any;

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL environment variable is not set. Database features will not work.");
} else {
  const isLocal = process.env.DATABASE_URL.includes('localhost') || process.env.DATABASE_URL.includes('127.0.0.1');

  if (isLocal) {
    // Use "pg" driver for local standard Postgres (TCP)
    if (!(global as any).postgresPool) {
      (global as any).postgresPool = new PgPool({
        connectionString: process.env.DATABASE_URL,
      });
    }
    pool = (global as any).postgresPool;
  } else {
    // Use Neon serverless driver for remote/production (WebSocket/HTTP)
    pool = new NeonPool({
      connectionString: process.env.DATABASE_URL,
      ssl: true, // Neon requires SSL
    });
  }
}

export default pool;
