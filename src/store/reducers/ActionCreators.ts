import { AppDispatch } from '../store';
import axios from 'axios';
import { charSlice, ICharList } from './CharSlice';

const apiBase = 'https://gateway.marvel.com:443/v1/public/';
const apikey = 'apikey=29bbfb3cad2a4bbf5b795dd3c737b5ec';
const baseOffset = 210;

export const fetchChars = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(charSlice.actions.charsFetching());
    const response = await axios.get<ICharList[]>(
      `${apiBase}characters?limit=9&offset=${baseOffset}&${apikey}`
    );
    // @ts-ignore
    dispatch(charSlice.actions.charsFetchingSuccess(response.data.data.results));
  } catch (e) {
    // @ts-ignore
    dispatch(charSlice.actions.charsFetchingError(e));
  }
};
