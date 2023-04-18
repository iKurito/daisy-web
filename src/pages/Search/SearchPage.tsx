import {
  LabelIcon,
  ProteinStructureIcon,
  RepeatedIcon,
  SearchIcon,
} from '../../icons';

function SearchPage() {
  return (
    <div className="max-w-[1440px] mx-auto p-4 sm:p-6 flex flex-col gap-4">
      <section className="border shadow-lg bg-secondary rounded-lg">
        <div className="p-2 sm:px-6 sm:py-4 space-y-1">
          <h2 className="text-[18px] xs:text-[20px] sm:text-[25px] font-bold">
            Search a process results
          </h2>
          <p className="text-[15px] sm:text-[18px]">
            The daisy server is able to process many request simultaneously. You
            cand find the request you have sent, their status and, when
            finished, the results.
          </p>
          <div className="flex flex-col space-y-1">
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
                className="rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth"
              />
              <button
                type="button"
                className="rounded-lg bg-third px-4 py-2 hover:shadow-lg font-bold tracking-wide text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
                onClick={() => {}}
              >
                <div className="text-fourth">
                  <SearchIcon />
                </div>
                <span>Find process</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <ul className="flex flex-wrap test-sm font-semibold text-center gap-1">
          <li>
            <span className="flex gap-2 items-center justify-center p-4 text-gray-900 bg-primary rounded-t-lg">
              <ProteinStructureIcon /> Protein structure
            </span>
          </li>
          <li>
            <span className="flex gap-2 items-center justify-center p-4 text-gray-100 bg-gray-500 rounded-t-lg">
              <LabelIcon /> Repeat classification
            </span>
          </li>
          <li>
            <span className="flex gap-2 items-center justify-center p-4 text-gray-100 bg-gray-500 rounded-t-lg">
              <RepeatedIcon /> Repeated units
            </span>
          </li>
        </ul>
        <section className=" shadow-lg bg-primary border-none rounded-b-lg rounded-tr-lg">
          <div className="p-2 sm:px-6 sm:py-4">
            <h2>Search</h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SearchPage;
