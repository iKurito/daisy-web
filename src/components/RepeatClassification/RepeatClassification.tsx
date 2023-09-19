import { Tab } from '@headlessui/react';
import { ProteinResult } from '../../models';
import ProcessingHeader from '../Structure/components/ProcessingHeader';
import { pfamHeader } from '../../data';

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
  const { id, pfamScan, type, time } = proteinResult;

  const text = isAdvanced
    ? 'This is a simulated processing with user personalized parameters'
    : '';

  return (
    <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
      <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full flex justify-between">
            <ProcessingHeader time={time} text={text} />
          </div>
        </div>
        <h2 className="text-2xl xs:text-4xl sm:text-[40px] font-bold text-center">
          {id} ({type === 'PDB' ? 'PDB ID' : 'UniProt ID'})
        </h2>
        {!isAdvanced && (
          <div className="flex items-center justify-start">
            <p className="text-[18px] sm:text-[20px] leading-5 text-center">
              Tandem repeat classes with a prediction probability higher than
              50% are considered for ReUPred processing.
            </p>
          </div>
        )}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-6">
            <span className="text-[15px] sm:text-[18px]">
              Full class prediction results:
            </span>
          </div>
          <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-6">
            <span className="text-[15px] sm:text-[18px] font-bold">
              Powered by
            </span>
            <img src="/assets/img/pfam_logo.webp" className="w-40" alt="pfam" />
          </div>
        </div>
        <div className="w-full px-2 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-lg">
              {pfamScan.chains.map((chain) => {
                return (
                  <Tab
                    key={chain.chain}
                    className={({ selected }) =>
                      `w-full py-2.5 text-sm leading-5 text-blue-700 font-bold rounded-lg ${
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
            <Tab.Panels className="mt-2 shadow-md overflow-x-auto relative border border-gray-200 rounded-lg">
              {pfamScan.chains.map((chain) => {
                return (
                  <Tab.Panel key={chain.chain}>
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
                                className="group px-4 py-3 text-left text-xs sm:stext-sm text-gray-500 tracking-wider cursor-pointer"
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
                            <tr key={family.id} className="font-bold">
                              <td className="text-xs sm:stext-sm px-4 py-4 whitespace-pre-wrap">
                                {index + 1}
                              </td>
                              <td className="text-xs sm:stext-sm px-4 py-4 whitespace-pre-wrap">
                                {family.id}
                              </td>
                              <td className="text-xs sm:stext-sm px-4 py-4 whitespace-pre-wrap">
                                {family.name}
                              </td>
                              <td className="text-xs sm:stext-sm px-4 py-4 whitespace-pre-wrap">
                                {family.clan}
                              </td>
                              <td className="text-xs sm:stext-sm px-4 py-4 whitespace-pre-wrap">
                                {family.type}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}

RepeatClassification.defaultProps = defaultProps;

export default RepeatClassification;
