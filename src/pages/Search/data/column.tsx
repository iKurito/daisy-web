import { ColumnDef } from '@tanstack/react-table';
import { MiniChevronDownIcon, MiniChevronRightIcon } from '../../../icons';
import { Component } from '../../../models';

export const dataColumns: ColumnDef<Component>[] = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button
          type="button"
          className="hover:bg-gray-100 rounded-full p-1"
          {...{
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: 'pointer' },
          }}
        >
          {row.getIsExpanded() ? (
            <MiniChevronDownIcon />
          ) : (
            <MiniChevronRightIcon />
          )}
        </button>
      ) : (
        '🔵'
      );
    },
    enableColumnFilter: false,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (info) => info.getValue(),
    enableColumnFilter: true,
  },
];
