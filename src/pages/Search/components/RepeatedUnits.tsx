/* eslint-disable no-console */
import ReactSequenceViewer from 'react-sequence-viewer';
import { useEffect, useState } from 'react';
import { msaBuilder } from '../functions/index';
import { ChevronLeft, ChevronRight, MiniDownloadIcon } from '../../../icons';
import { useSearchContext } from '../context/search.context';
import { Region } from '../../../models';

function RepeatedUnits() {
  const { response } = useSearchContext();
  const { chains } = response.proteinResult;

  const [currentChain, setCurrentChain] = useState(chains[0]);

  const [currentChainIndex, setCurrentChainIndex] = useState(1);

  const [currentRegion, setCurrentRegion] = useState<Region>(
    currentChain.regions !== undefined
      ? currentChain.regions[0]
      : ({} as Region)
  );
  const [currentRegionIndex, setCurrentRegionIndex] = useState(0);

  const mySeq =
    'CAGTCGATCGTAGCTAGCTAGCTGATCGATGCCAGTCGATCGTAGCTAGCTAGCTGATCGATGCCAGTCGATCGTAGCTAGCTAGCTGATCGATGC';

  const mouseClick = (e: any) => {
    console.log('Mouse Region clicked');
    console.log(e.detail);
  };
  const subPart = (e: any) => {
    console.log('Subpart');
    console.log(e.detail);
  };

  useEffect(() => {
    // if (currentChain.isRepeat) {
    // }
    msaBuilder();
  }, [currentChain]);

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

  const azucar = `>seq1\nACTG\n>seq2\nACGG`;

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
              <div className="flex items-center gap-2 w-full justify-center">
                <button
                  type="button"
                  className="sm:flex hidden hover:rounded-lg hover:bg-third px-4 py-2 hover:shadow-lg font-bold"
                  onClick={handleChangeDown}
                >
                  <ChevronLeft />
                </button>
                <button
                  type="button"
                  className="sm:hidden rounded-lg border border-gray-100 bg-gray-200 hover:bg-third px-4 py-2 hover:shadow-lg tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
                  onClick={handleChangeDown}
                >
                  Bajar
                </button>
                <p className="w-40 sm:w-auto flex items-center justify-center">
                  {currentChainIndex} of {chains.length}
                </p>
                <button
                  type="button"
                  className="sm:hidden rounded-lg border border-gray-100 bg-gray-200 hover:bg-third px-4 py-2 hover:shadow-lg tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
                  onClick={handleChangeUp}
                >
                  Subir
                </button>
                <button
                  type="button"
                  className="hidden sm:flex hover:rounded-lg hover:bg-third px-4 py-2 hover:shadow-lg font-bold"
                  onClick={handleChangeDown}
                >
                  <ChevronRight />
                </button>
              </div>
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
            <div className="flex flex-col md:flex-row items-center overflow-x-auto gap-10">
              <div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-sm sm:text-base">Color Legend</p>
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-md" />
                    <div className="w-4 h-4 bg-blue-500 rounded-md" />
                    <span>Units</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-4 bg-yellow-500 rounded-md" />
                    <span>Insertions</span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <ReactSequenceViewer
                  id="protein"
                  sequence={mySeq}
                  title="1RSA"
                  charsPerLine="100"
                  className="border border-gray-500 rounded-lg p-4 bg-white"
                  search={false}
                  toolbar={false}
                  showLineNumbers
                  onSubpartSelected={subPart}
                  onMouseSelection={mouseClick}
                  coverage={[
                    {
                      start: 0,
                      end: 7,
                      color: '#E54155',
                      underscore: false,
                      tooltip: 'this is a tooltip',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          {currentChain.isRepeat && currentChain.regions && (
            <>
              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
                <h4 className="text-[18px] sm:text-[20px] font-bold">
                  Region number:{' '}
                  <span className="text-fourth text-[20px] sm:text-[25px]">
                    {currentRegion.repeatClass}.{currentRegion.repeatSubclass} -
                    {currentChainIndex}
                  </span>
                </h4>
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
                  <div className="flex flex-col xs:flex-row items-center justify-end gap-2 xs:gap-6">
                    <span className="text-[15px] sm:text-[18px] font-bold">
                      Powered by
                    </span>
                    <img
                      src="assets/img/repeats-db-lite_logo.webp"
                      className="w-60"
                      alt="trnet-lite"
                    />
                  </div>
                </div>
              </div>
              <div className="space-x-2">
                <button
                  type="button"
                  className="bg-red-500 p-4 rounded-lg text-white"
                  onClick={handleChangeDownRegion}
                >
                  Bajar
                </button>
                <span>
                  {currentChainIndex} of {currentChain.regions.length}
                </span>
                <button
                  type="button"
                  className="bg-red-500 p-4 rounded-lg text-white"
                  onClick={handleChangeUpRegion}
                >
                  Subir
                </button>
              </div>
            </>
          )}
        </div>
        <div className="overflow-x-auto">
          <div id="yourDiv" />
        </div>
        <div>
          <pre className="hidden" id="fasta-file">
            {azucar}
          </pre>
        </div>
      </div>
    </section>
  );
}

export default RepeatedUnits;
