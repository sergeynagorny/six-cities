import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from './pages';
import { renderRoutes } from '@lib/render-routes/index';

function App() {
  const isAuthenticated = false;
  
  return <Router>{renderRoutes(routes, isAuthenticated)}</Router>;
}

export default App;
