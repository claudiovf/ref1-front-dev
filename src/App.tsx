import React from 'react';
import './App.css';
import Header from './Components/Header';
import CurrentDriversPanel from './Components/CurrentDriversPanel';
import CurrentTeamsPanel from './Components/CurrentTeamsPanel';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CurrentDriversPanel />
      <CurrentTeamsPanel />
      

    </div>
  );
};

export default App;
