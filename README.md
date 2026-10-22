# Advanced Data Table with TanStack Table

Study project focused on implementing an advanced data table using **TanStack Table v8** with React, TypeScript, and TailwindCSS.

## 🚀 Technologies

- **React 19** - UI Library
- **TypeScript** - Static typing
- **TanStack Table v8** - Headless table library
- **TailwindCSS v4** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **Vite** - Build tool

## ✨ Implemented Features

### 🎯 Core Features

- **Row Selection**
  - Checkbox for individual selection
  - Header checkbox to select all rows on the page
  - Indeterminate state when only some rows are selected
  - `onSelectRow` callback to capture selected rows

- **Sorting**
  - Ascending and descending sorting by column
  - Visual interface with icons indicating sort direction
  - Dropdown menu to control sorting

- **Filtering**
  - **Text Filter**: Text search in specific columns
  - **Faceted Filter**: Filters with multiple options based on unique column values
  - Unique value counters for each filter option

- **Pagination**
  - Previous/next page controls
  - Page size selector (rows per page)
  - Current page and total pages indicator
  - Direct navigation to first/last page

- **Column Visibility**
  - Toggle to show/hide columns
  - Dropdown with list of all available columns
  - Option to hide columns directly from header

- **Row Actions**
  - Dropdown menu with contextual actions (Edit, Delete)
  - Integration with Lucide icons

### 🏗️ Architecture

- **Reusable Component**: Generic DataTable with TypeScript
- **Context API**: Table state sharing between components
- **Composition**: Modular and compound components
- **Headless UI**: Separation of logic and presentation
- **Type Safety**: Strong typing with TypeScript

### 🎨 UI/UX

- **Modern Design**: Clean interface with TailwindCSS
- **Accessible Components**: Using Radix UI
- **Responsive**: Adaptive layout
- **Visual Feedback**: Well-defined hover, active, and focus states

## 📚 Learned Concepts

### TanStack Table

1. **Core Models**
   - `getCoreRowModel()` - Basic row model
   - `getFilteredRowModel()` - Filtered rows
   - `getSortedRowModel()` - Sorted rows
   - `getPaginationRowModel()` - Paginated rows

2. **Faceted Features**
   - `getFacetedUniqueValues()` - Unique values per column
   - `getFacetedMinMaxValues()` - Min/max values per column

3. **Column Definition**
   - `accessorKey` - Data access key
   - `header` - Header rendering
   - `cell` - Cell rendering
   - `meta` - Custom metadata
   - `enableSorting`, `enableHiding`, etc. - Feature control

4. **Table State Management**
   - Row selection state
   - Sorting state
   - Filter state
   - Pagination state
   - Column visibility state

5. **Hooks and APIs**
   - `useReactTable()` - Main hook
   - `table.getSelectedRowModel()` - Selected rows
   - `column.toggleSorting()` - Toggle sorting
   - `column.setFilterValue()` - Set filter
   - `table.toggleAllRowsSelected()` - Select all

### React Patterns

- **Compound Components**: Composition of related components
- **Render Props**: Rendering flexibility
- **Context Pattern**: State sharing
- **Generic Components**: TypeScript generic typed components
- **Controlled Components**: External state control

## 🎯 Project Structure

```
src/
├── components/
│   ├── data-table/              # Generic table components
│   │   ├── index.tsx            # Main DataTable
│   │   ├── data-table-context.tsx
│   │   ├── data-table-content.tsx
│   │   ├── data-table-header.tsx
│   │   ├── data-table-body.tsx
│   │   ├── data-table-column-header.tsx
│   │   ├── data-table-pagination.tsx
│   │   ├── data-table-text-filter.tsx
│   │   ├── data-table-faceted-filter.tsx
│   │   └── data-table-columns-visibility-dropdown.tsx
│   ├── invoices-tables/         # Specific implementation
│   │   ├── index.tsx
│   │   ├── columns.tsx          # Column definitions
│   │   └── data.ts              # Mock data
│   └── ui/                      # Base UI components (shadcn/ui)
└── App.tsx
```

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build
```

## 📖 References

- [TanStack Table Documentation](https://tanstack.com/table/latest)
- [Radix UI](https://www.radix-ui.com/)
- [TailwindCSS](https://tailwindcss.com/)

## 📝 Learning Notes

This project was developed as a study of TanStack Table v8 capabilities, exploring:
- Headless architecture for tables
- Complex component composition
- Table state management
- Advanced features implementation (filters, sorting, pagination)
- Modern React patterns with TypeScript

## License

This project is under the [MIT license](./LICENSE).
