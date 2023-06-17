import { createSlice } from '@reduxjs/toolkit';
import { DaisyInfo, DaisyResponse, ProteinResponse } from '../../models';

export const EmptyDaisyState: DaisyInfo = {
  response: {} as DaisyResponse,
  protein: {} as ProteinResponse,
};

export const daisySlice = createSlice({
  name: 'daisy',
  initialState: EmptyDaisyState,
  reducers: {
    setDaisyResponse: (state, action) => {
      return {
        ...state,
        response: action.payload,
      };
    },
    setProteinResponse: (state, action) => {
      return {
        ...state,
        protein: action.payload,
      };
    },
    clearDaisy: () => EmptyDaisyState,
  },
});

export const { setDaisyResponse, setProteinResponse, clearDaisy } = daisySlice.actions;

export default daisySlice.reducer;
