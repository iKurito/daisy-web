import { flexRender, Table } from '@tanstack/react-table';
import { Filter } from '../../Filter/Filter';

interface Props {
  table: Table<unknown>;
}

export function FilterTable({ table }: Props) {
  return (
    <section className="p-4 border rounded-lg bg-white shadow-lg space-y-2">
      <span className="text-base md:text-lg text-gray-600 font-bold">
        Filtros
      </span>
      <div className="grid md:grid-cols-3 gap-4 text-gray-700">
        {table.getHeaderGroups().map((headerGroup) =>
          headerGroup.headers.map((header) =>
            header.column.getCanFilter() ? (
              <div key={header.id}>
                <span className="text-sm font-light">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </span>
                <Filter column={header.column} table={table} />
              </div>
            ) : null
          )
        )}
      </div>
    </section>
  );
}