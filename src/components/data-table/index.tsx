import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { DataTableBody, MemoizedDataTableBody } from "./data-table-body";
import { useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Settings2 } from "lucide-react";
import { Button } from "../ui/button";

export interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export const DataTable = <TData,>({ columns, data }: DataTableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    defaultColumn: {
      size: 100,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  const { columnSizing, columnSizingInfo } = table.getState();

  const colSizesVariables = useMemo(
    () =>
      table.getFlatHeaders().reduce<Record<string, number>>(
        (acc, header) => ({
          ...acc,
          [`--header-${header.id}-size`]: header.getSize(),
          [`--col-${header.column.id}-size`]: header.column.getSize(),
        }),
        {}
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columnSizing, columnSizingInfo, table.getFlatHeaders]
  );

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"}>
            <Settings2 /> Visualizar
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {table.getAllColumns().map((column) =>
            !column.getCanHide() ? null : (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={column.toggleVisibility}
              >
                {column.columnDef.meta?.nameInFilters}
              </DropdownMenuCheckboxItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <Table style={colSizesVariables}>
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
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                  {header.column.getCanResize() && (
                    <div
                      className={cn(
                        "absolute right-0 h-full bg-primary/10 w-1.5 top-0 cursor-col-resize opacity-0 group-hover:opacity-100 transition-all duration-300",
                        header.column.getIsResizing() &&
                          "opacity-100 bg-primary/20"
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

        {columnSizingInfo.isResizingColumn && (
          <MemoizedDataTableBody<TData> table={table} />
        )}

        {!columnSizingInfo.isResizingColumn && <DataTableBody table={table} />}
      </Table>
    </div>
  );
};
