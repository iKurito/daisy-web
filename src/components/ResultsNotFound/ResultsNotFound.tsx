interface Props {
  message: string;
}

function ResultsNotFound({ message }: Props) {
  return (
    <section className="shadow-lg bg-primary border-none rounded-lg">
      <div className="p-2 sm:px-6 sm:py-4 space-y-1">
        <h2 className="text-[18px] xs:text-[20px] sm:text-[25px] font-bold">
          Results not found
        </h2>
        <p className="text-[15px] sm:text-[18px]">{message}</p>
      </div>
    </section>
  );
}

export default ResultsNotFound;
