import { Chain } from '../../../models';
import { getEnvEnvariables } from '../../../utilities';
import { useSearchContext } from '../context/search.context';

interface Props {
  currentChain: Chain;
}

function Chains({ currentChain }: Props) {
  const { response } = useSearchContext();
  const { id, type } = response.proteinResult;
  const { VITE_DAISY_SERVICE_URL } = getEnvEnvariables();

  const { name, regions } = currentChain;

  const { repeatClass, repeatSubclass } = regions![0];

  return (
    <div
      id="chainViewer"
      className="w-auto h-[300px] sm:h-[400px] relative z-[99]"
    >
      <pdbe-molstar
        id="pdbeMolstarComponent"
        custom-data-url={`${VITE_DAISY_SERVICE_URL}/file/${id}/${type}/${name}/${repeatClass}/${repeatSubclass}/pdb`}
        custom-data-format="pdb"
        hide-controls="false"
      />
    </div>
  );
}

export default Chains;
