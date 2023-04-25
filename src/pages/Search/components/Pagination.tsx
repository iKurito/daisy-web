import { ChevronLeft, ChevronRight } from '../../../icons';

interface Props {
  size: number;
  currentIndex: number;
  handleChangeDown: () => void;
  handleChangeUp: () => void;
}

function Pagination({
  size,
  currentIndex,
  handleChangeDown,
  handleChangeUp,
}: Props) {
  return (
    <div className="flex items-center gap-2 w-full justify-center">
      <button
        type="button"
        className="sm:flex hidden hover:rounded-lg hover:bg-third px-4 py-2 hover:shadow-lg font-bold"
        onClick={handleChangeDown}
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        className="sm:hidden rounded-lg border border-gray-100 bg-gray-200 hover:bg-third px-4 py-2 hover:shadow-lg tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
        onClick={handleChangeDown}
      >
        Bajar
      </button>
      <p className="w-40 sm:w-auto flex items-center justify-center">
        {currentIndex} of {size}
      </p>
      <button
        type="button"
        className="sm:hidden rounded-lg border border-gray-100 bg-gray-200 hover:bg-third px-4 py-2 hover:shadow-lg tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto flex items-center gap-2 justify-center"
        onClick={handleChangeUp}
      >
        Subir
      </button>
      <button
        type="button"
        className="hidden sm:flex hover:rounded-lg hover:bg-third px-4 py-2 hover:shadow-lg font-bold"
        onClick={handleChangeUp}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
