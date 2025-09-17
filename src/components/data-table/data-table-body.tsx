import { flexRender, type Table } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { memo } from "react";

type Props<T> = {
  table: Table<T>;
};

export const DataTableBody = <T,>({ table }: Props<T>) => (
  <TableBody>
    {table.getRowModel().rows.map((row) => (
      <TableRow key={row.id}>
        {row.getAllCells().map((cell) => (
          <TableCell
            key={cell.id}
            style={{
              width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
            }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);

export const MemoizedTableBody = memo(DataTableBody) as typeof DataTableBody;
