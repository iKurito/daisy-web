/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchAndLoad from '../../hooks/useFecthAndLoad.hook';
import { ProteinProvider } from './context/protein.context';
import { useSearch } from '../../hooks';
import ProcessResult from './components/ProcessResult';

function ProteinPage() {
  const proteinId = useParams().proteinId ?? '';

  const { loading, callEndpoint } = useFetchAndLoad();

  const { retrieveProteinResponse } = useSearch(callEndpoint);

  useEffect(() => {
    if (proteinId === '') return;
    const service = async () => {
      await retrieveProteinResponse(proteinId);
    };
    service();
  }, []);

  return (
    <ProteinProvider>
      <div className="max-w-[1440px] mx-auto p-4 sm:p-6 space-y-6">
        <ProcessResult loading={loading} />
      </div>
    </ProteinProvider>
  );
}

export default ProteinPage;
