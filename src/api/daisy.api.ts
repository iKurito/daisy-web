import axios from 'axios';
import { getEnvEnvariables } from '../utilities';

const { VITE_DAISY_SERVICE_URL } = getEnvEnvariables();

const secuensApi = axios.create({
  baseURL: VITE_DAISY_SERVICE_URL,
});

secuensApi.interceptors.response.use(
  (response) => {
    // SnackBarUtilities.success('Success');
    return response;
  },
  async (error) => {
    // SnackBarUtilities.error(getValidationError(error.code));
    return Promise.reject(error);
  }
);

export default secuensApi;
