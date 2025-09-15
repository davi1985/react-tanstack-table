import type { ColumnDef } from "@tanstack/react-table";
import { CreditCardIcon } from "lucide-react";
import type { Invoice } from "../invoice";

export const columns: ColumnDef<Invoice>[] = [
  { accessorKey: "invoice", header: "#", enableResizing: false },
  {
    accessorKey: "paymentStatus",
    header: () => (
      <div className="flex items-center gap-2">
        <CreditCardIcon className="size-4" /> Payment Status
      </div>
    ),
  },
  { accessorKey: "paymentMethod", header: "Payment Method" },
  { accessorKey: "totalAmount", header: "Amount" },
];
