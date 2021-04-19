import React from 'react';
import './App.css';
import Header from './Components/Header';
import CurrentDriversPanel from './Components/CurrentDriversPanel';
import CurrentTeamsPanel from './Components/CurrentTeamsPanel';
import DriverProfile from './Components/DriverProfile';
import { Switch, Route } from 'react-router-dom';
import { Spacer } from './Components/LayoutComponents';
import TeamProfile from './Components/TeamProfile';
import LegendsPanel from './Components/LegendsPanel';
import SkySportsPanel from './Components/SkySportsPanel';
import SearchModal from './Components/Search';
import ExploreDrivers from './Components/ExploreDrivers';
import ExploreTeams from './Components/ExploreTeams';
import Standings from './Components/Standings';
import ReactGA from 'react-ga';
import RouteTracker from './RouteTracker';
import HomeCircuits from './Components/HomeCircuits';
import CircuitProfile from './Components/CircuitProfile';


const App: React.FC = () => {

  const TRACKING_ID = "UA-192952368-1";
  ReactGA.initialize(TRACKING_ID);
  

  return (
    <div className="App">

      <Header />
      <Switch>
        <Route exact path="/">
          <Spacer />
          <HomeCircuits />
          <CurrentDriversPanel />
          <CurrentTeamsPanel />
          <Standings />
          <LegendsPanel />
          <ExploreDrivers />
          <ExploreTeams /> 
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
        <Route exact path="/profile/circuit/:circuitId">
          <Spacer />
          <CircuitProfile />
        </Route>
      </Switch>

      <SearchModal />
      <RouteTracker />

    </div>
  );
};

export default App;
