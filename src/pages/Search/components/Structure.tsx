import { useSearchContext } from '../context/search.context';
import AlphafoldStructure from './AlphafoldStructure';
import ProteinStructure from './ProteinStructure';
import ResultsNotFound from './ResultsNotFound';

function Structure() {
  const { response } = useSearchContext();

  const { type } = response.proteinResult;

  return (
    <>
      <section className="shadow-lg bg-primary border-none rounded-b-lg sm:rounded-tr-lg">
        {type === 'PDB' && <ProteinStructure />}
        {type === 'AlphaFold' && <AlphafoldStructure />}
      </section>
      {type === 'ERROR' && <ResultsNotFound />}
    </>
  );
}

export default Structure;
