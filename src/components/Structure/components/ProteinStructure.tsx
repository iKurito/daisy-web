import { useEffect } from 'react';
import { downloadPdbStructureOptions } from '../../../data';
import { ProteinResult } from '../../../models';
import { readFile } from '../../../utilities';
import { Dropdown } from '../../Dropdown/Dropdown';
import ProcessingHeader from './ProcessingHeader';

interface Props {
  proteinResult: ProteinResult;
  text: string;
}

function ProteinStructure({ proteinResult, text }: Props) {
  const { id, type, isRepeat, time } = proteinResult;

  const options = downloadPdbStructureOptions.map((option) => {
    return {
      ...option,
      href: `${option.href}${id}.pdb`,
    };
  });

  const url = `https://files.rcsb.org/download/${id.toLowerCase()}.pdb`;

  useEffect(() => {
    readFile(url);
  }, [url]);

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
              <span className="text-red-600">Not Identified*</span>
            )}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="space-y-2 flex-1">
            <h5 className="text-[15px] sm:text-[18px] font-semibold">
              3D Viewer - {id} (PDB ID)
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
            <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-6 pt-2">
              <span className="text-[15px] sm:text-[18px] font-bold">
                Powered by
              </span>
              <img
                src="/assets/img/rcsb-pdb_logo.webp"
                className="w-60"
                alt="trnet-lite"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <h4 className="text-[18px] sm:text-[20px] font-semibold">
              Requested protein structure:
            </h4>
            <textarea
              id="text-area-file"
              className="w-full h-[300px] sm:h-[580px] border rounded-lg border-gray-400 outline-none px-2 py-1 leading-5 bg-gray-300 overflow-auto text-xs sm:text-sm resize-none"
              disabled
            />
          </div>
        </div>
        {!isRepeat && (
          <div className="flex flex-start">
            <p className="text-[12px] sm:text-[16px]">
              *If no region was identified during the process, it does not
              necessarily imply that the evaluated structure is not considered
              to present tandem repeat regions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProteinStructure;
