import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { useDataTable } from "./data-table-context";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

/**
 * Pagination controls for the data table
 * 
 * Features:
 * - Page size selector (rows per page)
 * - Current page indicator
 * - Navigation buttons:
 *   - First page
 *   - Previous page
 *   - Next page
 *   - Last page
 * - Disables prev/next buttons when at boundaries
 * 
 * @returns Pagination controls component
 * 
 * @example
 * ```tsx
 * <DataTable data={data} columns={columns}>
 *   <DataTableContent />
 *   <DataTablePagination />
 * </DataTable>
 * ```
 */
export const DataTablePagination = () => {
  const { table } = useDataTable();

  return (
    <div className="flex gap-14 items-center">
      <div className="flex items-center gap-2">
        <small>Rows per page</small>
        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="w-[100px] h-[32px]">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {[2, 4, 6, 8, 10].map((option) => (
                <SelectItem value={option.toString()} key={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <small>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </small>

      <div className="space-x-2">
        <Button variant="outline" size="sm" onClick={table.firstPage}>
          <ChevronsLeftIcon className="size-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={table.previousPage}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeftIcon className="size-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={table.nextPage}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className="size-4" />
        </Button>

        <Button variant="outline" size="sm" onClick={table.lastPage}>
          <ChevronsRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
};
