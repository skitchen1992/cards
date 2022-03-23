import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICharList {}

interface IUserState {
  charList: ICharList[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: IUserState = {
  charList: [],
  isLoading: false,
  error: '',
  count: 0,
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
      state.error = '';
      state.charList = action.payload;
    },
    charsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // charList(state, action: PayloadAction<ICharList[]>) {
    //   state.charList = action.payload;
    // },
    // incr(state, action: PayloadAction<number>) {
    //   state.count = action.payload;
    // },
  },
});

export default charSlice.reducer;
