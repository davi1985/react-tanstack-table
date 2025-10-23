import type { Table } from "@tanstack/react-table";
import { createContext, useContext } from "react";

/**
 * Context value type for DataTable
 * @template TData - The type of data in the table rows
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataTableContextValue<TData = any> = {
  /** TanStack Table instance */
  table: Table<TData>;
};

/**
 * Context for sharing the table instance across DataTable components
 */
export const DataTableContext = createContext({} as DataTableContextValue);

/**
 * Hook to access the DataTable context
 * 
 * Must be used within a DataTable component
 * 
 * @returns The table instance from context
 * @throws Error if used outside of DataTable context
 * 
 * @example
 * ```tsx
 * const { table } = useDataTable();
 * const rows = table.getRowModel().rows;
 * ```
 */
export const useDataTable = () => {
  const ctxValue = useContext(DataTableContext);

  if (!ctxValue) {
    throw new Error("`useDataTable` should be used inside a DataTable");
  }

  return ctxValue;
};
