function ProteinStructure() {
  return (
    <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
      <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 flex flex-col lg:flex-row gap-6">
        <div className="">
          <h5 className="text-[15px] sm:text-[18px] font-semibold">
            3D structure viewer
          </h5>
          <div className="h-auto">
            <div
              id="myViewer"
              className="w-auto lg:w-[400px] h-[300px] sm:h-[400px] relative"
            >
              <pdbe-molstar
                id="pdbeMolstarComponent"
                molecule-id="2nnu"
                hide-controls="false"
              />
            </div>
          </div>
        </div>
        <div className="w-full space-y-2">
          <div className="flex justify-end">
            <h4 className="text-[18px] sm:text-[20px] font-bold">
              Processing Status:{' '}
              <span className="text-third text-[20px] sm:text-[25px]">
                Completed
              </span>
            </h4>
          </div>
          <div className="space-y-2">
            <p>
              The following protein structures was obtained using the
              DeepReSPred web service with the requested protein sequence as
              input
            </p>
            <h4 className="text-[18px] sm:text-[20px] font-semibold">
              Requested protein sequence:
            </h4>
            <textarea
              className="w-full border rounded-lg h-40 border-gray-400 outline-none px-3 py-2 resize-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth leading-5 bg-gray-300 text-[12px] sm:text-[15px]"
              value=">tr|E5AT83|E5AT83_MYCRK Transposase OS=Mycetohabitans rhizoxinica (strain DSM 19002 / CIP 109453 / HKI 454) OX=882378 GN=RBRH_01347 PE=4 SV=1 MAGNSGGAQALKAVLEHGPTLRQRDLSLIDIVEIASNGRRPGVESIAMYACGMSMREIQG FLLERYGIEVSPNFISTVTDEVRAW"
              disabled
            />
            <h4 className="text-[18px] sm:text-[20px] font-semibold">
              Structure prediction results:
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProteinStructure;
