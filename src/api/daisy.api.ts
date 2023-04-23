import axios from 'axios';
import { getEnvEnvariables } from '../utilities';

const { VITE_SECUENS_API_URL } = getEnvEnvariables();

const secuensApi = axios.create({
  baseURL: VITE_SECUENS_API_URL,
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
