import { ColumnDef, Row } from '@tanstack/react-table';
import { useMemo } from 'react';
import { dataColumns } from '../data/column';
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

  const columns = useMemo<ColumnDef<Component>[]>(() => dataColumns, []);

  return (
    <section className="shadow-lg bg-primary border-none rounded-lg">
      <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
        <DataTable
          data={data}
          columns={columns}
          messageNotFound="No data to display"
          renderSubComponent={renderSubComponent}
          getRowCanExpand={() => true}
          isFilter={false}
        />
      </div>
    </section>
  );
}

export default ProcessTable;
