/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from 'react';
import { proteinBuilder } from '../../utilities';

interface Props {
  selectedColors: any;
  baseUrl: string;
  id: string;
  refContainer: RefObject<HTMLDivElement>;
}

function MolStarViewer({ selectedColors, baseUrl, id, refContainer }: Props) {
  useEffect(() => {
    const viewerInstance = proteinBuilder(baseUrl, refContainer);
    setTimeout(() => {
      viewerInstance!.visual.select({
        data: selectedColors,
        nonSelectedColor: { r: 128, g: 128, b: 128 },
      });
    }, 1000);
  }, []);

  return (
    <div id={id} className="w-auto h-[300px] sm:h-[400px] relative z-[99]">
      <div ref={refContainer} />
    </div>
  );
}

export default MolStarViewer;
