import React from 'react';
import Heading from './Heading';
import Gallery from './Gallery';
import Info from './Info';
import Summary from './Summary';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Area from './Area';
import Map from './Map';

const title = 'Жилой комплекс «Полянка/44»';
const address = 'Район Якиманка, улица Большая Полянка, дом 44 · 119180';

export default () =>
  (<div>
    <Heading title={title} address={address} />
    <Gallery imagesCount={41} />
    <Info />
    <Summary />
    <Description />
    <Infrastructure />
    <Offers />
    <Area />
    <Map />
  </div>);
