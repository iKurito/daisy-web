import { useState } from 'react';
import { Chain, Region } from '../../../models';
import Pagination from './Pagination';
import AlignedUnits from './AlignedUnits';
import { Dropdown } from '../../../components';
import { downloadChainOptions, downloadRegionOptions } from '../../../data';

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
                <Dropdown items={downloadRegionOptions} />
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
          </div>
          <div
            id="regionViewer"
            className="w-auto h-[300px] sm:h-[400px] relative z-[99]"
          >
            <pdbe-molstar
              id="pdbeMolstarComponent"
              custom-data-url="https://www.ebi.ac.uk/pdbe/model-server/v1/1cbs/full"
              custom-data-format="cif"
              // molecule-id="https://files.rcsb.org/download/4nnu.pdb"
              hide-controls="false"
            />
          </div>
          <AlignedUnits />
        </div>
      )}
    </div>
  );
}

export default Regions;
