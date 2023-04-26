import { AxiosInstance } from 'axios';
import { loadAbort } from '../utilities';
import { DaisyRequest } from '../models';

export const retrieveResponseService = (
  api: AxiosInstance,
  processID: string
) => {
  const controller = loadAbort();
  return {
    call: api.get(`/request/${processID}`, {
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
    call: api.post('/request', data, {
      signal: controller.signal,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
    controller,
  };
};
