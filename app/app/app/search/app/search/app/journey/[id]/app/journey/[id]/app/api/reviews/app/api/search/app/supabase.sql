create table if not exists stations (
  crs text primary key,
  name text not null,
  lat double precision,
  lon double precision,
  facilities jsonb
);

create table if not exists routes (
  id uuid primary key default gen_random_uuid(),
  from_crs text references stations(crs),
  to_crs   text references stations(crs),
  popularity_score int default 0
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  route_id uuid references routes(id),
  rid text,
  travel_dt date,
  overall_star int check (overall_star between 1 and 5),
  cleanliness int, seat_comfort int, ride_comfort int, punctuality int,
  crowding int, wifi int, power int, temperature int, staff int,
  headline text, body text,
  verified boolean default false,
  user_id uuid,
  created_at timestamptz default now(),
  flagged boolean default false,
  helpful_count int default 0
);

alter table reviews enable row level security;
create policy "public read" on reviews for select using (true);
create policy "insert own" on reviews for insert with check (auth.uid() = user_id or user_id is null);
create policy "update own" on reviews for update using (auth.uid() = user_id);
create policy "delete own" on reviews for delete using (auth.uid() = user_id);
