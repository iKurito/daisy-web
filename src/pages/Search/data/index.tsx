import { ColumnDef } from '@tanstack/react-table';
import {
  LabelIcon,
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
    accessorKey: 'name',
    header: 'Proteome Component',
    cell: (info) => info.getValue(),
    enableColumnFilter: false,
    enableSorting: true,
  },
  {
    accessorKey: 'id',
    header: 'Protein Structure',
    cell: (info) => info.getValue(),
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
    cell: (info) => {
      return info.getValue() ? 'Yes' : 'No';
    },
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
