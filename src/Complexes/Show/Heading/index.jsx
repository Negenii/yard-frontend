import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Heading = styled.section`
  display: flex;
  padding-bottom: 0.7rem;
  padding-top: 1.5rem;
  background: #ffffff;
`;
const Title = styled.h1`
  margin-bottom: 0.7rem;
  margin-top: 0;
  font-family: Philosopher;
  font-size: 2rem;
  font-weight: bold;
  color: #3e4247;
`;

const Address = styled.p`
  display: block;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
  line-height: 1.2;
`;

const Favs = styled.div`
  display: block;
`;

const FavsButton = styled.button`
  padding: 8px 16px;
  margin-right: .5rem;
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  background: #fff;
  font-family: 'Fira Sans', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 1.0;
  color: #00779a;
`;

export default (props) => (
  <Heading>
    <Grid>
      <Row between="xs">
        <Col xs>
          <Title>{props.title}</Title>
          <Address>{props.address}</Address>
        </Col>
        <Favs>
          <FavsButton type="button" name="add-to-favs-button">В избранное</FavsButton>
        </Favs>
      </Row>
    </Grid>
  </Heading>
);
