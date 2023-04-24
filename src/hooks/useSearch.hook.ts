import { useDispatch } from 'react-redux';
import { SnackBarUtilities } from '../utilities';
import { retrieveResponseService, requestResponseService } from '../services';
import useFetchAndLoad from './useFecthAndLoad.hook';
import { daisyApi } from '../api';
import { DaisyRequest } from '../models';

const useSearch = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { loading, callEndpoint } = useFetchAndLoad();

  const retrieveResponse = async (): Promise<boolean> => {
    const result = await callEndpoint(retrieveResponseService(daisyApi));
    if (result.status !== 200) {
      SnackBarUtilities.error('Not obtained response, please try again later');
      return false;
    }
    // dispatch(createValidation(result.data));
    SnackBarUtilities.success('Response obtained correctly');
    return true;
  };

  const requestResponse = async (data: DaisyRequest): Promise<boolean> => {
    const result = await callEndpoint(requestResponseService(daisyApi, data));
    if (result.status !== 201) {
      SnackBarUtilities.error(
        'No se pudo crear el Workflow, vuelva a intentarlo'
      );
      return false;
    }
    // dispatch(createValidation(result.data));
    SnackBarUtilities.success('Workflow creado correctamente');
    return true;
  };

  return {
    loading,
    retrieveResponse,
    requestResponse,
  };
};

export default useSearch;
