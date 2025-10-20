import type { ColumnDef } from "@tanstack/react-table";
import {
  CreditCardIcon,
  Edit2Icon,
  EllipsisIcon,
  Trash2Icon,
} from "lucide-react";
import type { Invoice } from "../invoice";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "invoice",
    header: "#",
    enableResizing: false,
    meta: {
      nameInFilters: "Order number #",
    },
  },
  {
    accessorKey: "paymentStatus",
    meta: {
      nameInFilters: "Payment Status",
    },
    header: () => (
      <div className="flex items-center gap-2">
        <CreditCardIcon className="size-4" /> Payment Status
      </div>
    ),
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
    meta: {
      nameInFilters: "Payment Method",
    },
  },
  {
    accessorKey: "totalAmount",
    header: "Amount",
    meta: {
      nameInFilters: "Amount",
    },
  },
  {
    id: "actions",
    size: 80,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    enableHiding: false,
    enableResizing: false,
    enableSorting: false,
    enableMultiSort: false,
    cell: ({ row }) => {
      const invoice = row.original;

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="size-2">
                <EllipsisIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                onSelect={() => alert(`Edit ${invoice.invoice}`)}
              >
                <Edit2Icon className="size-4" /> Edit
              </DropdownMenuItem>

              <DropdownMenuItem
                onSelect={() => alert(`Delete ${invoice.invoice}`)}
              >
                <Trash2Icon className="size-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
