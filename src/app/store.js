import { configureStore } from '@reduxjs/toolkit';

//REDUCERS
import moviesReducer from '../features/movies/moviesSlice';
import errorsReducer from '../features/errors/errorsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    errors: errorsReducer
  }
});
