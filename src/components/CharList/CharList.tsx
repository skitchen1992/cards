import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchChars } from '../../store/reducers/ActionCreators';
import { ICharList } from '../../RootApp/const';
import './charList.scss';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CharList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchChars());
  }, []);

  const { charList, isLoading, error } = useAppSelector((state) => state.mainPage);

  const renderItems = (arr?: ICharList[]) => {
    const items = arr?.map((item) => {
      const imgStyle =
        item.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
          ? 'char__Img'
          : 'char__hasImg';

      return (
        <li className="char__item" key={item.id}>
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            className={imgStyle}
            alt={item.name}
          />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{items}</ul>;
  };

  const items = renderItems(charList);
  const spinner = isLoading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(isLoading || error) ? items : null;
  return (
    <div className="char__list">
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
      {spinner}
      {errorMessage}
      {content}
    </div>
  );
};

export default CharList;
