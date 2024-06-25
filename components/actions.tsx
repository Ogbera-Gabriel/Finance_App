"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

type Props = {
   id: string
}

export const Actions = ({ id }: Props) => {
    const { onOpen } = useOpenAccount();
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              disabled={false}
              onClick={() => onOpen(id)}
            >
              EDIT
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
}