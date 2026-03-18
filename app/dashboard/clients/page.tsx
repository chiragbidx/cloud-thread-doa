import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { clients } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { ClientListClient } from "./client";

export const dynamic = "force-dynamic";

export default async function ClientsPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const session = await getAuthSession();
  if (!session) {
    redirect("/auth#signin");
  }
  // Only allow users with valid team (role validated in client logic)
  const userTeams = await db.query.teamMembers.findMany({
    where: eq("user_id", session.userId),
  });
  const userTeam = userTeams[0]?.team_id;
  if (!userTeam) {
    redirect("/dashboard/team");
  }

  return <ClientListClient searchParams={searchParams ?? {}} />;
}