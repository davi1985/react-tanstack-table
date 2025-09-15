import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { invoices } from "./data";
import { CreditCardIcon } from "lucide-react";

export const InvoicesTable = () => {
  const table = useReactTable({
    data: invoices,
    columns: [
      { accessorKey: "invoice", header: "#" },
      {
        accessorKey: "paymentStatus",
        header: () => (
          <div className="flex items-center gap-2">
            <CreditCardIcon className="size-4" /> Payment Status
          </div>
        ),
      },
      { accessorKey: "paymentMethod", header: "Payment Method" },
      { accessorKey: "totalAmount", header: "Amount" },
    ],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {!header.isPlaceholder &&
                  flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getAllCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
