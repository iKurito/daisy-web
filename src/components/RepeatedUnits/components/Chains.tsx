/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import MolStarViewer from '../../MolStarViewer/MolStarViewer';

interface Props {
  selectedColors: any;
  baseUrl: string;
}

function Chains({ selectedColors, baseUrl }: Props) {
  const chainContainer = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [selectedColors]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full py-10">
        <div className="custom-loader" />
      </div>
    );
  }

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
