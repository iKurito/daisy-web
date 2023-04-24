import { createSlice } from '@reduxjs/toolkit';
import { DaisyInfo, DaisyResponse } from '../../models';

export const EmptyDaisyState: DaisyInfo = {
  response: {} as DaisyResponse,
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
    clearDaisy: () => EmptyDaisyState,
  },
});

export const { setDaisyResponse, clearDaisy } = daisySlice.actions;

export default daisySlice.reducer;
