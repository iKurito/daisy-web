/* eslint-disable no-console */
import { useState } from 'react';
import { MiniDownloadIcon } from '../../../icons';
import { useSearchContext } from '../context/search.context';
import Pagination from './Pagination';
import Chains from './Chains';
import Regions from './Regions';

function RepeatedUnits() {
  const { response } = useSearchContext();
  const { chains } = response.proteinResult;

  const [currentChain, setCurrentChain] = useState(chains[0]);

  const [currentChainIndex, setCurrentChainIndex] = useState(1);

  const handleChangeUp = () => {
    if (currentChainIndex < chains.length) {
      setCurrentChain(chains[currentChainIndex]);
      setCurrentChainIndex(currentChainIndex + 1);
    }
  };

  const handleChangeDown = () => {
    if (currentChainIndex > 1) {
      setCurrentChain(chains[currentChainIndex - 2]);
      setCurrentChainIndex(currentChainIndex - 1);
    }
  };

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
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
              <h4 className="text-[18px] sm:text-[20px] font-bold w-full">
                Chain ID:{' '}
                <span className="text-fourth text-[20px] sm:text-[25px]">
                  {currentChain.name}
                </span>
              </h4>
              <Pagination
                size={chains.length}
                currentIndex={currentChainIndex}
                handleChangeDown={handleChangeDown}
                handleChangeUp={handleChangeUp}
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
            <Chains />
          </div>
          <Regions currentChain={currentChain} />
        </div>
      </div>
    </section>
  );
}

export default RepeatedUnits;
