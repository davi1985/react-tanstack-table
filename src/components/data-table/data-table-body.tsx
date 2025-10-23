import { flexRender } from "@tanstack/react-table";
import { memo } from "react";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { useDataTable } from "./data-table-context";

/**
 * Renders the table body with data rows and cells
 * 
 * Features:
 * - Renders all visible rows and cells
 * - Handles row selection state
 * - Applies dynamic column sizing
 * - Supports row click for selection
 * 
 * @returns The table body element with rows
 */
export const DataTableBody = () => {
  const { table } = useDataTable();

  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow
          key={row.id}
          data-state={row.getIsSelected() && "selected"}
          onClick={row.getToggleSelectedHandler()}
        >
          {row.getVisibleCells().map((cell) => (
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
};

/**
 * Memoized version of DataTableBody
 * 
 * Used during column resizing to prevent unnecessary re-renders
 * and improve performance.
 */
export const MemoizedDataTableBody = memo(DataTableBody);
