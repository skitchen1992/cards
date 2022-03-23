import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainPage from './reducers/CharSlice';

const rootReducer = combineReducers({
  mainPage,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
