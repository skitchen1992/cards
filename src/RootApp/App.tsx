import React from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import decoration from '../resources/img/vision.png';
import CharList from '../components/CharList/CharList';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <div className="char__content">
          <CharList />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
}

export default App;
