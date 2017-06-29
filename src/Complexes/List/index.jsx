import React, { Component } from 'react';
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

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    return fetch('https://api.jqestate.ru/v1/complexes?filter[state]=public')
      .then(response => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({ items: responseJson.items });
      });
  }

  render() {
    const complexes = this.state;
    console.log(complexes);
    return (
      <Body>
        <div>
          <Banner />
          <BannerText />
          <Cards>
            <Grid>
              {complexes.items.map(complex =>
                (<ComplexCard
                  key={complex.id}
                  id={complex.id}
                  title={complex.name}
                  imageId={complex.images[0].id}
                  subLocality={complex.location.subLocalityName}
                  locality={complex.location.localityName}
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
