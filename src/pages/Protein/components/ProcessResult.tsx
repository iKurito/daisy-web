/* eslint-disable no-nested-ternary */
import { useProteinContext } from '../context/protein.context';
import { RepeatClassification, RepeatedUnits } from '../../../components';
import Structure from '../../../components/Structure/Structure';
import ResultsNotFound from '../../../components/ResultsNotFound/ResultsNotFound';
import { tabs } from '../../../data';

interface Props {
  loading: boolean;
}

function ProcessResult({ loading }: Props) {
  const { protein, activeTab, handleSetTab } = useProteinContext();
  const size = Object.entries(protein).length;

  const items =
    size === 0
      ? []
      : protein.proteinResult?.type === 'ERROR'
      ? []
      : protein.proteinResult?.isRepeat
      ? tabs
      : tabs.filter((tab) => tab.id !== 2);

  if (loading)
    return (
      <div className="flex items-center justify-center w-full py-10">
        <div className="custom-loader" />
      </div>
    );

  if (size === 0) return null;

  if (!protein.result)
    return (
      <ResultsNotFound
        message="We're sorry, but we were not able to process your request. Please
  check if you are using a valid accesion ID (PDB/Uniprot). If you are
  using an Uniprot acession ID, please verify that it has an AlphaFold
  entry."
      />
    );

  return (
    <div>
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
      {activeTab === 0 && <Structure proteinResult={protein.proteinResult} />}
      {activeTab === 1 && (
        <RepeatClassification proteinResult={protein.proteinResult} />
      )}
      {activeTab === 2 && (
        <RepeatedUnits proteinResult={protein.proteinResult} />
      )}
    </div>
  );
}

export default ProcessResult;
