import React from 'react';
import './App.css';
import Header from './Components/Header';
import CurrentDriversPanel from './Components/CurrentDriversPanel';
import CurrentTeamsPanel from './Components/CurrentTeamsPanel';
import DriverProfile from './Components/DriverProfile';
import { Switch, Route } from 'react-router-dom';
import { Spacer } from './Components/LayoutComponents';
import TeamProfile from './Components/TeamProfile';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <CurrentDriversPanel />
          <CurrentTeamsPanel />
        </Route>
        <Route exact path="/profile/driver/:driverId">
          <Spacer />
          <DriverProfile />
        </Route>
        <Route exact path="/profile/team/:constructorId">
          <Spacer />
          <TeamProfile />
        </Route>
      </Switch>
      

    </div>
  );
};

export default App;
