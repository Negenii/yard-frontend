import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Summary = styled.section`
  background: #fff;
  margin-bottom: 2.5rem;
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

const SummaryWrapper = styled.div`
  margin-top: .5rem;
`;
const SummaryItem = styled.dl`
  display: flex;
  margin-bottom: 0;
  margin-top: .5rem;
`;

const ItemTitle = styled.dt`
  margin-top: 0rem;
  margin-bottom: 0.25em;
  width: 50%;
  font-size: 1rem;
  color: #a9afb6;
  line-height: 1.4;
`;

const Value = styled.dd`
  margin-top: 0rem;
  margin-bottom: 0.25rem;
  margin-left: 0;
  width: 50%;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
  color: #3e4247;
`;


export default () => (
  <Summary>
    <Grid>
      <Title>Характеристики</Title>
      <SummaryWrapper>
        <Row>
          <Col xs={4}>
            <SummaryItem>
              <ItemTitle>Количество квартир:</ItemTitle>
              <Value>1 503</Value>
            </SummaryItem>
            <SummaryItem>
              <ItemTitle>Статус:</ItemTitle>
              <Value>Квартиры</Value>
            </SummaryItem>
            <SummaryItem>
              <ItemTitle>Цены:</ItemTitle>
              <Value>от 5.3 до 143.5 млн</Value>
            </SummaryItem>
          </Col>
          <Col xs={4}>
            <SummaryItem>
              <ItemTitle>Количество квартир:</ItemTitle>
              <Value>1 503</Value>
            </SummaryItem>
            <SummaryItem>
              <ItemTitle>Количество квартир:</ItemTitle>
              <Value>1 503</Value>
            </SummaryItem>
            <SummaryItem>
              <ItemTitle>Количество квартир:</ItemTitle>
              <Value>1 503</Value>
            </SummaryItem>
          </Col>
          <Col xs={4}>
            <SummaryItem>
              <ItemTitle>Количество квартир:</ItemTitle>
              <Value>1 503</Value>
            </SummaryItem>
            <SummaryItem>
              <ItemTitle>Количество квартир:</ItemTitle>
              <Value>1 503</Value>
            </SummaryItem>
            <SummaryItem>
              <ItemTitle>Количество квартир:</ItemTitle>
              <Value>1 503</Value>
            </SummaryItem>
          </Col>
        </Row>
      </SummaryWrapper>
    </Grid>
  </Summary>
);
