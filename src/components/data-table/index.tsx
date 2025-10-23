import {
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  getFilteredRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import { type ReactNode } from "react";

import { DataTableContext } from "./data-table-context";

export interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  children: ReactNode;
}

export const DataTable = <TData,>({
  columns,
  data,
  children,
}: DataTableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    defaultColumn: {
      size: 100,
    },
    globalFilterFn: "equalsString",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  return (
    <DataTableContext.Provider value={{ table }}>
      {children}
    </DataTableContext.Provider>
  );
};
