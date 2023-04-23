import { configureStore } from '@reduxjs/toolkit';
import { DaisyInfo } from '../models';
import { daisySliceReducer } from './states';

export interface DaisyStore {
  daisy: DaisyInfo;
}

export default configureStore<DaisyStore>({
  reducer: {
    daisy: daisySliceReducer,
  },
  devTools: !import.meta.env.PROD,
});
