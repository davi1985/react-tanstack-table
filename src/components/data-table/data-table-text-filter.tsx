import { Input } from "../ui/input";
import { useDataTable } from "./data-table-context";

type Props = {
  column?: string;
  placeholder?: string;
};

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
