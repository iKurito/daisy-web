import { AxiosInstance } from 'axios';
import { loadAbort } from '../utilities';
import { DaisyRequest } from '../models';

export const retrieveResponseService = (api: AxiosInstance) => {
  const controller = loadAbort();
  return {
    call: api.get('/', {
      signal: controller.signal,
    }),
    controller,
  };
};

export const requestResponseService = (
  api: AxiosInstance,
  data: DaisyRequest
) => {
  const controller = loadAbort();
  return {
    call: api.post('/', data, {
      signal: controller.signal,
    }),
    controller,
  };
};
