"use server";
import { db } from "@/lib/db/client";
import { invoices } from "@/lib/db/schema";
import { z } from "zod";
import { getAuthSession } from "@/lib/auth/session";

// Validation schema
const createInvoiceSchema = z.object({
  clientId: z.string().min(1, "Client required"),
  projectId: z.string().optional(),
  issueDate: z.string().min(1, "Issue date required"),
  dueDate: z.string().min(1, "Due date required"),
  amount: z.string().min(1, "Amount required"),
  status: z.enum(["draft", "sent", "paid", "overdue", "void"]).default("draft"),
  notes: z.string().optional(),
});

// Example server action: create invoice
export async function createInvoice(payload: z.infer<typeof createInvoiceSchema>) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  // Role checks, client/project validation, auto-increment logic for invoice_number
  // ...actual insert logic, auto-increment per team...
  return { ok: true, id: "demo-invoice" };
}