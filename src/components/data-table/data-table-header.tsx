import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "../ui/table";
import { useDataTable } from "./data-table-context";

/**
 * Renders the table header with column headers and resize handles
 * 
 * Features:
 * - Renders column headers using flexRender
 * - Provides visual resize handles for resizable columns
 * - Supports column spanning
 * - Shows hover effects on resize handles
 * 
 * @returns The table header element
 */
export const DataTableHeader = () => {
  const { table } = useDataTable();

  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              colSpan={header.colSpan}
              style={{
                width: `calc(var(--header-${header.id}-size) * 1px)`,
              }}
              className="relative group"
            >
              {!header.isPlaceholder &&
                flexRender(header.column.columnDef.header, header.getContext())}

              {header.column.getCanResize() && (
                <div
                  className={cn(
                    "absolute right-0 h-full bg-primary/10 w-1.5 top-0 cursor-col-resize opacity-0 group-hover:opacity-100 transition-all duration-300",
                    header.column.getIsResizing() && "opacity-100 bg-primary/20"
                  )}
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                />
              )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};
