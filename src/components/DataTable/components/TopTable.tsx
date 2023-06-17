import { Table } from '@tanstack/react-table';
import { Dispatch, SetStateAction } from 'react';
import { DebouncedInput } from '../../Input/DebouncedInput';

interface Props {
  table: Table<unknown>;
  globalFilter: string;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
}

function TopTable({ table, globalFilter, setGlobalFilter }: Props) {
  const showList = [5, 10, 20];

  const handleChange = (value: string | number) => {
    setGlobalFilter(String(value));
  };

  return (
    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between">
      <label>
        <span className="sr-only">Items Per Page</span>
        <select
          className="w-full md:w-32 rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {showList.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </label>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 bg-white text-gray-500"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default TopTable;
