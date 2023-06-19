/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import MolStarViewer from '../../MolStarViewer/MolStarViewer';

interface Props {
  selectedColors: any;
  baseUrl: string;
}

function Chains({ selectedColors, baseUrl }: Props) {
  const chainContainer = useRef<HTMLDivElement>(null);

  return (
    <MolStarViewer
      id="chainViewer"
      refContainer={chainContainer}
      baseUrl={baseUrl}
      selectedColors={selectedColors}
    />
  );
}

export default Chains;
