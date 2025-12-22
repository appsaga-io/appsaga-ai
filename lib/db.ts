
import { Pool } from 'pg';

let pool: Pool;

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL environment variable is not set. Database features will not work.");
}

if (process.env.NODE_ENV === 'production') {
  const isLocal = process.env.DATABASE_URL?.includes('localhost') || process.env.DATABASE_URL?.includes('127.0.0.1');
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isLocal ? false : {
      rejectUnauthorized: false
    }
  });
} else {
  // In development, use a global variable to preserve the pool across hot reloads
  if (!(global as any).postgresPool) {
    (global as any).postgresPool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }
  pool = (global as any).postgresPool;
}

export default pool;
