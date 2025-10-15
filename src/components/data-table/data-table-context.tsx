import type { Table } from "@tanstack/react-table";
import { createContext, useContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataTableContextValue<TData = any> = {
  table: Table<TData>;
};

export const DataTableContext = createContext({} as DataTableContextValue);

export const useDataTable = () => {
  const ctxValue = useContext(DataTableContext);

  if (!ctxValue) {
    throw new Error("`useDataTable` should be used inside a DataTable");
  }

  return ctxValue;
};
