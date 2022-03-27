import React, { memo } from 'react';
import { IChar } from '../const';
import { useAppDispatch } from '../../hooks/redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { charSlice } from '../../store/reducers/CharSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles';
import Box from '@mui/material/Box';

interface ICharItem {
  item: IChar;
  index: number;
  onRemoveChar: (id: number) => void;
}
const CharItem: React.FC<ICharItem> = (props) => {
  const { item, index, onRemoveChar } = props;

  const dispatch = useAppDispatch();
  const classes = useStyles();

  const onSetActive = () => {
    dispatch(charSlice.actions.setSharActive({ index, isActive: !item.isActive }));
  };

  return (
    <Box sx={classes.root}>
      <Box sx={classes.actions}>
        <Box onClick={onSetActive}>
          {item.isActive ? (
            <FavoriteIcon sx={{ cursor: 'pointer' }} color="error" />
          ) : (
            <FavoriteBorderIcon sx={{ cursor: 'pointer' }} color="error" />
          )}
        </Box>
        <DeleteIcon
          sx={{ cursor: 'pointer' }}
          onClick={() => onRemoveChar(item.id)}
          color="error"
        />
      </Box>
      <img
        style={{
          width: '200px',
          height: '200px',
          transform: 'translate(-15px, -15px)',
          marginTop: '16px',
        }}
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        alt={item.name}
      />
      <Box sx={classes.charName}>{item.name}</Box>
    </Box>
  );
};

export default memo(CharItem);
