"use server";
import { db } from "@/lib/db/client";
import { projects } from "@/lib/db/schema";
import { z } from "zod";
import { getAuthSession } from "@/lib/auth/session";

// Validation schema
const createProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  clientId: z.string().min(1, "Client is required"),
  projectManagerId: z.string().min(1, "Project manager is required"),
  startDate: z.string().min(1),
  dueDate: z.string().optional(),
  status: z.enum(["planned", "active", "completed", "on_hold"]).default("planned"),
  description: z.string().optional(),
});

// Example server action: create project
export async function createProject(payload: z.infer<typeof createProjectSchema>) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");
  // Role checks, team id, client lookup, etc
  // ...actual insert logic...
  return { ok: true, id: "demo-project" };
}