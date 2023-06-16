import { useSearch } from '../../hooks';
import ProcessResult from './components/ProcessResult';
import SearchProcess from './components/SearchProcess';
import { SearchProvider } from './context/search.context';

function SearchPage() {
  const { loading, retrieveResponse } = useSearch();

  return (
    <SearchProvider>
      <div className="max-w-[1440px] mx-auto p-4 sm:p-6 space-y-6">
        <SearchProcess loading={loading} retrieveResponse={retrieveResponse} />
        <ProcessResult loading={loading} />
      </div>
    </SearchProvider>
  );
}

export default SearchPage;
