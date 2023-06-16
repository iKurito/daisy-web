import { Column, Table } from '@tanstack/react-table';
import { useMemo } from 'react';
import { DebouncedInput } from '../Input/DebouncedInput';

interface Props {
  column: Column<unknown>;
  table: Table<unknown>;
}

export function Filter({ column, table }: Props) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = useMemo(() => {
    if (typeof firstValue === 'number') return [];
    if (typeof firstValue === 'string')
      return Array.from(column.getFacetedUniqueValues().keys()).sort();
    const values = column
      .getFacetedRowModel()
      .rows.map((row: any) =>
        row.original.roles.map((value: any) => value.name)
      );
    return Array.from(new Set(values.flat())).sort();
  }, [column, firstValue]);

  return typeof firstValue === 'number' ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={(value: string | number) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ''
          }`}
          className="font-light cursor-pointer appearance-none bg-white w-full px-2 py-2 border border-gray-300 rounded-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={(value: string | number) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ''
          }`}
          className="font-light cursor-pointer appearance-none bg-white w-full px-2 py-2 border border-gray-300 rounded-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : (
    <select
      className="font-light cursor-pointer appearance-none bg-white w-full px-2 py-2 border border-gray-300 rounded-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
      value={(columnFilterValue ?? '') as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder="Filtrar"
    >
      <option value="">Todos</option>
      {sortedUniqueValues.map((value: string | number) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
}
