/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useSearchContext } from '../context/search.context';
import Pagination from './Pagination';
import Chains from './Chains';
import Regions from './Regions';
import { downloadChainOptions } from '../../../data';
import { Dropdown } from '../../../components';
import { getEnvEnvariables } from '../../../utilities';

function RepeatedUnits() {
  const { VITE_DAISY_SERVICE_URL } = getEnvEnvariables();
  const { response } = useSearchContext();
  const { chains } = response.proteinResult;

  const chainsWithRegions = chains.filter((chain) => chain.isRepeat);

  const [currentChain, setCurrentChain] = useState(chainsWithRegions[0]);

  const [currentChainIndex, setCurrentChainIndex] = useState(1);

  const handleChangeUp = () => {
    if (currentChainIndex < chainsWithRegions.length) {
      setCurrentChain(chainsWithRegions[currentChainIndex]);
      setCurrentChainIndex(currentChainIndex + 1);
    }
  };

  const handleChangeDown = () => {
    if (currentChainIndex > 1) {
      setCurrentChain(chainsWithRegions[currentChainIndex - 2]);
      setCurrentChainIndex(currentChainIndex - 1);
    }
  };

  const baseUrl = `${VITE_DAISY_SERVICE_URL}/file/${
    response.proteinResult.id
  }/${response.proteinResult.type}/${currentChain?.name}/${
    currentChain?.regions![0].repeatClass
  }/${currentChain?.regions![0].repeatSubclass}`;

  const options = downloadChainOptions.map((option) => {
    return {
      ...option,
      href: option.href.replace('BASE_URL', baseUrl),
    };
  });

  const [loading, setLoading] = useState(false);

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
          <h4 className="text-[18px] sm:text-[20px] font-bold">
            Processing Status:{' '}
            <span className="text-fourth text-[20px] sm:text-[25px]">
              Completed
            </span>
          </h4>
        </div>
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
              <Chains baseUrl={baseUrl} />
              <hr />
              <Regions currentChain={currentChain} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default RepeatedUnits;
