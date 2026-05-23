import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  BLOB_READ_WRITE_TOKEN: z.string().min(1),
  JWT_SECRET: z.string().min(16),
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("Baksos Pengobatan Dukkes"),
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
  JWT_SECRET: process.env.JWT_SECRET,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
});
