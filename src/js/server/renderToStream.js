/* @flow */
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import styled, { ServerStyleSheet } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';
import createMarkupStream from './createMarkupStream';

const renderToStream = (req: *) => {
  const helmetContext = {};
  const sheet = new ServerStyleSheet();
  const screen = sheet.collectStyles(
    <ServerLocation url={req.url}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </ServerLocation>
  );

  const addMarkup = createMarkupStream(helmetContext);
  return sheet.interleaveWithNodeStream(renderToNodeStream(screen)).pipe(addMarkup);
};

export default renderToStream;
