import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SnackBarUtilities } from '../utilities';
import { retrieveResponseService, requestResponseService } from '../services';
import { daisyApi } from '../api';
import { DaisyRequest } from '../models';
import { setDaisyResponse } from '../redux/states/daisy.state';
import { PublicRoutes, openDialogSubject$ } from '../data';


const useSearch = (callEndpoint: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const retrieveResponse = async (processID: string): Promise<boolean> => {
    const result = await callEndpoint(
      retrieveResponseService(daisyApi, processID)
    );
    if (result.status !== 200) {
      SnackBarUtilities.error('Your search was not found');
      return false;
    }
    dispatch(setDaisyResponse(result.data));
    if (result.data.valid)
      SnackBarUtilities.success('Your search was found successfully');
    return true;
  };

  const requestResponse = async (data: DaisyRequest): Promise<boolean> => {
    const result = await callEndpoint(requestResponseService(daisyApi, data));
    if (result.status !== 200) {
      SnackBarUtilities.error('Something went wrong, please try again later');
      return false;
    }
    if (!result.data.isReady) {
      dispatch(setDaisyResponse(result.data));
      openDialogSubject$.setSubject = true;
      return true;
    }
    navigate(`/${PublicRoutes.SEARCH}?processID=${result.data.requestID}`);
    return true;
  };

  return {
    retrieveResponse,
    requestResponse,
  };
};

export default useSearch;
