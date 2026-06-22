-- Optional schema if you decide to persist submissions in a database.
-- This project currently forwards contact/newsletter submissions to SendGrid or a webhook.
-- If you want to store them, here’s a simple Postgres schema.

create table if not exists contact_messages (
  id bigserial primary key,
  name text not null,
  email text not null,
  company text,
  interest text,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_email_idx on contact_messages (email);

create table if not exists newsletter_subscribers (
  id bigserial primary key,
  email text not null unique,
  created_at timestamptz not null default now()
);

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
);create table if not exists employees (
  id bigserial primary key,
  email text not null unique,
  password_hash text not null,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists tasks (
  id bigserial primary key,
  employee_id bigint references employees(id) on delete cascade,
  title text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists leaves (
  id bigserial primary key,
  employee_id bigint references employees(id) on delete cascade,
  leave_date date not null,
  reason text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

