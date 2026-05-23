CREATE TABLE IF NOT EXISTS patients (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), full_name text NOT NULL, nik text NOT NULL, phone text, created_at timestamp DEFAULT now() NOT NULL);
CREATE TABLE IF NOT EXISTS visits (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), patient_id uuid NOT NULL, status text NOT NULL DEFAULT 'waiting', queue_number integer, created_at timestamp DEFAULT now() NOT NULL);
CREATE TABLE IF NOT EXISTS medicines (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, stock integer NOT NULL DEFAULT 0, created_at timestamp DEFAULT now() NOT NULL);
