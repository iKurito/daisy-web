import useFetchAndLoad from '../../hooks/useFecthAndLoad.hook';
import ProcessResult from './components/ProcessResult';
import SearchProcess from './components/SearchProcess';
import { SearchProvider } from './context/search.context';

function SearchPage() {
  const { loading, callEndpoint } = useFetchAndLoad();

  return (
    <SearchProvider>
      <div className="max-w-[1440px] mx-auto p-4 sm:p-6">
        <SearchProcess loading={loading} callEndpoint={callEndpoint} />
        <div className="h-6" />
        <ProcessResult loading={loading} />
      </div>
    </SearchProvider>
  );
}

export default SearchPage;
