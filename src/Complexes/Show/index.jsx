import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Heading from './Heading';
import Gallery from './Gallery';
import Info from './Info';
import Summary from './Summary';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';

const title = 'Жилой комплекс «Полянка/44»';
const address = 'Район Якиманка, улица Большая Полянка, дом 44 · 119180';

export default () => (
  <div>
    <Heading title={title} address={address} />
    <Gallery imagesCount={41} />
    <Info />
    <Summary />
    <Description />
    <Infrastructure />
    <Offers />
    <section className="complex-area">
      <Grid>
        <div className="between-xs row">
          <Col xs={6}>
            <div className="complex-area-wrapper">
              <h2>Якиманка</h2>
              <p className="complex-area-paragraph">
                Исторический центр Москвы в двух километрах от Кремля
              </p>
              <a className="complex-area-link" href="undefined">Гид по Якиманке →</a></div>
          </Col>
          <Col xs={6}>
            <img src="/images/yakimanka.png" alt="Якиманка" />
          </Col>
        </div>
      </Grid>
    </section>
    <section className="complex-map">
      <Grid>
        <Row>
          <Col xs={6}>
            <img className="complex-map-image" src="/images/googlemap.png" alt="" />
          </Col>
          <Col xs={6}>
            <div className="complex-map-list">
              <div className="complex-map-item">
                <p className="complex-map-title">Красный Октябрь</p>
                <p className="complex-map-text">24 минуты, 6 км</p>
              </div>
              <div className="complex-map-item">
                <p className="complex-map-title">World className</p>
                <p className="complex-map-text">2 минуты, 300 м</p>
              </div>
              <div className="complex-map-last-item">
                <p className="complex-map-title">Третьяковская галерея</p>
                <p className="complex-map-text">14 минуты, 4 км</p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  </div>
);
