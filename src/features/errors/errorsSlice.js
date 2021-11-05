import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const slice = createSlice({
  name: 'errors',
  initialState
});

const reducer = slice.reducer;

export default reducer;
