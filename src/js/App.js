/* @flow */
import React from 'react';
import { Router } from '@reach/router';
import { Home, Details } from './screens';

const App = () => (
  <Router>
    <Home path="/" />
    <Details path="details" />
  </Router>
);

export default App;
