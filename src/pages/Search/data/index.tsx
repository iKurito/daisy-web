import { ColumnDef } from '@tanstack/react-table';
import { Component } from '../../../models';
import { formattedTime } from '../../../utilities/time.utility';

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
      return formattedTime(info.getValue() as number);
    },
    enableColumnFilter: false,
    enableSorting: true,
  },
];
