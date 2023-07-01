/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import Chains from './components/Chains';
import Regions from './components/Regions';
import { ProteinResult } from '../../models';
import {
  getEnvEnvariables,
  getSelectedUnitsColorFromRegion,
} from '../../utilities';
import { Dropdown } from '../Dropdown/Dropdown';
import { downloadChainOptions } from '../../data';
import ProcessingHeader from '../Structure/components/ProcessingHeader';

interface Props {
  proteinResult: ProteinResult;
  isAdvanced?: boolean;
  requestID?: string;
}

const defaultProps = {
  isAdvanced: false,
  requestID: '',
};

function RepeatedUnits({
  proteinResult,
  isAdvanced,
  requestID,
}: Props & typeof defaultProps) {
  const { VITE_DAISY_SERVICE_FILE_URL } = getEnvEnvariables();
  const { chains, id, type, time } = proteinResult;

  const chainsWithRegions = chains.filter((chain) => chain.isRepeat);

  const [currentChain, setCurrentChain] = useState(chainsWithRegions[0]);

  const [currentChainIndex, setCurrentChainIndex] = useState(1);

  const [currentRegionIndex, setCurrentRegionIndex] = useState<number>(1);

  const selectedColors = getSelectedUnitsColorFromRegion(
    currentChain,
    currentRegionIndex - 1
  );

  const handleChangeUp = () => {
    if (currentChainIndex < chainsWithRegions.length) {
      setCurrentRegionIndex(1);
      setCurrentChain(chainsWithRegions[currentChainIndex]);
      setCurrentChainIndex(currentChainIndex + 1);
    }
  };

  const handleChangeDown = () => {
    if (currentChainIndex > 1) {
      setCurrentRegionIndex(1);
      setCurrentChain(chainsWithRegions[currentChainIndex - 2]);
      setCurrentChainIndex(currentChainIndex - 1);
    }
  };

  const baseUrl = isAdvanced
    ? `${VITE_DAISY_SERVICE_FILE_URL}/file/advanced/${requestID}/${
        proteinResult.id
      }/${proteinResult.type}/${currentChain?.name}/${
        currentChain?.regions![0].repeatClass
      }/${currentChain?.regions![0].repeatSubclass}`
    : `${VITE_DAISY_SERVICE_FILE_URL}/file/${proteinResult.id}/${
        proteinResult.type
      }/${currentChain?.name}/${currentChain?.regions![0].repeatClass}/${
        currentChain?.regions![0].repeatSubclass
      }`;

  const options = downloadChainOptions.map((option) => {
    return {
      ...option,
      href: option.href.replace('BASE_URL', baseUrl),
    };
  });

  const [loading, setLoading] = useState(false);

  const text = isAdvanced
    ? 'This is a simulated processing with user personalized parameters'
    : '';

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [currentChainIndex]);

  return (
    <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
      <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <ProcessingHeader time={time} text={text} />
        </div>
        <h2 className="text-2xl xs:text-4xl sm:text-[40px] font-bold text-center">
          {id} ({type === 'PDB' ? 'PDB ID' : 'UniProt ID'})
        </h2>
        <div className="flex items-center justify-start">
          <p className="text-[18px] sm:text-[20px] leading-5 text-left">
            The following tandem repeat protein chains have been identified by
            RepeatsDBLite 2.0. For each chain, you can visualise and download
            the output files for each region.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
              <h2 className="text-[18px] xs:text-[20px] sm:text-[25px] font-bold w-full">
                Chain ID:{' '}
                <span className="text-fourth text-[20px] sm:text-[25px]">
                  {currentChain?.name}
                </span>
              </h2>
              <Pagination
                size={chainsWithRegions.length}
                currentIndex={currentChainIndex}
                handleChangeDown={handleChangeDown}
                handleChangeUp={handleChangeUp}
              />
              <div className="flex justify-end w-full">
                <Dropdown items={options} />
              </div>
            </div>
          </div>
          {loading ? (
            <div className="flex items-center justify-center w-full py-10">
              <div className="custom-loader" />
            </div>
          ) : (
            <>
              <Chains selectedColors={selectedColors} baseUrl={baseUrl} />
              <hr />
              <Regions
                proteinResult={proteinResult}
                currentChain={currentChain}
                currentRegionIndex={currentRegionIndex}
                setCurrentRegionIndex={setCurrentRegionIndex}
                selectedColors={selectedColors}
                isAdvanced={isAdvanced}
                requestID={requestID}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

RepeatedUnits.defaultProps = defaultProps;

export default RepeatedUnits;
