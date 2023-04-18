import ProcessResult from './components/ProcessResult';
import SearchProcess from './components/SearchProcess';
import { SearchProvider } from './context/search.context';

function SearchPage() {
  return (
    <SearchProvider>
      <div className="max-w-[1440px] mx-auto p-4 sm:p-6 space-y-6">
        <SearchProcess />
        <ProcessResult />
      </div>
    </SearchProvider>
  );
}

export default SearchPage;
