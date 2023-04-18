import {
  LabelIcon,
  ProteinStructureIcon,
  RepeatedIcon,
  SearchIcon,
} from '../../icons';

function SearchPage() {
  return (
    <div className="max-w-[1440px] mx-auto p-4 sm:p-6 space-y-6">
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
                className="rounded-lg bg-third px-4 py-2 hover:shadow-lg font-bold tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
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
        <ul className="flex overflow-x-auto test-sm font-semibold text-center gap-1">
          <li>
            <button
              type="button"
              className="flex xs:gap-2 items-center justify-center px-2 py-4 sm:p-4 text-gray-900 bg-primary rounded-t-lg min-w-[150px]"
            >
              <div>
                <ProteinStructureIcon />{' '}
              </div>
              Protein structure
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex xs:gap-2 items-center justify-center px-2 py-4 sm:p-4 text-gray-100 bg-gray-500 rounded-t-lg min-w-[150px]"
            >
              <div>
                <LabelIcon />{' '}
              </div>
              Repeat classification
            </button>
          </li>
          <li>
            <button
              type="button"
              className="flex xs:gap-2 items-center justify-center px-2 py-4 sm:p-4 text-gray-100 bg-gray-500 rounded-t-lg min-w-[150px]"
            >
              <div>
                <RepeatedIcon />{' '}
              </div>
              Repeated units
            </button>
          </li>
        </ul>
        <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
          <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 flex flex-row gap-6">
            <div className="">
              <h5 className="text-[15px] sm:text-[18px] font-semibold">
                3D structure viewer
              </h5>
              <div className="h-auto">
                <div
                  id="myViewer"
                  className="w-auto sm:w-[400px] h-[300px] sm:h-[400px] relative"
                >
                  <pdbe-molstar
                    id="pdbeMolstarComponent"
                    molecule-id="2nnu"
                    hide-controls="false"
                  />
                </div>
              </div>
            </div>
            <div className="w-full space-y-2">
              <div className="flex justify-end">
                <h4 className="text-[18px] sm:text-[20px] font-bold">
                  Processing Status:{' '}
                  <span className="text-third text-[20px] sm:text-[25px]">
                    Completed
                  </span>
                </h4>
              </div>
              <div className="space-y-2">
                <p>
                  The following protein structures was obtained using the
                  DeepReSPred web service with the requested protein sequence as
                  input
                </p>
                <h4 className="text-[18px] sm:text-[20px] font-semibold">
                  Requested protein sequence:
                </h4>
                <textarea
                  className="w-full border rounded-lg h-40 border-gray-400 outline-none px-3 py-2 resize-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth leading-5 bg-gray-300 text-[12px] sm:text-[15px]"
                  value=">tr|E5AT83|E5AT83_MYCRK Transposase OS=Mycetohabitans rhizoxinica (strain DSM 19002 / CIP 109453 / HKI 454) OX=882378 GN=RBRH_01347 PE=4 SV=1 MAGNSGGAQALKAVLEHGPTLRQRDLSLIDIVEIASNGRRPGVESIAMYACGMSMREIQG FLLERYGIEVSPNFISTVTDEVRAW"
                  disabled
                />
                <h4 className="text-[18px] sm:text-[20px] font-semibold">
                  Structure prediction results:
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SearchPage;
