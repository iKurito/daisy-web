import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { msaBuilder } from '../../../utilities';

interface Props {
  baseUrl: string;
}

function AlignedUnits({ baseUrl }: Props) {
  const fastaRef = useRef(null);
  const dsspRef = useRef(null);

  useEffect(() => {
    msaBuilder(fastaRef, `${baseUrl}/afasta`);
    msaBuilder(dsspRef, `${baseUrl}/dssp`);
  }, [baseUrl]);

  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-[18px] sm:text-[20px] text-center">
        If you are not able to visualize the following outputs, please request a
        cross-origin demo{' '}
        <Link
          to="https://cors-anywhere.herokuapp.com/"
          className="underline text-blue-600"
          target="_blank"
        >
          here
        </Link>
      </h2>
      <h2 className="text-[18px] sm:text-[20px] font-bold text-center">
        Sequence viewer (aligned units)
      </h2>
      <div className="overflow-x-auto flex items-center lg:justify-center">
        <div ref={fastaRef} />
      </div>
      <h2 className="text-[18px] sm:text-[20px] font-bold text-center">
        Secondary structure viewer (DSSP, aligned units)
      </h2>
      <div className="overflow-x-auto flex items-center lg:justify-center">
        <div ref={dsspRef} />
      </div>
      <div className="flex flex-col xs:flex-row items-center justify-end gap-2 xs:gap-6">
        <span className="text-[15px] sm:text-[18px] font-bold">Powered by</span>
        <img
          src="/assets/img/repeats-db-lite_logo.webp"
          className="w-60"
          alt="trnet-lite"
        />
      </div>
    </div>
  );
}

export default AlignedUnits;
