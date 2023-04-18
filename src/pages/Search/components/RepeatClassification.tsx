import { MiniDownloadIcon } from '../../../icons';

function RepeatClassification() {
  return (
    <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
      <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full">
            <h2 className="text-[20px] sm:text-[25px] font-bold">
              Chain ID: <span className="text-fourth">A</span>
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
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex flex-col xs:flex-row w-auto xs:w-[400px] items-center justify-center">
            <img
              src="/assets/img/protein_test.webp"
              className="w-auto xs:w-40"
              alt="protein"
            />
            <div className="flex flex-col items-center justify-center text-fourth font-bold">
              <span className="text-[60px] h-20">III.3</span>
              <span className="text-[15px] sm:text-[18px]">
                &alpha;-solenoid
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-[18px] sm:text-[20px] leading-5 text-center">
              The following class and subclass are the most probable
              classification of the processed protein structure
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-6">
            <span className="text-[15px] sm:text-[18px]">
              Full class prediction results:
            </span>
            <span className="text-[15px] sm:text-[18px] text-fourth inline-flex items-center justify-center">
              <MiniDownloadIcon />
              Download classifacion results
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
      </div>
    </section>
  );
}

export default RepeatClassification;
