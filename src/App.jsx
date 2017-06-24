/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import List from './Complexes/List';
import Show from './Complexes/Show';


const Body = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 400;
  text-rendering: optimizeLegibility !important;
  font-smoothing: antialiased;
`;

export default () => (
  <Body>
    <Header />
    <Router>
      <main>
        <Route exact path="/" component={List} />
        <Route path="/complex/" component={Show} />
      </main>
    </Router>
    <Footer />
  </Body>
  );
