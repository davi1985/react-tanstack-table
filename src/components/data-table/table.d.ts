/**
 * Type augmentation for TanStack Table
 * 
 * Extends the ColumnMeta interface to add custom metadata properties
 * that can be used throughout the DataTable components.
 */

import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData, TValue> {
    /**
     * Custom display name for the column in filters and visibility controls
     * 
     * Used by:
     * - DataTableColumnsVisibilityDropDown: Shows this name in the column visibility dropdown
     * - DataTableFacetedFilter: Can be used for filter labels
     * 
     * @example
     * ```tsx
     * {
     *   accessorKey: "paymentStatus",
     *   meta: {
     *     nameInFilters: "Payment Status"
     *   }
     * }
     * ```
     */
    nameInFilters?: string;
  }
}
