import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Card from './Card';

// TODO: Props as an object

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

export default () => (
  <Offers>
    <Grid>
      <Row sx="center">
        <Title>Предложения в ЖК «Полянка/44»</Title>
      </Row>
      <Row>
        <Col xs={4}>
          <Card /> {/* data={props.data} kv={1} smin={59} smax={120} pmin={20.3}  pmax={84.2} */}
        </Col>
        <Col xs={4}>
          <Card /> {/* data={props.data} kv={2} smin={59} smax={120} pmin={20.3}  pmax={84.2} */}
        </Col>
        <Col xs={4}>
          <Card /> {/* data={props.data} kv={3} smin={59} smax={120} pmin={20.3}  pmax={84.2} */}
        </Col>
      </Row>
    </Grid>
  </Offers>
);
