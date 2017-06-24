import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Infrastructure = styled.section`
    padding-bottom: 3.5rem;
`;

const Wrapper = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #e0e0e1;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0rem;
  padding-bottom: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #3e4247;
`;

const Items = styled.div`
  margin-top: 1rem;
`;

const Item = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.38;
  color: #3e4247;
`;

export default () => (
  <Infrastructure>
    <Grid>
      <Wrapper>
        <Title>Инфраструктура</Title>
        <Items>
          <Row>
            <Col xs={2}>
              <Item>Бассейн</Item>
              <Item>Частная школа</Item>
            </Col>
            <Col xs={2}>
              <Item>Бассейн</Item>
              <Item>Частная школа</Item>
            </Col>
            <Col xs={2}>
              <Item>Бассейн</Item>
              <Item>Частная школа</Item>
            </Col>
            <Col xs={2}>
              <Item>Бассейн</Item>
              <Item>Частная школа</Item>
            </Col>
            <Col xs={2}>
              <Item>Бассейн</Item>
              <Item>Частная школа</Item>
            </Col>
            <Col xs={2}>
              <Item>Бассейн</Item>
              <Item>Частная школа</Item>
            </Col>
          </Row>
        </Items>
      </Wrapper>
    </Grid>
  </Infrastructure>
);
