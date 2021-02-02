import React from 'react';
import './App.css';
import Header from './Components/Header';
import CurrentDriversPanel from './Components/CurrentDriversPanel';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CurrentDriversPanel />
      

    </div>
  );
};

export default App;
