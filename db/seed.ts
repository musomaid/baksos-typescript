import { db } from "@/lib/db";
import { patients, medicines } from "./schema";

async function seed() {
  await db.insert(patients).values([{ fullName: "Siti Aminah", nik: "3201", phone: "0812" }, { fullName: "Budi Santoso", nik: "3202", phone: "0813" }]);
  await db.insert(medicines).values([{ name: "Paracetamol", stock: 120 }, { name: "Amoxicillin", stock: 80 }]);
  console.log("Seed selesai");
}
seed();
