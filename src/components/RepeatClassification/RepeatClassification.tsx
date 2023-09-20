import { Tab } from '@headlessui/react';
import { useRef } from 'react';
import { ProteinResult } from '../../models';
import ProcessingHeader from '../Structure/components/ProcessingHeader';
import { pfamHeader } from '../../data';
import { MiniDownloadIcon } from '../../icons';

interface Props {
  proteinResult: ProteinResult;
  isAdvanced?: boolean;
}

const defaultProps = {
  isAdvanced: false,
};

function RepeatClassification({
  proteinResult,
  isAdvanced,
}: Props & typeof defaultProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const { id, pfamScan, type, time } = proteinResult;

  const text = isAdvanced
    ? 'The following results were obtained through personalized parameters processing'
    : '';

  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(pfamScan.chains)
  )}`;

  return (
    <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
      <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full flex justify-between">
            <ProcessingHeader time={time} text={text} />
          </div>
          <a
            className="rounded-lg bg-third px-4 h-12 hover:shadow-lg font-bold tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
            ref={anchorRef}
            href={dataStr}
            download={`${id}_PfamScan.json`}
          >
            <div className="text-fourth">
              <MiniDownloadIcon />
            </div>
            <span>Download</span>
          </a>
        </div>
        <h2 className="text-2xl xs:text-4xl sm:text-[40px] font-bold text-center">
          {id} ({type === 'PDB' ? 'PDB ID' : 'UniProt ID'})
        </h2>
        <div className="space-y-2">
          <p className="text-[14px] sm:text-[20px] w-full">
            Using PfamScan, each chain has been searched against a library of
            Pfam HMM. In RepeatsDB, some protein families are associated with
            repeat classifications. Every subclassification found for each chain
            are considered for the ReUPred processing. If there are no
            associated classes but at least a &quot;Repeat&quot; protein family
            was found, every class is taken in consideration.
          </p>
          <p className="text-[14px] sm:text-[20px] w-full">
            If you consider that the requested structure could present regions
            from a different repeat class not listed below, it is encouraged to
            register a personalized advanced request.
          </p>
        </div>
        <div className="min-w-full px-2 sm:px-0">
          <h5 className="text-[15px] sm:text-[18px] font-semibold text-gray-900 mb-1">
            Chains:
          </h5>
          <Tab.Group>
            <Tab.List className="flex space-x-1 bg-blue-900/20 rounded-lg overflow-x-auto relative">
              {pfamScan.chains.map((chain) => {
                return (
                  <Tab
                    key={chain.chain}
                    className={({ selected }) =>
                      `flex items-center min-w-[60px] xs:w-full justify-center py-2.5 text-sm leading-5 text-blue-700 font-bold rounded-lg ${
                        selected
                          ? 'bg-white shadow'
                          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                      }`
                    }
                  >
                    {chain.chain}
                  </Tab>
                );
              })}
            </Tab.List>
            <Tab.Panels className="mt-2 shadow-md rounded-lg">
              {pfamScan.chains.map((chain) => {
                return (
                  <Tab.Panel key={chain.chain}>
                    <div className="p-4 flex flex-row items-start justify-between gap-2 bg-blue-900/20 rounded-t-lg">
                      <h5 className="text-[15px] sm:text-[18px] font-semibold text-gray-900">
                        Probable Classification:{' '}
                        {chain.classes.length > 0
                          ? chain.classes.join(', ')
                          : 'None'}
                      </h5>
                      <h5 className="text-[15px] sm:text-[18px] font-semibold text-gray-900">
                        Repeat Family Type: {chain.hasRepeat ? 'Yes' : 'No'}
                      </h5>
                    </div>
                    <div className="overflow-x-auto relative rounded-b-lg">
                      <table
                        key={chain.chain}
                        className="min-w-full divide-y divide-gray-200"
                      >
                        <thead className="bg-gray-50">
                          <tr className="table-row align-middle outline-0 font-bold">
                            {pfamHeader.map((header) => {
                              return (
                                <th
                                  key={header}
                                  className="group px-4 py-3 text-left text-xs sm:text-sm text-gray-500 tracking-wider cursor-pointer"
                                >
                                  {header}
                                </th>
                              );
                            })}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {chain.families.map((family, index) => {
                            return (
                              <tr key={family.id}>
                                <td className="text-xs sm:text-sm px-4 py-4 whitespace-pre-wrap">
                                  {index + 1}
                                </td>
                                <td className="text-xs sm:text-sm px-4 py-4 whitespace-pre-wrap">
                                  <a
                                    href={`https://www.ebi.ac.uk/interpro/entry/pfam/${family.id}`}
                                    className="underline"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {family.id}
                                  </a>
                                </td>
                                <td className="text-xs sm:text-sm px-4 py-4 whitespace-pre-wrap">
                                  {family.name}
                                </td>
                                <td className="text-xs sm:text-sm px-4 py-4 whitespace-pre-wrap">
                                  {family.classes.length > 0
                                    ? family.classes.join(', ')
                                    : 'None'}
                                </td>
                                <td className="text-xs sm:text-sm px-4 py-4 whitespace-pre-wrap">
                                  {family.clan}
                                </td>
                                <td className="text-xs sm:text-sm px-4 py-4 whitespace-pre-wrap">
                                  {family.type}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-[12px] sm:text-[16px] text-center lg:text-start">
            If ýou cant visualize the protein family entry on the InterPro
            website, try pressing Shift+F5
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 xs:gap-6">
            <span className="text-[15px] sm:text-[18px] font-bold">
              Powered by
            </span>
            <img
              src="/assets/img/repeatsdb-paper-shadow_logo.webp"
              className="w-20"
              alt="pfam"
            />
            <img
              src="/assets/img/pfam_logo.webp"
              className="w-36 sm:w-40"
              alt="pfam"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

RepeatClassification.defaultProps = defaultProps;

export default RepeatClassification;
