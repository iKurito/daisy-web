/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { downloadAlphaFoldStructureOptions } from '../../../data';
import { ProteinResult } from '../../../models';
import { alphaBuilder } from '../../../utilities';
import { Dropdown } from '../../Dropdown/Dropdown';
import ProcessingHeader from './ProcessingHeader';

interface Props {
  proteinResult: ProteinResult;
  text: string;
}

function AlphafoldStructure({ proteinResult, text }: Props) {
  const { id, type, isRepeat, time } = proteinResult;

  const alphaFoldContainer = useRef(null);

  const options = downloadAlphaFoldStructureOptions.map((option) => {
    return {
      ...option,
      href: option.href.replace('UNIPROT', id),
    };
  });

  useEffect(() => {
    alphaBuilder(id, alphaFoldContainer);
  }, []);

  return (
    <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
      <div className="flex flex-col gap-2">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <ProcessingHeader time={time} text={text} />
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
        <div className="flex flex-col-reverse xl:flex-row gap-5">
          <div className="space-y-2 flex-1">
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
                src="/assets/img/EMBL-EBI_logo.webp"
                className="w-60"
                alt="embl-ebi"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <h5 className="text-[20px] sm:text-[25px] font-semibold">
              Model Confidence Interpretation
            </h5>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[rgb(0,83,215)]" />
                  <span className="text-xs sm:text-lg">
                    Very high (pLDDT {'>'} 90)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[rgb(101,203,243)]" />
                  <span className="text-xs sm:text-lg">
                    Confident (90 {'>'} pLDDT {'>'} 70)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[rgb(255,210,19)]" />
                  <span className="text-xs sm:text-lg">
                    Low (70 {'>'} pLDDT {'>'} 50)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-[rgb(255,125,69)]" />
                  <span className="text-xs sm:text-lg">
                    Very low (pLDDT {'<'} 50)
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[16px] sm:text-[20px] leading-7 font-bold">
              AlphaFold produces a per-residue confidence score (pLDDT) between
              0 and 100. Some regions with low pLDDT may be unstructured in
              isolation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlphafoldStructure;
