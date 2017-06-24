import React from 'react';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import ComplexCard from './ComplexCard';
import Banner from './Banner';
import BannerText from './Banner/BannerText';


const Body = styled(BodyClassName)`
  background-color: #eaebf0;
  background-image: url('images/background.png');
  background-size: 20px 10px;
`;

const Cards = styled.section`
  padding-bottom: 1rem;
`;

export default () => (
  <Body>
    <div>
      <Banner />
      <BannerText />
      <Cards>
        <Grid>
          <ComplexCard id={1} imageUrl={'/images/complex@2x.png'} />
          <ComplexCard id={2} imageUrl={'/images/appartment-preview2@2x.jpg'} />
          <ComplexCard id={3} imageUrl={'/images/appartment-preview3@2x.jpg'} />
        </Grid>
      </Cards>
    </div>
  </Body>
);
