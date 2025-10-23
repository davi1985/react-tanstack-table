import { InvoicesTable } from "./components/invoices-tables";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Advanced Data Table</h1>
          <p className="text-muted-foreground text-sm">
            Interactive table with sorting, filtering, pagination and row selection using TanStack Table.
            Built as part of{" "}
            <a 
              href="https://jstack.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              JStack
            </a>{" "}
            training platform.
          </p>
        </div>
        <InvoicesTable />
      </div>

      <footer className="border-t py-6 px-10">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Development by Davi Silva</span>
          <span>•</span>
          <a
            href="https://github.com/davi1985/react-tanstack-table"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline"
          >
            View on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};
