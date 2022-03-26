import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchChars } from '../../store/reducers/ActionCreators';
import './charList.scss';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CharItem from '../CharItem/CharItem';
import { charSlice } from '../../store/reducers/CharSlice';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

const CharList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChars());
  }, []);

  const { charList, isLoading, error, isFilter } = useAppSelector((state) => state.mainPage);

  let visibleData = charList;

  const onSetFilter = () => {
    dispatch(charSlice.actions.setFilter({ isFilter: !isFilter }));
  };

  const removeChar = (id: number) => {
    visibleData = charList.filter((item) => item.id !== id);
    dispatch(charSlice.actions.removeChar(visibleData));
  };

  if (isFilter) {
    visibleData = charList.filter((item) => item.isActive === isFilter);
  }
  if (!isFilter) {
    visibleData = charList;
  }

  return (
    <div className="char__list">
      <div onClick={onSetFilter}>
        {isFilter ? <FilterAltIcon color="error" /> : <FilterAltOffIcon color="error" />}
      </div>
      <Spinner isLoading={isLoading} />
      <ErrorMessage error={error} />
      {!(isLoading || error) && (
        <ul className="char__grid">
          {visibleData?.map((item, index) => (
            <CharItem key={item.id} item={item} index={index} removeChar={removeChar} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharList;
