import { ColumnDef } from '@tanstack/react-table';
import {
  LabelIcon,
  MiniChevronDownIcon,
  MiniChevronRightIcon,
  ProteinStructureIcon,
  RepeatedIcon,
} from '../../../icons';
import RepeatClassification from '../components/RepeatClassification';
import RepeatedUnits from '../components/RepeatedUnits';
import Structure from '../components/Structure';
import { Component } from '../../../models';

export const tabs = [
  {
    id: 0,
    name: 'Protein structure',
    icon: <ProteinStructureIcon />,
    component: <Structure />,
  },
  {
    id: 1,
    name: 'Repeat classifcation',
    icon: <LabelIcon />,
    component: <RepeatClassification />,
  },
  {
    id: 2,
    name: 'Repeated units',
    icon: <RepeatedIcon />,
    component: <RepeatedUnits />,
  },
];

export const dataColumns: ColumnDef<Component>[] = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => (
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
    ),
    enableColumnFilter: false,
    size: 20,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  },
  {
    accessorKey: 'id',
    header: 'Id',
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  },
  {
    accessorKey: 'isRepeat',
    header: 'Is repeat',
    cell: (info) => {
      return info.getValue() ? 'Yes' : 'No';
    },
    enableColumnFilter: false,
  },
  {
    accessorKey: 'time',
    header: 'Time',
    cell: (info) => {
      return new Date((info.getValue() as number) * 1000)
        .toISOString()
        .slice(11, 19);
    },
    enableColumnFilter: false,
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
  },
];
