import { ProteinResult } from '../../models';
import AlphafoldStructure from './components/AlphafoldStructure';
import ProteinStructure from './components/ProteinStructure';
import ResultsNotFound from '../ResultsNotFound/ResultsNotFound';

interface Props {
  proteinResult: ProteinResult;
}

function Structure({ proteinResult }: Props) {
  const { type } = proteinResult;

  return (
    <>
      <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
        {type === 'PDB' && <ProteinStructure proteinResult={proteinResult} />}
        {type === 'AlphaFold' && (
          <AlphafoldStructure proteinResult={proteinResult} />
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

export default Structure;
