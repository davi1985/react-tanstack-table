import {
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type PaginationState,
} from "@tanstack/react-table";
import { type ReactNode } from "react";

import { DataTableContext } from "./data-table-context";

export interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  children: ReactNode;
  pagination?: PaginationState;
}

export const DataTable = <TData,>({
  columns,
  data,
  children,
  pagination,
}: DataTableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: "onChange",
    defaultColumn: {
      size: 100,
    },
    initialState: {
      pagination,
    },
    globalFilterFn: "equalsString",
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <DataTableContext.Provider value={{ table }}>
      {children}
    </DataTableContext.Provider>
  );
};
