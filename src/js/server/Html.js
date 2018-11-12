/* @flow */
import React, { type Element} from 'react';

type Props = {
  children: Element<*>,
  scriptSrc: string
};

const Html = ({ children, scriptSrc }: Props) => {
  return (
    <html>
      <head>
        <title>Tiny React Kit</title>
      </head>
      <body>
        <div id="root">{ children }</div>
        <script src={scriptSrc} />
      </body>
    </html>
  );
};


export default Html;
