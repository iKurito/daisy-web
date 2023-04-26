/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useSearchContext } from '../context/search.context';
import { alphaBuilder, readFile } from '../functions';
import { Dropdown } from '../../../components';
import { downloadAlphaFoldStructureOptions } from '../../../data';

function AlphafoldStructure() {
  const { response } = useSearchContext();
  const { id, type, isRepeat } = response.proteinResult;

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
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <h4 className="text-[18px] sm:text-[20px] font-bold">
            Processing Status:{' '}
            <span className="text-fourth text-[20px] sm:text-[25px]">
              Completed
            </span>
          </h4>
          <Dropdown items={options} />
        </div>
        <h2 className="text-2xl xs:text-4xl sm:text-[40px] font-bold text-center">
          {id} ({type === 'PDB' ? 'PDB ID' : 'UniProt ID'})
        </h2>
        <div className="flex items-center justify-start">
          <p className="text-[20px] sm:text-[25px] leading-5 text-center font-bold">
            Tandem Repeats{' '}
            {isRepeat ? (
              <span className="text-fourth">Identified</span>
            ) : (
              <span className="text-red-600">Not Identified</span>
            )}
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="space-y-2 flex-1">
            <h5 className="text-[15px] sm:text-[18px] font-semibold">Legend</h5>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[rgb(0,83,215)]" />
                  <span className="text-xs sm:text-sm">
                    Very high (pLDDT {'>'} 90)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[rgb(101,203,243)]" />
                  <span className="text-xs sm:text-sm">
                    Confident (90 {'>'} pLDDT {'>'} 70)
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[rgb(255,210,19)]" />
                  <span className="text-xs sm:text-sm">
                    Low (70 {'>'} pLDDT {'>'} 50)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[rgb(255,125,69)]" />
                  <span className="text-xs sm:text-sm">
                    Very low (pLDDT {'<'} 50)
                  </span>
                </div>
              </div>
            </div>
            <h5 className="text-[15px] sm:text-[18px] font-semibold">
              3D Viewer - {id} (UniProt ID)
            </h5>
            <div className="w-auto xl:w-[800px] h-[300px] sm:h-[500px] relative z-[100]">
              <div className="mt-[100px]" ref={alphaFoldContainer} />
            </div>
            <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-6 pt-2">
              <span className="text-[15px] sm:text-[18px] font-bold">
                Powered by
              </span>
              <img
                src="assets/img/deep-mind_logo.webp"
                className="w-60"
                alt="deep-mind"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <h4 className="text-[18px] sm:text-[20px] font-semibold">
              Requested protein structure:
            </h4>
            <textarea
              id="text-area-file"
              className="w-full h-[300px] sm:h-[740px] border rounded-lg border-gray-400 outline-none px-2 py-1 leading-5 bg-gray-300 overflow-auto text-xs sm:text-sm resize-none"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlphafoldStructure;
