import { useMemo } from "react";

import { Table } from "../ui/table";
import { DataTableBody, MemoizedDataTableBody } from "./data-table-body";
import { useDataTable } from "./data-table-context";
import { DataTableHeader } from "./data-table-header";

export const DataTableContent = () => {
  const { table } = useDataTable();
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
    <Table style={colSizesVariables}>
      <DataTableHeader />

      {columnSizingInfo.isResizingColumn && <MemoizedDataTableBody />}

      {!columnSizingInfo.isResizingColumn && <DataTableBody />}
    </Table>
  );
};
