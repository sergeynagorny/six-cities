import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from './pages';
import { renderRoutes } from '@lib/render-routes/index';
import { useStore } from 'effector-react';
import { $isAuthenticated } from '@features/common/model/session';

function App() {
  const isAuthenticated = useStore($isAuthenticated);
  console.log("Render App, status: ", isAuthenticated);
  return (
    <Router>{isAuthenticated !== null ? renderRoutes(routes, isAuthenticated) : null}</Router>
  );
}

export default App;
