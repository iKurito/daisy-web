import { FormikHelpers, useFormik } from 'formik';
import { Tooltip } from 'react-tooltip';
import useFetchAndLoad from '../../../hooks/useFecthAndLoad.hook';
import { useSearch } from '../../../hooks';
import { curationProcessForm } from '../../../schemas';
import { DaisyRequest } from '../../../models';
import { openDialogSubject$ } from '../../../data';
import { useHomeContext } from '../context/home.context';

function HomeSearch() {
  const { loading, callEndpoint } = useFetchAndLoad();

  const { requestResponse } = useSearch(callEndpoint);

  const { values, touched, errors, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        proteinID: '',
        email: '',
      },
      validationSchema: curationProcessForm,
      onSubmit: async (
        data: DaisyRequest,
        actions: FormikHelpers<DaisyRequest>
      ) => {
        const wasSuccessful = await requestResponse({
          ...data,
          email: 'mbezerrabrandao@pucp.edu.pe',
          proteinID: data.proteinID.toUpperCase(),
        });
        if (wasSuccessful) {
          actions.resetForm();
        }
        openDialogSubject$.setSubject = true;
      },
    });

  const { handleOpenAdvancedRequestModal } = useHomeContext();

  return (
    <section className="bg-[#4b505b]">
      <div className="max-w-[1440px] mx-auto hero min-h-[calc(100vh_-_240px)] xs:min-h-[calc(100vh_-_177px)] w-full">
        <div className="cover min-h-[calc(100vh_-_240px)] xs:min-h-[calc(100vh_-_177px)] w-full flex justify-between">
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
                    Protein ID (PDB or AlphaFold) or Proteome ID (Uniprot)
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
                <div className="flex flex-col xs:flex-row gap-2">
                  <em className="text-xs sm:text-sm font-bold">Examples: </em>
                  <button
                    type="button"
                    className="text-xs sm:text-sm underline text-blue-500 font-bold cursor-pointer"
                    onClick={() => setFieldValue('proteinID', '4GG4')}
                    disabled={loading}
                  >
                    <em>4GG4 (PDB ID)</em>
                  </button>
                  <button
                    type="button"
                    className="text-xs sm:text-sm underline text-blue-500 font-bold"
                    onClick={() => setFieldValue('proteinID', 'A0A0B1SDP6')}
                    disabled={loading}
                  >
                    <em>A0A0B1SDP6 (Alphafold ID)</em>
                  </button>
                  <button
                    type="button"
                    className="text-xs sm:text-sm underline text-blue-500 font-bold"
                    onClick={() => setFieldValue('proteinID', 'UP000000625')}
                    disabled={loading}
                  >
                    <em>UP000000625 (Proteome ID)</em>
                  </button>
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="text-[18px] xs:text-[20px] sm:text-[25px] text-black tracking-tight font-semibold"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    className="email rounded-lg border border-gray-300 outline-none px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fourth bg-gray-200"
                    onChange={handleChange}
                    autoComplete="on"
                    disabled
                  />
                  {errors.email && touched.email && (
                    <span className="text-red-500 text-[12px] sm:text-[15px]">
                      {errors.email}
                    </span>
                  )}
                </div>
                <Tooltip anchorSelect=".email" id="tooltip" place="top">
                  <p className="flex w-[200px] xs:w-auto text-xs sm:text-sm">
                    The Daisy Web Service will have an email notification system
                    very soon.
                  </p>
                </Tooltip>
                <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => handleOpenAdvancedRequestModal()}
                      disabled={loading}
                    >
                      <em className="underline text-[15px] sm:text-[18px]">
                        Advanced Request
                      </em>
                    </button>
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

export default HomeSearch;
