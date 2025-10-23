import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useDataTable } from "./data-table-context";

interface DataTableFacetedFilterProps {
  column: string;
}

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
