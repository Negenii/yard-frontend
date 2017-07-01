import React, { Component } from 'react';
import Heading from './Heading';
import Gallery from './Gallery';
import Info from './Info';
import Summary from './Summary';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Area from './Area';
import Map from './Map';
import { formatAddress, countImages } from '../../utils';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(props.match.params);
  }

  componentDidMount() {
    return (
      fetch(`https://api.jqestate.ru/v1/complexes/${this.props.match.params.id}`)
        // return fetch('https://api.jqestate.ru/v1/complexes/247')
        .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState(responseJson);
        })
    );
  }

  render() {
    const complex = this.state;
    console.log(complex.location);
    return (
      <div>
        <Heading title={complex.name} address={formatAddress(complex.location)} />
        <Gallery imagesCount={countImages(complex.images)} />
        <Info />
        <Summary />
        <Description />
        <Infrastructure />
        <Offers />
        <Area />
        <Map />
      </div>
    );
  }
}
export default Show;
