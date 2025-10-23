import { DataTable } from "../data-table";
import { DataTableColumnsVisibilityDropDown } from "../data-table/data-table-columns-visibility-dropdown";
import { DataTableContent } from "../data-table/data-table-content";
import { DataTableFacetedFilter } from "../data-table/data-table-faceted-filter";
import { DataTableTextFilter } from "../data-table/data-table-text-filter";
import { columns } from "./columns";
import { invoices } from "./data";

export const InvoicesTable = () => (
  <DataTable data={invoices} columns={columns}>
    <div className="mb-4 flex items-center gap-4">
      <DataTableTextFilter placeholder="Search..." column="invoice" />

      <DataTableFacetedFilter column="paymentStatus" />

      <DataTableColumnsVisibilityDropDown />
    </div>

    <DataTableContent />
  </DataTable>
);
