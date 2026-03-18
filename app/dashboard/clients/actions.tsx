"use server";
import { db } from "@/lib/db/client";
import { clients } from "@/lib/db/schema";
import { z } from "zod";
import { getAuthSession } from "@/lib/auth/session";

// Validation schema
const createClientSchema = z.object({
  name: z.string().min(1, "Client name is required"),
  contactPerson: z.string().min(1, "Contact person is required"),
  contactEmail: z.string().email("Must be a valid email"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  address: z.string().optional(),
  notes: z.string().optional(),
  status: z.enum(["active", "inactive"]).default("active"),
});

// Example server action: create client
export async function createClient(payload: z.infer<typeof createClientSchema>) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  // Role checks, team id fetch, etc required for real logic.
  // ...actual insert code would go here...
  return { ok: true, id: "demo" };
}