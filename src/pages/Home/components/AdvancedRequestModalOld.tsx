import {
  classAndSubclassFive,
  classAndSubclassFour,
  classAndSubclassThree,
  openAdvancedRequestSubject$,
} from '../../../data';
import { useModal } from '../../../hooks';
import { XIcon } from '../../../icons';
import { ClassAndSubclassOptions } from './ClassAndSubclassOptions';
import { useHomeContext } from '../context/home.context';

export function AdvancedRequestModalOld() {
  const { open } = useModal(openAdvancedRequestSubject$);

  const {
    values,
    selected,
    touched,
    errors,
    loading,
    handleChange,
    handleSubmit,
    handleChangeSubclasses,
    handleSelect,
    handleExitAdvancedRequestModal,
  } = useHomeContext();

  if (open)
    return (
      <div className="p-4 md:p-8 justify-center sm:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[90] outline-none focus:outline-none transition-all duration-300">
        <div className="relative my-6 mx-auto max-w-2xl w-full">
          {/* content */}
          <form
            className="border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            onSubmit={handleSubmit}
          >
            {/* header */}
            <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t items-center">
              <h2 className="text-[20px] sm:text-[24px] font-semibold">
                Advanced Request
              </h2>
              <button
                type="button"
                className="cursor-pointer"
                onClick={handleExitAdvancedRequestModal}
                disabled={loading}
              >
                <XIcon />
              </button>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto space-y-2">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="pdbUnitprot"
                  className="text-[14px] xs:text-[16px] sm:text-[18px] text-black tracking-tight"
                >
                  Protein ID (PDB or AlphaFold)
                </label>
                <input
                  id="pdbUnitprot"
                  name="proteinID"
                  type="text"
                  value={values.proteinID}
                  className="rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth"
                  onChange={handleChange}
                  disabled={loading}
                />
                {errors.proteinID && touched.proteinID && (
                  <span className="text-red-500 text-[12px] sm:text-[15px]">
                    {errors.proteinID}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-[14px] xs:text-[16px] sm:text-[18px] text-black tracking-tight"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  className="rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth"
                  onChange={handleChange}
                  autoComplete="on"
                  disabled={loading}
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 text-[12px] sm:text-[15px]">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="select"
                  className="text-[14px] xs:text-[16px] sm:text-[18px] text-black tracking-tight"
                >
                  Select by Threshold or Subclasses
                </label>
                <select
                  id="select"
                  className="rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth"
                  onChange={handleSelect}
                  value={selected}
                  disabled={loading}
                >
                  <option value="threshold">Threshold</option>
                  <option value="subclasses">Subclasses</option>
                </select>
              </div>
              {selected === 'threshold' ? (
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <input
                      id="threshold"
                      type="range"
                      max={100}
                      min={0}
                      value={values.threshold}
                      onChange={handleChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary"
                      disabled={loading}
                    />
                    <div className="relative inline-block after:absolute after:top-2 after:right-[0.5em] after:content-['%'] after:hover:right-[2em] after:focus-within:right-[2em]">
                      <input
                        name="threshold"
                        type="number"
                        className="rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth w-20 text-center hover:text-left focus-within:text-left"
                        max={100}
                        min={0}
                        value={values.threshold}
                        onChange={handleChange}
                        content="%"
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col space-y-1">
                  <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-2">
                    <ClassAndSubclassOptions
                      options={classAndSubclassThree}
                      handleChange={handleChangeSubclasses}
                    />
                    <ClassAndSubclassOptions
                      options={classAndSubclassFour}
                      handleChange={handleChangeSubclasses}
                    />
                    <ClassAndSubclassOptions
                      options={classAndSubclassFive}
                      handleChange={handleChangeSubclasses}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* footer */}
            <div className="border-t border-solid border-slate-200" />
            <div className="flex self-center sm:self-end items-center justify-end p-6 rounded-b space-x-4">
              <button
                className="text-sm md:text-base text-red-500 hover:text-red-600 font-bold px-4 py-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={handleExitAdvancedRequestModal}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                className={`${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                } text-sm md:text-base bg-third active:bg-third font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150`}
                type="submit"
                disabled={loading}
              >
                Start
              </button>
            </div>
          </form>
        </div>
      </div>
    );

  return null;
}
