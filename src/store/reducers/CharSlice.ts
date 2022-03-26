import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActiveChar, IChar, IFiltersChar } from '../../RootApp/const';

interface IUserState {
  charList: IChar[];
  isLoading: boolean;
  error: boolean;
  isFilter: boolean;
}

const initialState: IUserState = {
  charList: [],
  isLoading: true,
  error: false,
  isFilter: false,
};

export const charSlice = createSlice({
  name: 'charList',
  initialState,
  reducers: {
    charsFetching(state) {
      state.isLoading = true;
    },
    charsFetchingSuccess(state, action: PayloadAction<IChar[]>) {
      state.isLoading = false;
      state.charList = action.payload;
    },
    charsFetchingError(state) {
      state.isLoading = false;
      state.error = true;
    },
    charActive(state, action: PayloadAction<IActiveChar>) {
      const idx = action.payload.index;
      const isActive = action.payload.isActive;
      state.charList[idx].isActive = isActive;
    },
    removeChar(state, action: PayloadAction<IChar[]>) {
      state.charList = action.payload;
    },
    setFilter(state, action: PayloadAction<IFiltersChar>) {
      state.isFilter = action.payload.isFilter;
    },
  },
});

export default charSlice.reducer;
