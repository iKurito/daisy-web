import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SnackBarUtilities } from '../utilities';
import { retrieveResponseService, requestResponseService } from '../services';
import useFetchAndLoad from './useFecthAndLoad.hook';
import { daisyApi } from '../api';
import { DaisyRequest } from '../models';
import { setDaisyResponse } from '../redux/states/daisy.state';
import { PublicRoutes } from '../data';

const useSearch = () => {
  const navigate = useNavigate();
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
      SnackBarUtilities.error('Not obtained response, please try again later');
      return false;
    }
    if (!result.data.isReady) {
      SnackBarUtilities.success(
        'Your request was received correctly, we will send you an email when it is ready'
      );
      return true;
    }
    dispatch(setDaisyResponse(result.data));
    navigate(`/${PublicRoutes.SEARCH}?processID=${result.data.requestID}`);
    SnackBarUtilities.success(
      'You have been redirected to the search page, you can see the results there'
    );
    return true;
  };

  return {
    loading,
    retrieveResponse,
    requestResponse,
  };
};

export default useSearch;
