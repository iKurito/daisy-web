import { useEffect, useRef, useState } from 'react';
import { Chain, ProteinResult, Region } from '../../../models';
import Pagination from './Pagination';
import AlignedUnits from './AlignedUnits';
import { downloadRegionOptions } from '../../../data';
import { getEnvEnvariables } from '../../../utilities';
import { Dropdown } from '../../Dropdown/Dropdown';
import MolStarViewer from '../../MolStarViewer/MolStarViewer';

interface Props {
  proteinResult: ProteinResult;
  currentChain: Chain;
  currentRegionIndex: number;
  setCurrentRegionIndex: (index: number) => void;
  selectedColors: any;
  isAdvanced: boolean;
  requestID: string;
}

function Regions({
  proteinResult,
  currentChain,
  currentRegionIndex,
  setCurrentRegionIndex,
  selectedColors,
  isAdvanced,
  requestID,
}: Props) {
  const { VITE_DAISY_SERVICE_FILE_URL } = getEnvEnvariables();
  const regionContainer = useRef(null);

  const [loading, setLoading] = useState(true);

  const { id, type } = proteinResult;

  const [currentRegion, setCurrentRegion] = useState<Region>(
    currentChain?.regions !== undefined
      ? currentChain.regions[0]
      : ({} as Region)
  );

  const baseUrl = isAdvanced
    ? `${VITE_DAISY_SERVICE_FILE_URL}/file/advanced/${requestID}/${id}/${type}/${currentChain?.name}/${currentRegion.repeatClass}/${currentRegion.repeatSubclass}/${currentRegion.classRegionNumber}`
    : `${VITE_DAISY_SERVICE_FILE_URL}/file/${id}/${type}/${currentChain?.name}/${currentRegion.repeatClass}/${currentRegion.repeatSubclass}/${currentRegion.classRegionNumber}`;

  const options = downloadRegionOptions.map((option) => {
    return {
      ...option,
      href: option.href.replace('BASE_URL', baseUrl),
    };
  });

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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [baseUrl]);

  return (
    <div>
      {currentChain?.isRepeat && currentChain?.regions && (
        <div>
          <div className="space-y-2">
            <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between gap-2">
              <h2 className="text-[18px] xs:text-[20px] sm:text-[25px] font-bold w-full">
                Region number:{' '}
                <span className="text-fourth text-[20px] sm:text-[25px]">
                  {currentRegion.repeatClass}.{currentRegion.repeatSubclass} -
                  {currentRegion.classRegionNumber}
                </span>
              </h2>
              <Pagination
                size={currentChain?.regions.length}
                currentIndex={currentRegionIndex}
                handleChangeDown={handleChangeDownRegion}
                handleChangeUp={handleChangeUpRegion}
              />
              <div className="flex w-full justify-end">
                <Dropdown items={options} />
              </div>
            </div>
            {currentRegion.confidence !== -1 && (
              <div className="flex justify-end">
                <h5 className="text-[15px] sm:text-[18px] font-semibold text-center w-full sm:w-auto">
                  Average RMSD: {currentRegion.confidence.toFixed(2)} Å
                </h5>
              </div>
            )}
          </div>
          {loading ? (
            <div className="flex items-center justify-center w-full py-10">
              <div className="custom-loader" />
            </div>
          ) : (
            <>
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
              <MolStarViewer
                id="regionViewer"
                selectedColors={selectedColors}
                baseUrl={baseUrl}
                refContainer={regionContainer}
              />
              <AlignedUnits baseUrl={baseUrl} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Regions;
