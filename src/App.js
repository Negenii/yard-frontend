import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BodyClassName from 'react-body-classname';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';

// import './style.css';
// import './complex.css';
/* eslint-disable react/jsx-filename-extension */
/* eslint max-len: ["error", 800]*/

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
          <Route exact path="/" component={Complexes} />
          <Route path="/complex/:id" component={Complex} />
        </div>
      </Router>
      <Footer />
    </div>
  </Body>
  );
