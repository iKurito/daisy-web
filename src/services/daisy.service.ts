/* eslint-disable no-nested-ternary */
import { AxiosInstance } from 'axios';
import { loadAbort } from '../utilities';
import { DaisyRequestAdvanced, DaisyRequest } from '../models';

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

export const retrieveProteinService = (
  api: AxiosInstance,
  proteinID: string
) => {
  const controller = loadAbort();
  return {
    call: api.get(`/protein/${proteinID}`, {
      signal: controller.signal,
    }),
    controller,
  };
}

export const requestAdvancedService = (
  api: AxiosInstance,
  data: DaisyRequestAdvanced
) => {
  const controller = loadAbort();
  const newData = {
    proteinID: data.proteinID,
    email: data.email,
    threshold: data.threshold,
    III_1: data.threshold >= 0 ? 0 : (data.selectedClasses.III_1 ? 1 : 0),
    III_2: data.threshold >= 0 ? 0 : (data.selectedClasses.III_2 ? 1 : 0),
    III_3: data.threshold >= 0 ? 0 : (data.selectedClasses.III_3 ? 1 : 0),
    III_4: data.threshold >= 0 ? 0 : (data.selectedClasses.III_4 ? 1 : 0),
    III_5: data.threshold >= 0 ? 0 : (data.selectedClasses.III_5 ? 1 : 0),
    III_6: data.threshold >= 0 ? 0 : (data.selectedClasses.III_6 ? 1 : 0),
    IV_1: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_1 ? 1 : 0),
    IV_2: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_2 ? 1 : 0),
    IV_3: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_3 ? 1 : 0),
    IV_4: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_4 ? 1 : 0),
    IV_5: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_5 ? 1 : 0),
    IV_6: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_6 ? 1 : 0),
    IV_7: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_7 ? 1 : 0),
    IV_8: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_8 ? 1 : 0),
    IV_9: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_9 ? 1 : 0),
    IV_10: data.threshold >= 0 ? 0 : (data.selectedClasses.IV_10 ? 1 : 0),
    V_1: data.threshold >= 0 ? 0 : (data.selectedClasses.V_1 ? 1 : 0),
    V_2: data.threshold >= 0 ? 0 : (data.selectedClasses.V_2 ? 1 : 0),
    V_3: data.threshold >= 0 ? 0 : (data.selectedClasses.V_3 ? 1 : 0),
    V_4: data.threshold >= 0 ? 0 : (data.selectedClasses.V_4 ? 1 : 0),
    V_5: data.threshold >= 0 ? 0 : (data.selectedClasses.V_5 ? 1 : 0), 
  }
  return {
    call: api.post('/request/advanced', newData, {
      signal: controller.signal,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
    controller,
  };
}
