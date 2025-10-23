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
import { useEffect, useMemo, useRef, type ReactNode } from "react";

import { DataTableContext } from "./data-table-context";

export interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  children: ReactNode;
  pagination?: PaginationState;
  onSelectRow?: (selectedRows: TData[]) => void;
}

export const DataTable = <TData,>({
  columns,
  data,
  children,
  pagination,
  onSelectRow,
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

  const selectedRow = useMemo(
    () => table.getSelectedRowModel().flatRows.map((row) => row.original),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [table.getSelectedRowModel().flatRows]
  );

  const memoOnSelectRow = useRef(onSelectRow);
  memoOnSelectRow.current = onSelectRow;

  useEffect(() => {
    memoOnSelectRow.current?.(selectedRow);
  }, [selectedRow]);

  return (
    <DataTableContext.Provider value={{ table }}>
      {children}
    </DataTableContext.Provider>
  );
};
