import React from 'react';
import { Grid } from 'react-flexbox-grid';
import ComplexCard from './ComplexCard';
import Banner from '../../Banner';
import BannerText from '../../Banner/BannerText';

export default () => (

  <bodyClassName className="background-pattern">
    <Banner />
    <BannerText />
    <section className="complexes-cards">
      <Grid>
        <ComplexCard id={1} imageUrl={'/images/complex@2x.png'} />
        <ComplexCard id={2} imageUrl={'/images/appartment-preview2@2x.jpg'} />
        <ComplexCard id={3} imageUrl={'/images/appartment-preview3@2x.jpg'} />
      </Grid>
    </section>

  </bodyClassName>

);
