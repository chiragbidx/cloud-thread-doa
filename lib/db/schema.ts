import "server-only";

import {
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  integer,
  decimal,
  pgEnum,
  index,
  boolean,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// --- Existing tables (users, teams, teamMembers, teamInvitations, authTokens, featureItems) remain unchanged ---

export const users = pgTable("users", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  email: text("email").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  passwordHash: text("password_hash").notNull(),
  emailVerified: timestamp("email_verified", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const teams = pgTable("teams", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const teamMembers = pgTable(
  "team_members",
  {
    id: text("id")
      .notNull()
      .default(sql`gen_random_uuid()`)
      .primaryKey(),
    teamId: text("team_id")
      .notNull()
      .references(() => teams.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: text("role").notNull().default("member"),
    joinedAt: timestamp("joined_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    uniqueIndex("team_members_team_user_idx").on(table.teamId, table.userId),
  ]
);

export const teamInvitations = pgTable("team_invitations", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  email: text("email").notNull(),
  role: text("role").notNull().default("member"),
  token: text("token").notNull().unique(),
  invitedByUserId: text("invited_by_user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  status: text("status").notNull().default("pending"),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const authTokens = pgTable("auth_tokens", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  type: text("type").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const featureItems = pgTable("feature_items", {
  id: text("id")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  teamId: text("team_id")
    .notNull()
    .references(() => teams.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description").notNull().default(""),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// ----- CRM TABLES: Clients -----
export const clients = pgTable(
  "clients",
  {
    id: text("id")
      .notNull()
      .default(sql`gen_random_uuid()`)
      .primaryKey(),
    teamId: text("team_id")
      .notNull()
      .references(() => teams.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    contactPerson: text("contact_person").notNull(),
    contactEmail: text("contact_email").notNull(),
    phone: text("phone"),
    organization: text("organization"),
    address: text("address"),
    notes: text("notes"),
    status: text("status").notNull().default("active"), // "active" | "inactive"
    createdBy: text("created_by")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("clients_team_idx").on(table.teamId),
    index("clients_email_idx").on(table.contactEmail),
  ]
);

// ----- CRM TABLES: Projects -----
export const projects = pgTable(
  "projects",
  {
    id: text("id")
      .notNull()
      .default(sql`gen_random_uuid()`)
      .primaryKey(),
    teamId: text("team_id")
      .notNull()
      .references(() => teams.id, { onDelete: "cascade" }),
    clientId: text("client_id")
      .notNull()
      .references(() => clients.id, { onDelete: "restrict" }),
    name: text("name").notNull(),
    projectManagerId: text("project_manager_id")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    startDate: timestamp("start_date", { withTimezone: true }).notNull(),
    dueDate: timestamp("due_date", { withTimezone: true }),
    status: text("status").notNull().default("planned"), // planned, active, completed, on_hold
    description: text("description"),
    createdBy: text("created_by")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("projects_team_idx").on(table.teamId),
    index("projects_client_idx").on(table.clientId),
    index("projects_status_idx").on(table.status),
  ]
);

// ----- CRM TABLES: Invoices -----
export const invoices = pgTable(
  "invoices",
  {
    id: text("id")
      .notNull()
      .default(sql`gen_random_uuid()`)
      .primaryKey(),
    invoiceNumber: integer("invoice_number").notNull(), // unique per team
    teamId: text("team_id")
      .notNull()
      .references(() => teams.id, { onDelete: "cascade" }),
    clientId: text("client_id")
      .notNull()
      .references(() => clients.id, { onDelete: "restrict" }),
    projectId: text("project_id").references(() => projects.id, {
      onDelete: "set null",
    }),
    issueDate: timestamp("issue_date", { withTimezone: true }).notNull(),
    dueDate: timestamp("due_date", { withTimezone: true }).notNull(),
    amount: decimal("amount", { precision: 12, scale: 2 }).notNull(),
    status: text("status")
      .notNull()
      .default("draft"), // draft, sent, paid, overdue, void
    notes: text("notes"),
    createdBy: text("created_by")
      .notNull()
      .references(() => users.id, { onDelete: "restrict" }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    uniqueIndex("invoices_team_invoice_number_idx").on(table.teamId, table.invoiceNumber),
    index("invoices_client_idx").on(table.clientId),
    index("invoices_project_idx").on(table.projectId),
    index("invoices_status_idx").on(table.status),
  ]
);