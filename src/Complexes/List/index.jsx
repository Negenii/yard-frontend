import React from 'react';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';
import ComplexCard from './ComplexCard';
import Banner from '../../Banner';
import BannerText from '../../Banner/BannerText';

export default () =>
  <BodyClassName className="background-pattern">
    <div>
      <Banner />
      <BannerText />
      <section className="complexes-cards">
        <Grid>
          <ComplexCard id={1} imageUrl={'/images/complex@2x.png'} />
          <ComplexCard id={2} imageUrl={'/images/appartment-preview2@2x.jpg'} />
          <ComplexCard id={3} imageUrl={'/images/appartment-preview3@2x.jpg'} />
        </Grid>
      </section>
    </div>
  </BodyClassName>;
