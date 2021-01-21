import React from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  return (
    <div>
      <Categories />
      <NewsList />
    </div>
  );
};

export default App;
