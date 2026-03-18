"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";
import { DataTable } from "@/components/ui/table";
import { ProjectsListTable, useProjectsList } from "./hooks";

export function ProjectsListClient({ searchParams }: { searchParams: Record<string, unknown> }) {
  // CRM main client for ClientControl — fetch paginated team projects, filters from URL
  const projectsList = useProjectsList(searchParams);
  // UI States
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <div className="flex gap-3">
          <Button onClick={() => setCreateOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>
      {/* List, Table, Empty, Loading, etc */}
      <ProjectsListTable {...projectsList} />
      {/* Modals for create, edit, detail — to be wired in */}
    </div>
  );
}