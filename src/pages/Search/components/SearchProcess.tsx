import { SearchIcon } from '../../../icons';
import { SnackBarUtilities } from '../../../utilities';
import { useSearchContext } from '../context/search.context';

function SearchProcess() {
  const { processId, handleChange } = useSearchContext();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pdbRegex = /^[0-9][a-zA-Z_0-9]{3}$/;
    const unitprotRegex =
      /^([OPQ][0-9][A-Z0-9]{3}[0-9]|[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2})$/;
    // Validate processId
    if (processId.length === 0) {
      SnackBarUtilities.error('Enter a Process ID');
      return;
    }
    if (!pdbRegex.test(processId) && !unitprotRegex.test(processId)) {
      SnackBarUtilities.error('Invalid Process ID');
      return;
    }
    SnackBarUtilities.success('Perfect');
  };

  return (
    <section className="border shadow-lg bg-secondary rounded-lg">
      <div className="p-2 sm:px-6 sm:py-4 space-y-1">
        <h2 className="text-[18px] xs:text-[20px] sm:text-[25px] font-bold">
          Search a process results
        </h2>
        <p className="text-[15px] sm:text-[18px]">
          The daisy server is able to process many request simultaneously. You
          cand find the request you have sent, their status and, when finished,
          the results.
        </p>
        <form className="flex flex-col space-y-1" onSubmit={handleClick}>
          <label
            htmlFor="processId"
            className="text-[15px] sm:text-[20px] font-semibold"
          >
            Process ID <strong className="text-fourth">*</strong>
          </label>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <input
              name="processId"
              type="text"
              value={processId}
              className="rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="rounded-lg bg-third px-4 py-2 hover:shadow-lg font-bold tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
              // onClick={handleClick}
            >
              <div className="text-fourth">
                <SearchIcon />
              </div>
              <span>Find process</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchProcess;
