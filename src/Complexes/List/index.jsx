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

export default () =>
  (<Body>
    <div>
      <Banner />
      <BannerText />
      <Cards>
        <Grid>
          <ComplexCard
            id={1}
            imageUrl={`${process.env.PUBLIC_URL}/images/complex@2x.png`}
            address={'SOUTH BEACH, SAN FRANCISCO'}
            title={'764 Metropolitan Avenue'}
          >
            The Lewis Steel Building is a masterful industrial conversion
            located in the heart of Williamsburg. Located at 76 North 4th
            Street, the former 1930's steel factory has been transformed into 83
            individually unique and luxury loft apartments.
          </ComplexCard>

          <ComplexCard
            id={2}
            imageUrl={`${process.env
              .PUBLIC_URL}/images/appartment-preview2@2x.jpg`}
            address={'MIDTOWN EAST, MANHATTAN'}
            title={'100 East 53rd Street'}
          >
            One Hundred East Fifty Third Street by Foster + Partners is a
            limited collection of modern residences in Midtown Manhattan's
            Cultural District. The 94 residences ranging from alcove
            lofts to four bedrooms within the 63-story tower are generously
            proportioned.
          </ComplexCard>
          <ComplexCard
            id={3}
            imageUrl={`${process.env
              .PUBLIC_URL}/images/appartment-preview3@2x.jpg`}
            address={'NOLITA, MANHATTAN'}
            title={'152 Elizabeth'}
          >
            152 Elizabeth is an ultra-luxury condominium building—the first
            in New York City designed by Japanese master architect Tadao
            Ando. Located at the corner of Kenmare and Elizabeth Streets
            in Nolita, the 32,000-square-foot building will stand as a
            profound architectural statement and embrace the industrial
            character of the neighborhood.
          </ComplexCard>
        </Grid>
      </Cards>
    </div>
  </Body>);
