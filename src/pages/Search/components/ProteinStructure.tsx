import { MiniDownloadIcon } from '../../../icons';
import { useSearchContext } from '../context/search.context';

function ProteinStructure() {
  const { response } = useSearchContext();

  const { id } = response.proteinResult;

  return (
    <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
      <div className="flex flex-col gap-1">
        <div className="w-full flex items-center justify-between">
          <h4 className="text-[18px] sm:text-[20px] font-bold">
            Processing Status:{' '}
            <span className="text-fourth text-[20px] sm:text-[25px]">
              Completed
            </span>
          </h4>
          <button
            type="submit"
            className="rounded-lg bg-third px-4 py-2 hover:shadow-lg font-bold tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
          >
            <div className="text-fourth">
              <MiniDownloadIcon />
            </div>
            <span>Download</span>
          </button>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5">
          <div className="space-y-2 flex-1">
            <h5 className="text-[15px] sm:text-[18px] font-semibold">
              3D Viewer
            </h5>
            <div
              id="myViewer"
              className="w-auto lg:w-[500px] xl:w-[800px] h-[300px] sm:h-[500px] relative z-[100]"
            >
              <pdbe-molstar
                id="pdbeMolstarComponent"
                molecule-id={id.toLowerCase()}
                hide-controls="false"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <h4 className="text-[18px] sm:text-[20px] font-semibold">
              Requested protein structure:
            </h4>
            <textarea
              className="w-full border rounded-lg h-40 border-gray-400 outline-none px-3 py-2 resize-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth leading-5 bg-gray-300 text-[12px] sm:text-[15px]"
              value=">tr|E5AT83|E5AT83_MYCRK Transposase OS=Mycetohabitans rhizoxinica (strain DSM 19002 / CIP 109453 / HKI 454) OX=882378 GN=RBRH_01347 PE=4 SV=1 MAGNSGGAQALKAVLEHGPTLRQRDLSLIDIVEIASNGRRPGVESIAMYACGMSMREIQG FLLERYGIEVSPNFISTVTDEVRAW"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProteinStructure;
