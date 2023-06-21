import { ProteinResult } from '../../models';
import AlphafoldStructure from './components/AlphafoldStructure';
import ProteinStructure from './components/ProteinStructure';
import ResultsNotFound from '../ResultsNotFound/ResultsNotFound';

interface Props {
  proteinResult: ProteinResult;
  isAdvanced?: boolean;
}

const defaultProps = {
  isAdvanced: false,
};

function Structure({ proteinResult, isAdvanced }: Props & typeof defaultProps) {
  const { type } = proteinResult;

  const text = isAdvanced
    ? 'This is a simulated processing with user personalized parameters'
    : '';

  return (
    <>
      <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
        {type === 'PDB' && (
          <ProteinStructure proteinResult={proteinResult} text={text} />
        )}
        {type === 'AlphaFold' && (
          <AlphafoldStructure proteinResult={proteinResult} text={text} />
        )}
      </section>
      {type === 'ERROR' && (
        <ResultsNotFound
          message=" We could not process the requested protein. Please check if you
          entered a valid PDB or AlphaFold ID. Also, if the strcture is too
          large, it is posible it is not aviable to download in the requeired
          formats."
        />
      )}
    </>
  );
}

Structure.defaultProps = defaultProps;

export default Structure;
