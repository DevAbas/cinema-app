import { createSlice } from '@reduxjs/toolkit';

const initialState = { list: [] };

export const slice = createSlice({
  name: 'movies',
  initialState
});

const reducer = slice.reducer;

export default reducer;
