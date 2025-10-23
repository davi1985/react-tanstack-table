import type { Column } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpDown,
  EyeOff,
} from "lucide-react";

type DataTableColumnHeaderProps = {
  column: Column<any>;
  title: ReactNode;
};

export const DataTableColumnHeader = ({
  column,
  title,
}: DataTableColumnHeaderProps) => {
  if (!column.getCanSort()) {
    return title;
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 data-[state=open]:bg-accent"
          >
            {title}
            {!column.getIsSorted() && <ChevronsUpDown />}
            {column.getIsSorted() === "asc" && <ArrowUpIcon />}
            {column.getIsSorted() === "desc" && <ArrowDownIcon />}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="text-muted-foreground size-4" />
            Asc
          </DropdownMenuItem>

          <DropdownMenuItem onSelect={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="text-muted-foreground size-4" />
            Desc
          </DropdownMenuItem>

          {column.getCanHide() && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => column.toggleVisibility(false)}>
                <EyeOff className="text-muted-foreground size-4" />
                Hide
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
