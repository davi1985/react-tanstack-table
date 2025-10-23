import { Settings2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useDataTable } from "./data-table-context";

/**
 * Dropdown menu for toggling column visibility
 * 
 * Features:
 * - Lists all columns that can be hidden
 * - Shows checkbox for each column's visibility state
 * - Uses column metadata (`nameInFilters`) for display names
 * - Automatically filters out columns that cannot be hidden
 * 
 * @returns Dropdown button with column visibility toggles
 * 
 * @example
 * ```tsx
 * <DataTable data={data} columns={columns}>
 *   <DataTableColumnsVisibilityDropDown />
 *   <DataTableContent />
 * </DataTable>
 * ```
 */
export const DataTableColumnsVisibilityDropDown = () => {
  const { table } = useDataTable();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"sm"}>
          <Settings2 /> Visualizar
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
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
  );
};
