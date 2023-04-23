import { AxiosInstance } from 'axios';
import { loadAbort } from '../utilities';

export const retrieveResponse = (api: AxiosInstance) => {
  const controller = loadAbort();
  return {
    call: api.get('/activities', {
      signal: controller.signal,
    }),
    controller,
  };
};
