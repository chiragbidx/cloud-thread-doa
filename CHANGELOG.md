# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

- 2024-06-09: Initial implementation for ClientControl CRM features (Clients, Projects, Invoices). 
  - Added new tables to Drizzle schema: clients, projects, invoices
  - Added migration: drizzle/0003_clientcontrol_crm.sql and updated meta/_journal.json
  - Updated dashboard sidebar to add CRM section (Clients, Projects, Invoices)
  - Updated homepage and landing content/home.ts for ClientControl branding
  - Updated dashboard shell for ClientControl logo/branding
  - Updated navbar for ClientControl