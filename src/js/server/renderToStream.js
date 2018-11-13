/* @flow */
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import styled, { ServerStyleSheet } from 'styled-components';
import App from '../App';
import Html from './Html';

const renderToStream = (req: *) => {
  const sheet = new ServerStyleSheet();
  const screen = sheet.collectStyles(
    <ServerLocation url={req.url}>
      <Html scriptSrc={"/static/main.js"}>
        <App />
      </Html>
    </ServerLocation>
  );

  return sheet.interleaveWithNodeStream(renderToNodeStream(screen));
};

export default renderToStream;
