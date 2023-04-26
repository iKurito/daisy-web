import { predictionsHeader } from '../../../data';
import { useSearchContext } from '../context/search.context';

function RepeatClassification() {
  const { response } = useSearchContext();

  const { chains } = response.proteinResult;

  return (
    <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
      <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full flex justify-between">
            <h4 className="text-[18px] sm:text-[20px] font-bold">
              Processing Status:{' '}
              <span className="text-fourth text-[20px] sm:text-[25px]">
                Completed
              </span>
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <p className="text-[18px] sm:text-[20px] leading-5 text-center">
            Tandem repeat classes with a prediction probability higher than 50%
            are considered for ReUPred processing.
          </p>
        </div>
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
            <img
              src="assets/img/trnet-lite_logo.webp"
              className="w-60"
              alt="trnet-lite"
            />
          </div>
        </div>
        <div className="shadow-md overflow-x-auto relative border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 dark:bg-dark-third">
              <tr className="table-row align-middle outline-0 font-bold">
                <th className="group px-4 py-3 text-left text-xs sm:stext-sm text-gray-500 tracking-wider cursor-pointer">
                  Chain ID
                </th>
                {predictionsHeader.map((prediction) => {
                  return (
                    <th
                      key={prediction}
                      className="group px-4 py-3 text-left text-xs sm:stext-sm text-gray-500 tracking-wider cursor-pointer"
                    >
                      {prediction.replace('_', '.')}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-dark-primary dark:divide-gray-500">
              {chains.map((chain) => {
                return (
                  <tr key={chain.name} className="font-bold">
                    <td className="text-xs sm:stext-sm px-4 py-4 whitespace-pre-wrap">
                      {chain.name}
                    </td>
                    {predictionsHeader.map((prediction) => {
                      const ch =
                        parseFloat(
                          chain.classPrediction[prediction].toFixed(2)
                        ) >= 0.5
                          ? 'text-green-500'
                          : 'text-red-500';
                      return (
                        <td
                          key={prediction}
                          className={`${ch} text-xs sm:stext-sm px-4 py-4 whitespace-pre-wrap`}
                        >
                          {chain.classPrediction[prediction].toFixed(2)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default RepeatClassification;
