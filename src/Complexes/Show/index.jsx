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
import get from '../../api';

class Show extends Component {
  state = {};

  componentDidMount() {
    get(`complexes/${this.props.match.params.id}`).then((responseJson) => {
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
        <Summary statistics={statistics} from={from.rub} to={to.rub} />
        <Description />
        <Infrastructure />
        <Offers name={name} statistics={statistics} />
        <Area />
        <Map />
      </div>
    );
  }
}
export default Show;
