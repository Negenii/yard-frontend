import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';


import './style.css';
import './complex.css';
/* eslint-disable react/jsx-filename-extension */
/* eslint max-len: ["error", 800]*/

export default () => (
  <div className="background-pattern">
    <Header />
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Complexes} />
        <Route path="/complex" component={Complex} />
      </div>
    </Router>
    <Footer />
  </div>
  );
