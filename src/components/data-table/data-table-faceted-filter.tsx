import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useDataTable } from "./data-table-context";

/**
 * Props for DataTableFacetedFilter component
 */
interface DataTableFacetedFilterProps {
  /** Column ID to create faceted filter for */
  column: string;
}

/**
 * Faceted filter dropdown for table columns
 * 
 * Automatically generates filter options based on unique values in the column.
 * Shows the count of occurrences for each unique value.
 * 
 * Uses TanStack Table's `getFacetedUniqueValues()` to extract unique values
 * and their frequencies.
 * 
 * @param props - Component props
 * @returns Select dropdown with faceted filter options
 * 
 * @example
 * ```tsx
 * <DataTable data={data} columns={columns}>
 *   <DataTableFacetedFilter column="status" />
 *   <DataTableContent />
 * </DataTable>
 * ```
 */
export const DataTableFacetedFilter = ({
  column,
}: DataTableFacetedFilterProps) => {
  const { table } = useDataTable();

  const tableColumn = table.getColumn(column);
  const facet = tableColumn?.getFacetedUniqueValues();
  const items = facet?.keys();
  const options = items ? Array.from(items) : [];

  return (
    <Select onValueChange={(value) => tableColumn?.setFilterValue(value)}>
      <SelectTrigger>
        <SelectValue placeholder={"Select..."} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem value={option} key={option}>
              {option} ({facet?.get(option)})
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
