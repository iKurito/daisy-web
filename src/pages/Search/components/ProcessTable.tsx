import { ColumnDef, Row } from '@tanstack/react-table';
import { useMemo } from 'react';
import { dataColumns } from '../data';
import DataTable from '../../../components/DataTable/DataTable';
import { useSearchContext } from '../context/search.context';
import { Component } from '../../../models';
import { formattedTime } from '../../../utilities/time.utility';

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

  const { isReady } = response;

  const { id, timeMean } = response.proteomeResult ?? {};

  const formatTime = useMemo(() => formattedTime(timeMean!), [timeMean]);

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
    <div className="bg-primary px-4 py-6 border rounded-lg shadow-lg space-y-4 mb-96">
      <div>
        <h4 className="text-[18px] sm:text-[20px] font-bold">
          Processing Status:{' '}
          <span className="text-fourth text-[20px] sm:text-[25px]">
            {isReady ? 'Finished' : 'Processing'}
          </span>
        </h4>
        <h5 className="text-[15px] sm:text-[18px] font-semibold">
          Average Time - {formatTime} (HH:MM:SS)
        </h5>
      </div>
      <h2 className="text-2xl xs:text-4xl sm:text-[40px] font-bold text-center">
        {id}
      </h2>
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
