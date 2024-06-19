"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
     id: "select",
     header: ({ table }) => (
      <Checkbox 
       checked={
        table.getIsAllRowsSelected() ||
        (table.getIsSomeRowsSelected() && "indeterminate")
      }
       onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
       aria-label="Select all"
      />
     ),
     cell: ({ row }) => (
      <Checkbox
       checked={row.getIsSelected()}
       onCheckedChange={row.getToggleSelectedHandler()}
       aria-label="Select row"
      />
     )
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
         variant="ghost"
         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Email
         <ArrowUpDown className="size-4 ml-2"/> 
        </Button>
      )
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
