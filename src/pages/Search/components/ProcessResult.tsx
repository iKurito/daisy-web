import { useSearchContext } from '../context/search.context';
import { tabs } from '../data';

function ProcessResult() {
  const { activeTab, handleSetTab } = useSearchContext();

  return (
    <div>
      <ul className="flex overflow-x-auto test-sm font-semibold text-center gap-1">
        {tabs.map((tab) => (
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
        ))}
      </ul>
      {tabs.find((tab) => tab.id === activeTab)?.component}
    </div>
  );
}

export default ProcessResult;
