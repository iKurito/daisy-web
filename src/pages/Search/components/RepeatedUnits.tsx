/* eslint-disable no-console */
import ReactSequenceViewer from 'react-sequence-viewer';
import { useEffect } from 'react';
import { test, alphaFunction } from '../functions/index';
import { MiniDownloadIcon } from '../../../icons';

function RepeatedUnits() {
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
    test();
    alphaFunction();
  }, []);

  return (
    <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
      <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
        <div className="flex flex-col gap-5">
          <div className="space-y-2">
            <h2 className="text-[20px] sm:text-[25px] font-bold">
              Chain ID: <span className="text-fourth">A</span>
            </h2>
            <div className="flex items-center xs:justify-center overflow-x-auto">
              <ReactSequenceViewer
                id="protein"
                sequence={mySeq}
                title="1RSA"
                charsPerLine="50"
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
                legend={[
                  {
                    name: 'Units',
                    color: '#E54155',
                    underscore: false,
                  },
                  {
                    name: 'Units',
                    color: '#4B95CB',
                    underscore: false,
                  },
                  {
                    name: 'Insertions',
                    color: '#E8E02D',
                    underscore: false,
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full">
              <h2 className="text-[20px] sm:text-[25px] font-bold">
                Region number: <span className="text-fourth">1</span>
              </h2>
            </div>
            <div className="w-full flex justify-end">
              <h4 className="text-[18px] sm:text-[20px] font-bold">
                Processing Status:{' '}
                <span className="text-third text-[20px] sm:text-[25px]">
                  Completed
                </span>
              </h4>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-between">
            <div className="flex flex-col xs:flex-row w-auto xs:w-[400px] items-center justify-center">
              <img src="/assets/img/protein_test.webp" alt="protein" />
              <div className="flex items-center justify-center text-gray-900 font-bold gap-2">
                <span className="text-[20px] sm:text-[25px]">
                  Classification:
                </span>
                <span className="text-[60px] text-fourth">III.3</span>
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
          <div className="w-auto h-[300px] sm:h-[400px] relative z-[80] mt-[100px]">
            <div id="myViewer2" className="mt-[250px] bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RepeatedUnits;
