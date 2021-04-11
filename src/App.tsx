import React from 'react';
import './App.css';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import MainPage from './pages/main-page';
import PropertyPage from './pages/property-page';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export enum AppPath {
  HOME = "/",
  LOGIN = "/login",
  PROPERTY = "/property",
  FAVORITES = "/favorites",
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path={AppPath.HOME} component={MainPage} exact />
        <Route path={AppPath.LOGIN} component={LoginPage} />
        <Route path={AppPath.PROPERTY} component={PropertyPage} />
        <Route path={AppPath.FAVORITES} component={FavoritesPage} />
      </Switch>
    </Router>
  );
}

export default App;
