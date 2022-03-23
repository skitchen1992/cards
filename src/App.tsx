import React, { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';

import { fetchChars } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch();
  // @ts-ignore
  // const { charList } = useAppSelector((state) => state.mainPage.charList);

  // const { incr } = charSlice.actions;
  useEffect(() => {
    dispatch(fetchChars());
  }, []);

  return <div className="App"></div>;
}

export default App;
