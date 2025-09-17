import { DataTable } from "../data-table";
import type { Invoice } from "../invoice";
import { columns } from "./columns";
import { invoices } from "./data";

export const InvoicesTable = () => {
  const data = Array.from<Invoice[]>({ length: 100 }).fill(invoices).flat();

  return <DataTable data={data} columns={columns} />;
};
