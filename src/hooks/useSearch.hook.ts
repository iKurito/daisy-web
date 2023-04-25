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

  const retrieveResponse = async (processID: string): Promise<boolean> => {
    const result = await callEndpoint(
      retrieveResponseService(daisyApi, processID)
    );
    if (result.status !== 200) {
      SnackBarUtilities.error('Your search was not found');
      return false;
    }
    dispatch(setDaisyResponse(result.data));
    SnackBarUtilities.success('Your search was found successfully');
    return true;
  };

  const requestResponse = async (data: DaisyRequest): Promise<boolean> => {
    const result = await callEndpoint(requestResponseService(daisyApi, data));
    if (result.status !== 201) {
      SnackBarUtilities.error('Something went wrong, please try again later');
      return false;
    }
    if (!result.data.isReady) {
      SnackBarUtilities.success(
        'Your request was received correctly, we will send you an email when it is ready'
      );
      return true;
    }
    navigate(`/${PublicRoutes.SEARCH}?processID=${result.data.requestID}`);
    return true;
  };

  return {
    loading,
    retrieveResponse,
    requestResponse,
  };
};

export default useSearch;
