import { Dropdown } from '../../../components';
import { downloadPdbStructureOptions } from '../../../data';
import { useSearchContext } from '../context/search.context';

function ProteinStructure() {
  const { response } = useSearchContext();

  const { id } = response.proteinResult;

  return (
    <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <h4 className="text-[18px] sm:text-[20px] font-bold">
            Processing Status:{' '}
            <span className="text-fourth text-[20px] sm:text-[25px]">
              Completed
            </span>
          </h4>
          <Dropdown items={downloadPdbStructureOptions} />
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5">
          <div className="space-y-2 flex-1">
            <h5 className="text-[15px] sm:text-[18px] font-semibold">
              3D Viewer
            </h5>
            <div
              id="myViewer"
              className="w-auto lg:w-[600px] h-[300px] sm:h-[500px] relative z-[100]"
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
            <iframe
              title="protein-structure"
              src="/assets/script/AF-O95905-F1-model_v4.cif"
              className="w-full h-[300px] sm:h-[500px] border rounded-lg border-gray-400 outline-none px-2 py-1 leading-5 bg-gray-300 overflow-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProteinStructure;
