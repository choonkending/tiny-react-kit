/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const Section = styled.h1`
  color: white;
  background: ${props => props.background};
`
const Home = () => (
  <Section background="cornflowerblue">
    <div>Home page</div>
    <Link to="details">Details Page</Link>
  </Section>
);

export default Home;
