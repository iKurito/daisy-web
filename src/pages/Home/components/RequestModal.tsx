import { useDispatch, useSelector } from 'react-redux';
import { openDialogSubject$ } from '../../../data';
import { useModal } from '../../../hooks';
import { XIcon } from '../../../icons';
import { DaisyStore } from '../../../redux/store';
import { clearDaisy } from '../../../redux/states/daisy.state';

export function RequestModal() {
  const dispatch = useDispatch();
  const { open } = useModal(openDialogSubject$);

  const daisyState = useSelector((state: DaisyStore) => state.daisy);
  const { requestID } = daisyState.response;

  const handleExit = () => {
    dispatch(clearDaisy());
    openDialogSubject$.setSubject = false;
  };

  if (open) {
    return (
      <div className="p-4 md:p-8 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[90] outline-none focus:outline-none transition-all duration-300">
        <div className="relative my-6 mx-auto max-w-2xl w-full">
          {/* content */}
          <div className="border-2 dark:border-dark-third rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-dark-primary outline-none focus:outline-none">
            {/* header */}
            <div className="flex justify-end p-5 border-b border-solid border-slate-200 dark:border-dark-third rounded-t items-center">
              <button
                type="button"
                className="cursor-pointer dark:text-gray-100"
                onClick={handleExit}
              >
                <XIcon />
              </button>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto">
              <div className="flex flex-col justify-center gap-2">
                <p className="text-[18px] sm:text-[20px] leading-5">
                  Your request was recived sucsessfuly, your request ID is the
                  follwing:
                </p>
                <p className="text-[18px] sm:text-[20px] leading-5">
                  <strong>Request ID: </strong>
                  {requestID}
                </p>
                <p className="text-[18px] sm:text-[20px] leading-5">
                  Please save this Request ID to check the results later.
                </p>
              </div>
            </div>
            {/* footer */}
            <div className="border-t border-solid border-slate-200 dark:border-dark-third" />
            <div className="flex self-center sm:self-end items-center justify-end p-6 rounded-b">
              <button
                className="text-sm md:text-base text-red-500 background-transparent font-bold px-6 py-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={handleExit}
              >
                Cerrar
              </button>
              <button
                className="text-sm md:text-base bg-third text-gray-500 active:bg-third font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={handleExit}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
