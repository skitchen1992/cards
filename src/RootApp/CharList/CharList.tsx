import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchChars } from '../../store/reducers/ActionCreators';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CharItem from '../CharItem/CharItem';
import { charSlice } from '../../store/reducers/CharSlice';
import Filter from '../Filter/Filter';
import Box from '@mui/material/Box';
import useStyles from './styles';

const CharList: React.FC = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchChars());
  }, []);

  const { charList, isLoading, error, isFilter } = useAppSelector((state) => state.mainPage);

  let visibleData = charList;

  const onSetFilter = () => {
    dispatch(charSlice.actions.setFilter({ isFilter: !isFilter }));
  };

  const onRemoveChar = (id: number) => {
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
    <Box sx={classes.root}>
      <Box>
        <Filter isFilter={isFilter} onSetFilter={onSetFilter} />
        <Spinner isLoading={isLoading} />
        <ErrorMessage error={error} />
        {!(isLoading || error) && (
          <Box sx={classes.grid}>
            {visibleData?.map((item, index) => (
              <CharItem key={item.id} item={item} index={index} onRemoveChar={onRemoveChar} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CharList;
