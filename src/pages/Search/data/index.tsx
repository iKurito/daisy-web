import { ColumnDef } from '@tanstack/react-table';
import { Component } from '../../../models';

export const dataColumns: ColumnDef<Component>[] = [
  {
    accessorKey: 'name',
    header: 'Proteome Component',
    cell: (info) => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true,
  },
  {
    accessorKey: 'id',
    header: 'Protein Structure',
    cell: (info) => {
      const value = info.getValue() as string;
      return (
        <a
          href={`/protein/${value}`}
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      );
    },
    enableColumnFilter: false,
    enableSorting: true,
  },
  {
    accessorKey: 'type',
    header: 'Structure Database',
    cell: (info) => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true,
  },
  {
    accessorKey: 'isRepeat',
    header: 'Tandem Repeat',
    cell: (info) => info.getValue(),
    enableColumnFilter: true,
    enableSorting: true,
  },
  {
    accessorKey: 'time',
    header: 'Processing Time',
    cell: (info) => {
      return new Date((info.getValue() as number) * 1000)
        .toISOString()
        .slice(11, 19);
    },
    enableColumnFilter: false,
    enableSorting: true,
  },
];
