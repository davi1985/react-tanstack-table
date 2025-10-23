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

/**
 * Props for the DataTable component
 * @template TData - The type of data in the table rows
 */
export interface DataTableProps<TData> {
  /** Array of data to be displayed in the table */
  data: TData[];
  /** Column definitions for the table */
  columns: ColumnDef<TData>[];
  /** Child components to be rendered (filters, content, pagination, etc.) */
  children: ReactNode;
  /** Initial pagination state */
  pagination?: PaginationState;
  /** Callback fired when row selection changes */
  onSelectRow?: (selectedRows: TData[]) => void;
}

/**
 * Generic DataTable component built on TanStack Table
 * 
 * Provides a flexible, headless table implementation with support for:
 * - Row selection
 * - Sorting
 * - Filtering (text and faceted)
 * - Pagination
 * - Column visibility
 * - Column resizing
 * 
 * @template TData - The type of data in the table rows
 * @param props - DataTable props
 * @returns A context provider wrapping the table instance
 * 
 * @example
 * ```tsx
 * <DataTable data={users} columns={userColumns}>
 *   <DataTableTextFilter column="name" />
 *   <DataTableContent />
 *   <DataTablePagination />
 * </DataTable>
 * ```
 */
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
