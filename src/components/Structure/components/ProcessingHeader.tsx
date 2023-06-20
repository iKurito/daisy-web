import { formattedTime } from '../../../utilities/time.utility';

interface Props {
  time: number;
}

function ProcessingHeader({ time }: Props) {
  const formatTime = formattedTime(time);

  return (
    <div>
      <h4 className="text-[18px] sm:text-[20px] font-bold">
        Processing Status:{' '}
        <span className="text-fourth text-[20px] sm:text-[25px]">
          Completed
        </span>
      </h4>
      <h5 className="text-[15px] sm:text-[18px] font-semibold">
        Processing Time - {formatTime} (HH:MM:SS)
      </h5>
    </div>
  );
}

export default ProcessingHeader;
