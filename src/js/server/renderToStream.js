/* @flow */
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import styled, { ServerStyleSheet } from 'styled-components';
import App from '../App';
import Html from './Html';

const renderToStream = () => {
  const sheet = new ServerStyleSheet();
  const screen = sheet.collectStyles(
    <Html scriptSrc={"/static/main.js"}>
      <App />
    </Html>
  );

  return sheet.interleaveWithNodeStream(renderToNodeStream(screen));
};

export default renderToStream;
