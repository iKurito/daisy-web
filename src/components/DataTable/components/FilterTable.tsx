import { flexRender, Table } from '@tanstack/react-table';
import { Filter } from '../../Filter/Filter';

interface Props {
  table: Table<unknown>;
}

export function FilterTable({ table }: Props) {
  return (
    <section className="p-4 border rounded-lg bg-primary shadow-lg space-y-2">
      <span className="text-[18px] xs:text-[20px] sm:text-[25px] font-bold">
        Filters
      </span>
      <div className="grid md:grid-cols-3 gap-1 md:gap-4">
        {table.getHeaderGroups().map((headerGroup) =>
          headerGroup.headers.map((header) =>
            header.column.getCanFilter() ? (
              <div key={header.id}>
                <span className="text-[15px] sm:text-[18px]">
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
