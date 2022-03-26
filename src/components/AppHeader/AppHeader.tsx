import React from 'react';
import './appHeader.scss';

const AppHeader: React.FC = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <a href="#">
          <span>Marvel</span> information portal
        </a>
      </h1>
    </header>
  );
};

export default AppHeader;
