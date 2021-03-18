import React from 'react';
import './App.css';
import Header from './Components/Header';
import CurrentDriversPanel from './Components/CurrentDriversPanel';
import CurrentTeamsPanel from './Components/CurrentTeamsPanel';
import DriverProfile from './Components/DriverProfile';
import { Switch, Route } from 'react-router-dom';
import { Spacer, Fonts } from './Components/LayoutComponents';
import TeamProfile from './Components/TeamProfile';
import LegendsPanel from './Components/LegendsPanel';
import SkySportsPanel from './Components/SkySportsPanel';
import SearchModal from './Components/Search';
import TeamWinners from './Components/TeamWinners';



const App: React.FC = () => {

  return (
    <div className="App">
      <Fonts />
      <Header />
      <Switch>
        <Route exact path="/">
          <CurrentDriversPanel />
          <CurrentTeamsPanel />
          <LegendsPanel />
          <TeamWinners />
          <SkySportsPanel />
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

      <SearchModal />
      

    </div>
  );
};

export default App;
