import { useEffect, useRef } from 'react';
import { useSearchContext } from '../context/search.context';
import { alphaBuilder } from '../functions';

function AlphafoldStructure() {
  const { response } = useSearchContext();
  const { id } = response.proteinResult;

  const alphaFoldContainer = useRef(null);

  useEffect(() => {
    alphaBuilder(id, alphaFoldContainer);
  }, [id]);

  return (
    <div className="p-2 sm:px-6 sm:py-4 mb-40 sm:mb-20 space-y-4">
      <div className="flex flex-col">
        <div className="w-full flex justify-end">
          <h4 className="text-[18px] sm:text-[20px] font-bold">
            Processing Status:{' '}
            <span className="text-third text-[20px] sm:text-[25px]">
              Completed
            </span>
          </h4>
        </div>
        <h5 className="text-[15px] sm:text-[18px] font-semibold">3D Viewer</h5>
        <div className="w-auto h-[300px] sm:h-[400px] relative z-[200] mt-[100px]">
          <div className="mt-[100px]" ref={alphaFoldContainer} />
        </div>
      </div>
    </div>
  );
}

export default AlphafoldStructure;
