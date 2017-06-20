import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from './Header';
import Banner from './Banner';
import BannerText from './Banner/BannerText';
import Footer from './Footer';
import ComplexCard from './Complexes/List/ComplexCard';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './style.css';
import './complex.css';
/* eslint-disable react/jsx-filename-extension */
/* eslint max-len: ["error", 800]*/

export default () => (
  <bodyClassName className="background-pattern">
    <Header />
    <Banner />
    <BannerText />
    <section className="complexes-cards">
      <Grid>
        <ComplexCard />
        <ComplexCard />
        <ComplexCard />
      </Grid>
    </section>
    <Footer />
  </bodyClassName>
  );
