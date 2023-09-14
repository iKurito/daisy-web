import { ProteinResult } from '../../models';
import ProcessingHeader from '../Structure/components/ProcessingHeader';

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
  const { id, type, time } = proteinResult;

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
      </div>
    </section>
  );
}

RepeatClassification.defaultProps = defaultProps;

export default RepeatClassification;
