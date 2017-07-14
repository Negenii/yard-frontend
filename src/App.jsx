import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
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

export default () =>
  (<Body>
    <Router>
      <main>
        <Header />
        <Helmet>
          <title>Compass Development</title>
        </Helmet>
        <Route exact path="/" component={List} />
        <Route path="/complex/:id" component={Show} />
      </main>
    </Router>
    <Footer />
  </Body>);
