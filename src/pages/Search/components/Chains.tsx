import { useSearchContext } from '../context/search.context';

function Chains() {
  const { response } = useSearchContext();
  const { id } = response.proteinResult;

  return (
    <div
      id="chainViewer"
      className="w-auto h-[300px] sm:h-[400px] relative z-[99]"
    >
      <pdbe-molstar
        id="pdbeMolstarComponent"
        molecule-id={id.toLowerCase()}
        hide-controls="false"
      />
    </div>
  );
}

export default Chains;
