import { courses } from '../lib/training';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env.local manually since we are running a script
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set");
  process.exit(1);
}

const isLocal = process.env.DATABASE_URL.includes('localhost') || process.env.DATABASE_URL.includes('127.0.0.1');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isLocal ? false : { rejectUnauthorized: false },
});

async function seed() {
  await pool.query(`
    create table if not exists courses (
      id bigserial primary key,
      slug text not null unique,
      title text not null,
      description_short text,
      description_long text,
      course_code text,
      award text,
      duration text,
      mode text,
      level text,
      prerequisites text,
      total_fees text,
      eligibility text,
      benefits jsonb not null default '[]',
      includes_list jsonb not null default '[]',
      outcomes jsonb not null default '[]',
      certification text,
      curriculum jsonb not null default '[]',
      stack jsonb not null default '[]',
      details jsonb not null default '[]',
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    );
  `);

  for (const c of courses) {
    console.log(`Seeding ${c.title}...`);
    await pool.query(
      `
      INSERT INTO courses (
        slug, title, description_short, description_long,
        course_code, award, duration, mode, level, prerequisites,
        total_fees, eligibility, benefits, includes_list, outcomes,
        certification, curriculum, stack, details
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
        $11, $12, $13, $14, $15, $16, $17, $18, $19
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        description_short = EXCLUDED.description_short,
        description_long = EXCLUDED.description_long,
        course_code = EXCLUDED.course_code,
        award = EXCLUDED.award,
        duration = EXCLUDED.duration,
        mode = EXCLUDED.mode,
        level = EXCLUDED.level,
        prerequisites = EXCLUDED.prerequisites,
        total_fees = EXCLUDED.total_fees,
        eligibility = EXCLUDED.eligibility,
        benefits = EXCLUDED.benefits,
        includes_list = EXCLUDED.includes_list,
        outcomes = EXCLUDED.outcomes,
        certification = EXCLUDED.certification,
        curriculum = EXCLUDED.curriculum,
        stack = EXCLUDED.stack,
        details = EXCLUDED.details,
        updated_at = now();
      `,
      [
        c.slug,
        c.title,
        c.descriptionShort,
        c.descriptionLong,
        c.courseCode || null,
        c.award || null,
        c.duration,
        c.mode,
        c.level,
        c.prerequisites,
        c.totalFees || null,
        c.eligibility || null,
        JSON.stringify(c.benefits),
        JSON.stringify(c.includes),
        JSON.stringify(c.outcomes),
        c.certification,
        JSON.stringify(c.curriculum),
        JSON.stringify(c.stack || []),
        JSON.stringify(c.details || []),
      ]
    );
  }

  console.log('Seeding complete.');
  pool.end();
}

seed().catch(e => {
  console.error(e);
  pool.end();
  process.exit(1);
});
