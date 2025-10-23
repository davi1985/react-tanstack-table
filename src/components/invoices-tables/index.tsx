import { DataTable } from "../data-table";
import { DataTableColumnsVisibilityDropDown } from "../data-table/data-table-columns-visibility-dropdown";
import { DataTableContent } from "../data-table/data-table-content";
import { DataTableFacetedFilter } from "../data-table/data-table-faceted-filter";
import { DataTablePagination } from "../data-table/data-table-pagination";
import { DataTableTextFilter } from "../data-table/data-table-text-filter";
import { columns } from "./columns";
import { invoices } from "./data";

export const InvoicesTable = () => (
  <DataTable
    data={invoices}
    columns={columns}
    pagination={{
      pageIndex: 0,
      pageSize: 2,
    }}
    onSelectRow={(selectedRows) => console.log({ selectedRows })}
  >
    <div className="mb-4 flex items-center gap-4">
      <DataTableTextFilter placeholder="Search..." column="invoice" />

      <DataTableFacetedFilter column="paymentStatus" />

      <DataTableColumnsVisibilityDropDown />
    </div>

    <DataTableContent />

    <div className="flex items-center justify-end mt-4">
      <DataTablePagination />
    </div>
  </DataTable>
);
