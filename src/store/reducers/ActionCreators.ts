import { AppDispatch } from '../store';
import axios from 'axios';
import { charSlice } from './CharSlice';
import { IResponse } from '../../RootApp/const';

const apiBase = 'https://gateway.marvel.com:443/v1/public/';
const apikey = 'apikey=29bbfb3cad2a4bbf5b795dd3c737b5ec';
const baseOffset = 210;

export const fetchChars = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(charSlice.actions.charsFetching());
    const response = await axios.get<IResponse>(
      `${apiBase}characters?limit=9&offset=${baseOffset}&${apikey}`
    );
    const charList = response.data.data.results;
    console.log(charList);
    dispatch(charSlice.actions.charsFetchingSuccess(charList));
  } catch (e) {
    dispatch(charSlice.actions.charsFetchingError());
  }
};
