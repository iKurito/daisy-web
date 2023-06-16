import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  SortingState,
  useReactTable,
  ExpandedState,
  Row,
} from '@tanstack/react-table';
import { Fragment, useState } from 'react';
import PaginationTable from './components/PaginationTable';
import { FilterTable } from './components/FilterTable';
import { filterObjectArray, fuzzyFilter } from '../../utilities';
import TopTable from './components/TopTable';

interface Props {
  data: any[];
  columns: any[];
  messageNotFound: string;
  isFilter?: boolean;
  getRowCanExpand: (row: Row<any>) => boolean;
  renderSubComponent: (props: { row: Row<any> }) => React.ReactElement;
}

const defaultProps = {
  isFilter: true,
};

function DataTable({
  data,
  columns,
  messageNotFound,
  isFilter,
  getRowCanExpand,
  renderSubComponent,
}: Props & typeof defaultProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
      custom: filterObjectArray,
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
      expanded,
    },
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getRowCanExpand,
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="mb-24">
      {isFilter && <FilterTable table={table} />}
      <section className="px-4 py-6 border rounded-lg bg-primary shadow-lg space-y-4 select-none">
        <TopTable
          table={table}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <div className="shadow-md overflow-x-auto relative border border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        className="group px-6 py-3 text-left text-xs sm:stext-sm text-gray-500 uppercase tracking-wider cursor-pointer"
                        style={{ width: header.getSize() }}
                      >
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => {
                return (
                  <Fragment key={row.id}>
                    <tr className="font-light">
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className="px-6 py-4 whitespace-pre-wrap"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                    {row.getIsExpanded() && (
                      <tr>
                        {/* 2nd row is a custom 1 cell row */}
                        <td colSpan={row.getVisibleCells().length}>
                          {renderSubComponent({ row })}
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        {data.length === 0 ? (
          <p className="text-center text-xs lg:text-base text-gray-500">
            {messageNotFound}
          </p>
        ) : (
          <PaginationTable table={table} />
        )}
      </section>
    </div>
  );
}

DataTable.defaultProps = defaultProps;

export default DataTable;
