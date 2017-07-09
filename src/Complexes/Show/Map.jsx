// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import List from './MapList';

const Map = styled.section`
  margin-top: -9.75rem;
  padding-bottom: 1.75rem;
`;

const Image = styled.img`
  width: 100%;
  height: 306px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
`;

const PUBLIC_URL: string = process.env.PUBLIC_URL || '';

export default () =>
  (<Map>
    <Grid>
      <Row>
        <Col xs={6}>
          <Image src={`${PUBLIC_URL}/images/googlemap.png`} alt="" />
        </Col>
        <Col xs={6}>
          <List />
        </Col>
      </Row>
    </Grid>
  </Map>);
