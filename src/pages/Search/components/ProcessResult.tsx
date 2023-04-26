/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { useSearchContext } from '../context/search.context';
import { tabs } from '../data';
import ResultsNotFound from './ResultsNotFound';
import ResultsInProcess from './ResultsInProcess';

function ProcessResult() {
  const { response, activeTab, handleSetTab, loading, handleLoading } =
    useSearchContext();
  const size = Object.entries(response).length;
  const items =
    size === 0 || !response.isReady
      ? []
      : response.proteinResult.type === 'ERROR'
      ? []
      : response.proteinResult.isRepeat
      ? tabs
      : tabs.filter((tab) => tab.id !== 2);

  useEffect(() => {
    handleLoading(true);
    handleSetTab(0);
    setTimeout(() => {
      handleLoading(false);
    }, 1000);
  }, [response]);

  if (size === 0) return null;

  if (loading)
    return (
      <div className="flex items-center justify-center w-full py-10">
        <div className="custom-loader" />
      </div>
    );

  if (!response.valid) return <ResultsNotFound />;

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
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </>
      )}
    </div>
  );
}

export default ProcessResult;
