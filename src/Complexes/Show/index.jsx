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
import { formatAddress } from '../../utils';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    return fetch(`https://api.jqestate.ru/v1/complexes/${this.props.match.params.id}`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState(responseJson);
      });
  }

  render() {
    const { name, images = [], location = {}, statistics = {} } = this.state;
    const { price = {} } = statistics;
    const { from = {}, to = {} } = price;
    return (
      <div>
        <Heading title={name} address={formatAddress(location)} />
        <Gallery images={images} />
        <Info />
        <Summary appartmentCount={statistics.propertiesCount} />
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
