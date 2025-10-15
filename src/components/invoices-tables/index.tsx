import { DataTable } from "../data-table";
import { DataTableColumnsVisibilityDropDown } from "../data-table/data-table-columns-visibility-dropdown";
import { DataTableContent } from "../data-table/data-table-content";
import { columns } from "./columns";
import { invoices } from "./data";

export const InvoicesTable = () => (
  <DataTable data={invoices} columns={columns}>
    <div className="mb-4 flex justify-end">
      <DataTableColumnsVisibilityDropDown />
    </div>

    <DataTableContent />
  </DataTable>
);
