import { useDispatch } from 'react-redux';
import { SnackBarUtilities } from '../utilities';
import { retrieveResponse } from '../services';
import useFetchAndLoad from './useFecthAndLoad.hook';
import { daisyApi } from '../api';

const useSearch = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { loading, callEndpoint } = useFetchAndLoad();

  const addWorkflow = async (): Promise<boolean> => {
    const result = await callEndpoint(retrieveResponse(daisyApi));
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
    addWorkflow,
  };
};

export default useSearch;
