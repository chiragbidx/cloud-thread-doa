"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";
import { DataTable } from "@/components/ui/table";
import { ClientListTable, useClientList } from "./hooks";

// TODO: import modals/dialogs for create/edit later

export function ClientListClient({ searchParams }: { searchParams: Record<string, unknown> }) {
  // CRM main client for ClientControl—fetch paginated team clients, filters from URL
  const clientList = useClientList(searchParams);
  // UI States
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
        <div className="flex gap-3">
          <Button onClick={() => setCreateOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Client
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>
      {/* List, Table, Empty, Loading, etc */}
      <ClientListTable {...clientList} />
      {/* Modal logic to show create, detail, edit—handled by children/components */}
      {/* To be wired in full implementation */}
    </div>
  );
}