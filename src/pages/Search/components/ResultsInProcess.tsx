function ResultsInProcess() {
  return (
    <section className="shadow-lg bg-primary border-none rounded-lg">
      <div className="p-2 sm:px-6 sm:py-4 space-y-1">
        <h2 className="text-[18px] xs:text-[20px] sm:text-[25px] font-bold">
          The results are still processing
        </h2>
        <p className="text-[15px] sm:text-[18px]">
          Your request is not ready yet, please save the current url to retrieve
          your results at any time.
        </p>
        <div className="flex items-center justify-center">
          <img
            src="assets/img/in-process_loader.gif"
            className="h-auto w-[300px] sm:w-[600px]"
            alt="trnet-lite"
          />
        </div>
      </div>
    </section>
  );
}

export default ResultsInProcess;
