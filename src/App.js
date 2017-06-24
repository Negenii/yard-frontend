import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import List from './Complexes/List';
import Show from './Complexes/Show';

// import './style.css';
// import './complex.css';
/* eslint-disable react/jsx-filename-extension */

const Body = styled.div`
font-family: 'Fira Sans', sans-serif;
font-weight: 400;
text-rendering: optimizeLegibility !important;
font-smoothing: antialiased;
`;

export default () => (
  <Body>
    <div>
      <Header />
      <Router>
        <div className="wrapper">
          <Route exact path="/" component={List} />
          <Route path="/complex/:id" component={Show} />
        </div>
      </Router>
      <Footer />
    </div>
  </Body>
  );
