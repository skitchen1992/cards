import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharList } from '../../RootApp/const';

interface IUserState {
  charList?: ICharList[];
  isLoading: boolean;
  error: boolean;
}

const initialState: IUserState = {
  charList: [],
  isLoading: true,
  error: false,
};

export const charSlice = createSlice({
  name: 'charList',
  initialState,
  reducers: {
    charsFetching(state) {
      state.isLoading = true;
    },
    charsFetchingSuccess(state, action: PayloadAction<ICharList[]>) {
      state.isLoading = false;
      state.charList = action.payload;
    },
    charsFetchingError(state) {
      state.isLoading = false;
      state.error = false;
    },
  },
});

export default charSlice.reducer;
