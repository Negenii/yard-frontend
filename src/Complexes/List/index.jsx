// @flow
import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import ComplexCard from './ComplexCard';
import Banner from './Banner';
import BannerText from './Banner/BannerText';
import { formatAddress, getImageUrl } from '../../utils';
import get from '../../api';

const Body = styled(BodyClassName)`
  background-color: #eaebf0;
  background-image: url('images/background.png');
  background-size: 20px 10px;
`;

const Cards = styled.section`
  padding-bottom: 1rem;
`;

class List extends Component {
  componentDidMount() {
    get('complexes?filter[state]=public').then(({ items: complexes = [] }) => {
      this.setState({ complexes });
    });
  }

  state = { complexes: [] };
  render() {
    const { complexes = [] } = this.state;
    return (
      <Body>
        <div>
          <Banner />
          <BannerText />
          <Cards>
            <Grid>
              {complexes.map(complex =>
                (<ComplexCard
                  key={complex.id}
                  id={complex.id}
                  title={complex.name}
                  imageUrl={getImageUrl(complex.images[0].id)}
                  address={formatAddress(complex.location)}
                >
                  The Lewis Steel Building is a masterful industrial conversion located in the heart
                  of
                  Williamsburg. Located at 76 North 4th Street, the former 1930s steel factory has
                  been
                  transformed into 83 individually unique and luxury loft apartments.
                </ComplexCard>),
              )}
            </Grid>
          </Cards>
        </div>
      </Body>
    );
  }
}

export default List;
