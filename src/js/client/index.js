/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';

const root = document.getElementById('root');

if (root) {
  ReactDOM.hydrate(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
    root);
}
