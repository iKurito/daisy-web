import { ColumnDef, Row } from '@tanstack/react-table';
import { useMemo } from 'react';
import { dataColumns } from '../data';
import DataTable from '../../../components/DataTable/DataTable';
import { useSearchContext } from '../context/search.context';
import { Component } from '../../../models';

const renderSubComponent = ({ row }: { row: Row<Component> }) => {
  return (
    <pre style={{ fontSize: '10px' }}>
      <code>{JSON.stringify(row.original, null, 2)}</code>
    </pre>
  );
};

function ProcessTable() {
  const { response } = useSearchContext();

  const data = response.proteomeResult?.components ?? [];

  const formattedData = data
    .map((datum) => {
      const value = datum.structures.map((s) => {
        return {
          ...s,
          isRepeat: s.isRepeat ? 'Yes' : 'No',
          name: datum.name,
        };
      });
      return value;
    })
    .flat();

  const columns = useMemo<ColumnDef<Component>[]>(() => dataColumns, []);

  return (
    <div>
      <DataTable
        data={formattedData}
        columns={columns}
        messageNotFound="No data to display"
        renderSubComponent={renderSubComponent}
        getRowCanExpand={() => true}
      />
    </div>
  );
}

export default ProcessTable;
