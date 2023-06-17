import { useNavigate } from 'react-router-dom';
import { FormikHelpers, useFormik } from 'formik';
import { useEffect } from 'react';
import {
  classAndSubclassFive,
  classAndSubclassFour,
  classAndSubclassThree,
  openAdvancedRequestSubject$,
} from '../../../data';
import { useModal } from '../../../hooks';
import { XIcon } from '../../../icons';
import { DaisyRequestv2 } from '../../../models';
import { curationProcessAdvancedForm } from '../../../schemas';
import { ClassAndSubclassOptions } from './ClassAndSubclassOptions';

interface Props {
  proteinID: string;
  email: string;
}

export function AdvancedRequestModal({ proteinID, email }: Props) {
  const navigate = useNavigate();
  const { open } = useModal(openAdvancedRequestSubject$);

  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        proteinID,
        email,
        threshold: 50,
      },
      validationSchema: curationProcessAdvancedForm,
      onSubmit: async (
        data: DaisyRequestv2,
        actions: FormikHelpers<DaisyRequestv2>
      ) => {
        console.log(data);
        // const wasSuccessful = await requestResponse({
        //   ...data,
        //   proteinID: data.proteinID.toUpperCase(),
        // });
        // if (wasSuccessful) {
        //   actions.resetForm();
        // }
      },
    });

  const handleExit = () => {
    openAdvancedRequestSubject$.setSubject = false;
  };

  useEffect(() => {
    setFieldValue('proteinID', proteinID);
    setFieldValue('email', email);
  }, [email, proteinID, setFieldValue]);

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
                onClick={handleExit}
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
                  Protein ID (PDB or AlphaFold) or Proteome ID (Uniprot)
                </label>
                <input
                  id="pdbUnitprot"
                  name="proteinID"
                  type="text"
                  value={values.proteinID}
                  className="rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth"
                  onChange={handleChange}
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
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 text-[12px] sm:text-[15px]">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="threshold"
                  className="text-[14px] xs:text-[16px] sm:text-[18px] text-black tracking-tight"
                >
                  Threshold
                </label>
                <div className="flex items-center justify-center space-x-2">
                  <input
                    id="threshold"
                    type="range"
                    max={50}
                    min={0}
                    value={values.threshold}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary"
                  />
                  <div className="relative inline-block after:absolute after:top-2 after:right-[0.5em] after:content-['%'] after:hover:right-[2em] after:focus-within:right-[2em]">
                    <input
                      name="threshold"
                      type="number"
                      className="rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth w-20 text-center hover:text-left focus-within:text-left"
                      max={50}
                      min={0}
                      value={values.threshold}
                      onChange={handleChange}
                      content="%"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-[14px] xs:text-[16px] sm:text-[18px] text-black tracking-tight">
                  Class and Subclass
                </span>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <ClassAndSubclassOptions options={classAndSubclassThree} />
                  <ClassAndSubclassOptions options={classAndSubclassFour} />
                  <ClassAndSubclassOptions options={classAndSubclassFive} />
                </div>
              </div>
            </div>
            {/* footer */}
            <div className="border-t border-solid border-slate-200" />
            <div className="flex self-center sm:self-end items-center justify-end p-6 rounded-b space-x-4">
              <button
                className="text-sm md:text-base text-red-500 hover:text-red-600 font-bold px-4 py-2 outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={handleExit}
              >
                Cancel
              </button>
              <button
                className="text-sm md:text-base bg-third active:bg-third font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="submit"
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
