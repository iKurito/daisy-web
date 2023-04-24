import { FormikHelpers, useFormik } from 'formik';
import { curationProcessForm } from '../../schemas';
import { DaisyRequest } from '../../models';
import useSearch from '../../hooks/useSearch.hook';

function HomePage() {
  const { loading, requestResponse } = useSearch();

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      proteinID: '',
      email: '',
    },
    validationSchema: curationProcessForm,
    onSubmit: async (
      data: DaisyRequest,
      actions: FormikHelpers<DaisyRequest>
    ) => {
      const wasSuccessful = await requestResponse(data);
      if (wasSuccessful) {
        actions.resetForm();
      }
    },
  });

  return (
    <section className="bg-[#4b505b]">
      <div className="max-w-[1440px] mx-auto hero min-h-[calc(100vh_-_177px)] w-full">
        <div className="cover min-h-[calc(100vh_-_177px)] w-full flex justify-between">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-10 place-items-center p-4 sm:p-10">
            <div className="lg:mb-10">
              <h1 className="text-7xl xs:text-9xl sm:text-[150px] text-third tracking-widest">
                Daisy
              </h1>
              <h2 className="text-2xl xs:text-4xl sm:text-[45px] text-third sm:tracking-widest sm:leading-10">
                The complete service for repeat protein curation
              </h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-4 rounded-lg bg-secondary shadow-lg w-full xl:w-[700px] 2xl:w-[800px] space-y-2">
                <h3 className="text-[25px] xs:text-[30px] sm:text-[35px] text-black tracking-tight font-bold">
                  Repeat units identification
                </h3>
                <p className="text-[18px] xs:text-[20px] sm:text-[25px] text-black tracking-tight text-justify">
                  In order to start the repeat protein curation process,
                  complete the information below
                </p>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="pdbUnitprot"
                    className="text-[18px] xs:text-[20px] sm:text-[25px] text-black tracking-tight font-semibold"
                  >
                    {/* Protein structure, sequence or PDB ID{' '}
                  <span className="text-fourth">*</span> */}
                    PDB ID or UnitProt
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
                    className="text-[18px] xs:text-[20px] sm:text-[25px] text-black tracking-tight font-semibold"
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
                {/* <textarea className="w-full border rounded-lg h-40 border-gray-300 outline-none px-3 py-2 resize-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth" /> */}
                {/* <div className="flex flex-col xs:flex-row xs:inline-flex xs:items-center gap-1">
                  <span className="text-[15px] sm:text-[20px] text-black tracking-tight">
                    or
                  </span>
                  <button
                    className="text-[15px] sm:text-[20px] tracking-tight inline-flex items-center gap-1 text-fourth font-bold"
                    type="button"
                  >
                    <MiniUploadIcon /> upload a fasta, pdb or text file
                  </button>
                </div> */}
                <div className="flex flex-col gap-4 sm:flex-row justify-between">
                  <div className="flex flex-col">
                    {/* <span className="text-[12px] sm:text-[15px] font-bold">
                      Do you want to try Daisy?
                    </span>
                    <span className="text-[12px] sm:text-[15px]">
                      Try using{' '}
                      <span className="text-fourth underline">
                        this repeat protein <strong>sequence</strong>
                      </span>
                    </span>
                    <span className="text-[12px] sm:text-[15px]">
                      Try using{' '}
                      <span className="text-fourth underline">
                        this repeat protein <strong>structure</strong>
                      </span>
                    </span> */}
                  </div>
                  <div className="items-start">
                    <button
                      type="submit"
                      className={`${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      } rounded-lg bg-third px-16 py-2 hover:shadow-lg font-bold tracking-wide text-[15px] sm:text-[20px] w-full sm:w-auto`}
                      disabled={loading}
                    >
                      Start
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
