import { DataTable } from "../data-table";
import { columns } from "./columns";
import { invoices } from "./data";

export const InvoicesTable = () => {
  return <DataTable data={invoices} columns={columns} />;
};
