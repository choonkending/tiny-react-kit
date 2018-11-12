/* @flow */
import React from 'react';
import styled from 'styled-components';

const Section = styled.h1`
  color: white;
  background: ${props => props.background};
`
const App = () => <Section background="cornflowerblue">I am a tiny react starter kit</Section>;

export default App;
