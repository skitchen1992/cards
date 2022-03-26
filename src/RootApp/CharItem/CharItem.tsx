import React, { memo } from 'react';
import { IChar } from '../const';
import './charItem.scss';
import { useAppDispatch } from '../../hooks/redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { charSlice } from '../../store/reducers/CharSlice';
import DeleteIcon from '@mui/icons-material/Delete';

interface ICharItem {
  item: IChar;
  index: number;
  removeChar: (id: number) => void;
}
const CharItem: React.FC<ICharItem> = (props) => {
  const { item, index, removeChar } = props;
  const dispatch = useAppDispatch();

  const onSetActive = () => {
    dispatch(charSlice.actions.charActive({ index, isActive: !item.isActive }));
  };

  return (
    <li className="char__item" key={item.id}>
      <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} />
      <div className="char__name">{item.name}</div>

      <div onClick={onSetActive}>
        {item.isActive ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color="error" />}
      </div>
      <DeleteIcon onClick={() => removeChar(item.id)} color="error" />
    </li>
  );
};

export default memo(CharItem);
