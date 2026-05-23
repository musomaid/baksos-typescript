import { put } from "@vercel/blob";

import { serverEnv } from "@/src/lib/env";

export async function uploadToBlob(file: File, pathname?: string) {
  return put(pathname ?? file.name, file, {
    access: "public",
    token: serverEnv.BLOB_READ_WRITE_TOKEN,
  });
}
