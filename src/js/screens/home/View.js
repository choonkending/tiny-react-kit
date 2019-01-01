/* @flow */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import Helmet from 'react-helmet-async';

const Section = styled.h1`
  color: white;
  background: ${props => props.background};
`
const Home = () => (
  <Fragment>
    <Helmet>
      <title>Home Page - Tiny React Kit</title>
      <meta name="description" content="keywords for home page" />
    </Helmet>
    <Section background="cornflowerblue">
      <div>Home page</div>
      <Link to="details">Details Page</Link>
    </Section>
  </Fragment>
);

export default Home;
