/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { useSearchContext } from '../context/search.context';
import ResultsInProcess from './ResultsInProcess';
import ProcessTable from './ProcessTable';
import {
  RepeatClassification,
  RepeatedUnits,
  Structure,
} from '../../../components';
import ResultsNotFound from '../../../components/ResultsNotFound/ResultsNotFound';
import { tabs } from '../../../data';

interface Props {
  loading: boolean;
}

function ProcessResult({ loading }: Props) {
  const { response, activeTab, handleSetTab } = useSearchContext();
  const size = Object.entries(response).length;
  const items =
    size === 0 || !response.isReady
      ? []
      : response.proteinResult?.type === 'ERROR'
      ? []
      : response.proteinResult?.isRepeat
      ? tabs
      : tabs.filter((tab) => tab.id !== 2);

  useEffect(() => {
    handleSetTab(0);
  }, [response]);

  if (loading)
    return (
      <div className="flex items-center justify-center w-full py-10">
        <div className="custom-loader" />
      </div>
    );

  if (size === 0) return null;

  if (!response.valid)
    return (
      <ResultsNotFound
        message="We're sorry, but we were not able to process your request. Please
  check if you are using a valid accesion ID (PDB/Uniprot). If you are
  using an Uniprot acession ID, please verify that it has an AlphaFold
  entry."
      />
    );

  if (response.type === 'PROTEOME') return <ProcessTable />;

  return (
    <div>
      {size > 0 && !response.isReady ? (
        <ResultsInProcess />
      ) : (
        <>
          <ul className="flex overflow-x-auto test-sm font-semibold text-center gap-1">
            {items.map((tab) => {
              return (
                <li key={tab.id}>
                  <button
                    type="button"
                    className={`${
                      activeTab === tab.id
                        ? 'bg-primary text-gray-900'
                        : 'bg-gray-500 text-gray-100'
                    } flex xs:gap-2 items-center justify-center px-2 py-4 sm:p-4 rounded-t-lg min-w-[150px]`}
                    onClick={() => handleSetTab(tab.id)}
                  >
                    <div>{tab.icon}</div>
                    {tab.name}
                  </button>
                </li>
              );
            })}
          </ul>
          {activeTab === 0 && (
            <Structure proteinResult={response.proteinResult!} />
          )}
          {activeTab === 1 && (
            <RepeatClassification proteinResult={response.proteinResult!} />
          )}
          {activeTab === 2 && (
            <RepeatedUnits proteinResult={response.proteinResult!} />
          )}
        </>
      )}
    </div>
  );
}

export default ProcessResult;
