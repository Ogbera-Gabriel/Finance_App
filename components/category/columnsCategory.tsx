"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { InferResponseType } from "hono";
import { Checkbox } from "../ui/checkbox";
import { client } from "@/lib/hono";
import { ActionsCategory } from "./actionsCategory";

export type ResponseType = InferResponseType<
  typeof client.api.categories.$get,
  200
>["data"][0]; // infer response type

export const columnsCategory: ColumnDef<ResponseType>[] = [
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
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="size-4 ml-2" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionsCategory id={row.original.id} />
  },
];
