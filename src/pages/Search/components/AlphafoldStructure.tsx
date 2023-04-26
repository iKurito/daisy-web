/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useSearchContext } from '../context/search.context';
import { alphaBuilder, readFile } from '../functions';
import { Dropdown } from '../../../components';
import { downloadAlphaFoldStructureOptions } from '../../../data';

function AlphafoldStructure() {
  const { response } = useSearchContext();
  const { id } = response.proteinResult;

  const alphaFoldContainer = useRef(null);

  const options = downloadAlphaFoldStructureOptions.map((option) => {
    return {
      ...option,
      href: option.href.replace('UNIPROT', id),
    };
  });

  const url = `https://alphafold.ebi.ac.uk/files/AF-${id}-F1-model_v4.cif`;

  useEffect(() => {
    alphaBuilder(id, alphaFoldContainer);
  }, []);

  useEffect(() => {
    readFile(url);
  }, [url]);

  return (
    <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
      <div className="flex flex-col">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <h4 className="text-[18px] sm:text-[20px] font-bold">
            Processing Status:{' '}
            <span className="text-fourth text-[20px] sm:text-[25px]">
              Completed
            </span>
          </h4>
          <Dropdown items={options} />
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5">
          <div className="space-y-2 flex-1">
            <h5 className="text-[15px] sm:text-[18px] font-semibold">
              3D Viewer - {id} (UniProt ID)
            </h5>
            <div className="w-auto lg:w-[600px] h-[300px] sm:h-[500px] relative z-[100]">
              <div className="mt-[100px]" ref={alphaFoldContainer} />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <h4 className="text-[18px] sm:text-[20px] font-semibold">
              Requested protein structure:
            </h4>
            <textarea
              id="text-area-file"
              className="w-full h-[300px] sm:h-[590px] border rounded-lg border-gray-400 outline-none px-2 py-1 leading-5 bg-gray-300 overflow-auto text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlphafoldStructure;
