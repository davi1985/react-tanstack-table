import { InvoicesTable } from "./components/invoices-tables";

export const App = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold">TanStack Table</h1>

      <div className="border mt-5 rounded-md shadow-sm py-2">
        <InvoicesTable />
      </div>
    </div>
  );
};
