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



