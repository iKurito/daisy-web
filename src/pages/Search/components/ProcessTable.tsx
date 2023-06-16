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
    .map((d) => {
      const b = d.structures.map((s) => {
        return {
          ...s,
          name: d.name,
        };
      });
      return b;
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
        isFilter={false}
      />
    </div>
  );
}

export default ProcessTable;
