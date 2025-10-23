import { Input } from "../ui/input";
import { useDataTable } from "./data-table-context";

/**
 * Props for DataTableTextFilter component
 */
type Props = {
  /** Column ID to filter. If not provided, filters globally across all columns */
  column?: string;
  /** Placeholder text for the input field */
  placeholder?: string;
};

/**
 * Text input filter for table data
 * 
 * Can filter either:
 * - A specific column (when `column` prop is provided)
 * - All columns globally (when `column` prop is omitted)
 * 
 * @param props - Component props
 * @returns Input field for filtering
 * 
 * @example
 * ```tsx
 * // Filter specific column
 * <DataTableTextFilter column="name" placeholder="Search by name..." />
 * 
 * // Global filter
 * <DataTableTextFilter placeholder="Search all columns..." />
 * ```
 */
export const DataTableTextFilter = ({ column, placeholder }: Props) => {
  const { table } = useDataTable();

  if (column) {
    const tableColumn = table.getColumn(column);
    const value = tableColumn?.getFilterValue() as string | undefined;

    return (
      <Input
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(ev) => tableColumn?.setFilterValue(ev.target.value)}
      />
    );
  }

  return (
    <Input
      placeholder={placeholder}
      // value={value ?? ""}
      onChange={(ev) => table?.setGlobalFilter(ev.target.value)}
    />
  );
};
