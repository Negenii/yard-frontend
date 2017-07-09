// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Card from './OffersCard';
import { formatPrice } from '../../utils';
import type { StatisticsType } from './../types';

const Offers = styled.section`
  padding-top: 3.75rem;
  padding-bottom: 4rem;
  background-color: #f4f5f9;
`;

const Title = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #3e4247;
`;

type Props = {
  statistics: StatisticsType,
};
export default ({ statistics }: Props) => {
  const { price = {} } = statistics;
  const { from: priceFrom = {}, to: priceTo = {} } = price;

  return (
    <Offers>
      <Grid>
        <Row center="xs">
          <Title>Предложения в «»</Title>
        </Row>
        <Row>
          <Col xs={4}>
            <Card
              rooms={1}
              price={{ min: formatPrice(priceFrom.rub), max: formatPrice(priceTo.rub) }}
              square={{ min: 20.3, max: 84.2 }}
            />
          </Col>
          <Col xs={4}>
            <Card
              rooms={2}
              price={{ min: formatPrice(priceFrom.rub), max: formatPrice(priceTo.rub) }}
              square={{ min: 20.3, max: 84.2 }}
            />
          </Col>
          <Col xs={4}>
            <Card
              rooms={3}
              price={{ min: formatPrice(priceFrom.rub), max: formatPrice(priceTo.rub) }}
              square={{ min: 20.3, max: 84.2 }}
            />
          </Col>
        </Row>
      </Grid>
    </Offers>
  );
};
