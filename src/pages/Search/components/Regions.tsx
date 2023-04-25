import { useState } from 'react';
import { MiniDownloadIcon } from '../../../icons';
import { Chain, Region } from '../../../models';
import Pagination from './Pagination';
import AlignedUnits from './AlignedUnits';

interface Props {
  currentChain: Chain;
}

function Regions({ currentChain }: Props) {
  const [currentRegion, setCurrentRegion] = useState<Region>(
    currentChain.regions !== undefined
      ? currentChain.regions[0]
      : ({} as Region)
  );
  const [currentRegionIndex, setCurrentRegionIndex] = useState(1);

  const handleChangeUpRegion = () => {
    if (currentChain.regions !== undefined) {
      if (currentRegionIndex < currentChain.regions.length) {
        setCurrentRegion(currentChain.regions[currentRegionIndex]);
        setCurrentRegionIndex(currentRegionIndex + 1);
      }
    }
  };

  const handleChangeDownRegion = () => {
    if (currentChain.regions !== undefined) {
      if (currentRegionIndex > 1) {
        setCurrentRegion(currentChain.regions[currentRegionIndex - 2]);
        setCurrentRegionIndex(currentRegionIndex - 1);
      }
    }
  };

  return (
    <div>
      {currentChain.isRepeat && currentChain.regions && (
        <div>
          <div className="space-y-2">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
              <h4 className="text-[18px] sm:text-[20px] font-bold w-full">
                Region number:{' '}
                <span className="text-fourth text-[20px] sm:text-[25px]">
                  {currentRegion.repeatClass}.{currentRegion.repeatSubclass} -
                  {currentRegion.classRegionNumber}
                </span>
              </h4>
              <Pagination
                size={currentChain.regions.length}
                currentIndex={currentRegionIndex}
                handleChangeDown={handleChangeDownRegion}
                handleChangeUp={handleChangeUpRegion}
              />
              <div className="flex justify-end w-full">
                <button
                  type="button"
                  className="rounded-lg bg-third px-4 py-2 hover:shadow-lg font-bold tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
                  onClick={() => {}}
                >
                  <div className="text-fourth">
                    <MiniDownloadIcon />
                  </div>
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between">
            <div className="flex flex-col xs:flex-row w-auto xs:w-[400px] items-center justify-center">
              <img
                src={`http://old.protein.bio.unipd.it/repeatsdb-lite/img/class/${currentRegion.repeatClass}.${currentRegion.repeatSubclass}.big.png`}
                alt="protein"
                className="w-48"
              />
              <div className="flex items-center justify-center text-gray-900 font-bold gap-2">
                <span className="text-[20px] sm:text-[25px]">
                  Classification:
                </span>
                <span className="text-[60px] text-fourth">
                  {currentRegion.repeatClass}.{currentRegion.repeatSubclass}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center sm:text-right gap-2">
              <span className="text-[18px] sm:text-[20px] text-third inline-flex items-center justify-center font-bold gap-2 underline">
                Structural similarity matrix:
                <MiniDownloadIcon />
              </span>
              <span className="text-[15px] sm:text-[18px] text-fourth inline-flex items-center justify-center font-bold gap-2 underline">
                Structural similarity summary
                <MiniDownloadIcon />
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="space-y-2">
              <div className="flex flex-col justify-start items-start">
                <p className="text-[15px] sm:text-[18px] text-fourth inline-flex items-center justify-center font-bold gap-2 underline">
                  <MiniDownloadIcon />
                  Units PDBs files
                </p>
                <p className="text-[15px] sm:text-[18px] text-fourth inline-flex items-center justify-center font-bold gap-2 underline">
                  <MiniDownloadIcon />
                  Aligned units PDB file
                </p>
              </div>
              <div
                id="myViewer"
                className="w-auto h-[300px] sm:h-[400px] relative z-[100]"
              >
                <pdbe-molstar
                  id="pdbeMolstarComponent"
                  molecule-id="2nnu"
                  hide-controls="false"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-[15px] sm:text-[18px] text-fourth inline-flex items-center justify-center font-bold gap-2 underline">
                  <MiniDownloadIcon />
                  Aligned units Fasta file
                </span>
                <div className="overflow-x-auto">
                  <div id="psv1" />
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[15px] sm:text-[18px] text-fourth inline-flex items-center justify-center font-bold gap-2 underline">
                  <MiniDownloadIcon />
                  Aligned units DSSP file
                </span>
                <div className="overflow-x-auto">
                  <div id="psv2" />
                </div>
              </div>
            </div>
          </div>
          <AlignedUnits />
        </div>
      )}
    </div>
  );
}

export default Regions;
