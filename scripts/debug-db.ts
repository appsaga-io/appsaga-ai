
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { Pool as PgPool } from 'pg';
import { Pool as NeonPool, neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

async function testConnection() {
    console.log("Testing DB connection...");
    console.log("DATABASE_URL present:", !!process.env.DATABASE_URL);

    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL missing");
    }

    const isLocal = process.env.DATABASE_URL.includes('localhost') || process.env.DATABASE_URL.includes('127.0.0.1');
    console.log("Is Local:", isLocal);

    let pool;
    if (isLocal) {
        console.log("Using pg driver");
        pool = new PgPool({ connectionString: process.env.DATABASE_URL });
    } else {
        console.log("Using Neon serverless driver");
        try {
            pool = new NeonPool({
                connectionString: process.env.DATABASE_URL,
                ssl: true
            });
        } catch (e) {
            console.error("Error Instantiating NeonPool:", e);
            return;
        }
    }

    try {
        const client = await pool.connect();
        console.log("Connected successfully!");
        const res = await client.query('SELECT NOW()');
        console.log("Query Result:", res.rows[0]);
        client.release();
    } catch (e) {
        console.error("Connection Failed:", e);
    } finally {
        await pool.end();
    }
}

testConnection();
