// @flow
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { formatPrice, processRange } from '../../utils';
import { securityKinds, kinds, constructionKinds, quarters } from '../dictionaries';

import type { StatisticsType, DetailsType } from '../types';

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

type Props = {
  statistics: StatisticsType,
  from: number,
  to: number,
  details: DetailsType,
};

export default ({ statistics = {}, details = {}, from, to }: Props) => {
  const { security, propertyKind, constructionKind, ceilHeight = {} } = details;
  const { totalArea } = statistics;

  return (
    <Summary>
      <Grid>
        <Title>Характеристики</Title>
        <SummaryWrapper>
          <Row>
            <Col xs={4}>
              <SummaryItem>
                <ItemTitle>Количество квартир</ItemTitle>
                <Value>{statistics.propertiesCount}</Value>
              </SummaryItem>
              {security &&
                <SummaryItem>
                  <ItemTitle>Безопасность</ItemTitle>
                  <Value>{securityKinds[security]}</Value>
                </SummaryItem>}
              <SummaryItem>
                <ItemTitle>Цены</ItemTitle>
                <Value>
                  от {formatPrice(from)} млн до {formatPrice(to)} млн
                </Value>
              </SummaryItem>
            </Col>
            <Col xs={4}>
              {propertyKind &&
                <SummaryItem>
                  <ItemTitle>Тип</ItemTitle>
                  <Value>{kinds[propertyKind]}</Value>
                </SummaryItem>}
              {constructionKind &&
                <SummaryItem>
                  <ItemTitle>Конструкция корпусов</ItemTitle>
                  <Value>{constructionKinds[constructionKind]}</Value>
                </SummaryItem>}
              {totalArea &&
                <SummaryItem>
                  <ItemTitle>Площадь</ItemTitle>
                  <Value>{totalArea.from}м² – {totalArea.to}м²</Value>
                </SummaryItem>}
              {ceilHeight.to &&
                <SummaryItem>
                  <ItemTitle>Потолки</ItemTitle>
                  <Value>{processRange(ceilHeight, true, 2)}м</Value>
                </SummaryItem>}
              {details.maintenanceCosts &&
                <SummaryItem>
                  <ItemTitle>Обслуживание</ItemTitle>
                  <Value>{details.maintenanceCosts}₽ /м² / месяц</Value>
                </SummaryItem>}
            </Col>
            <Col xs={4}>
              {details.startQuarter &&
                <SummaryItem>
                  <ItemTitle>Начало строительства</ItemTitle>
                  <Value>{quarters[details.startQuarter]} квартал {details.startYear} года</Value>
                </SummaryItem>}
              {details.commissioningQuarter &&
                <SummaryItem>
                  <ItemTitle>Конец строительства</ItemTitle>
                  <Value>
                    {quarters[details.commissioningQuarter]} квартал {details.commissioningYear}{' '}
                    года
                  </Value>
                </SummaryItem>}
              <SummaryItem>
                <ItemTitle>Наземная парковка</ItemTitle>
                <Value>{details.parkings ? `${details.parkings} м/м` : 'нет'}</Value>
              </SummaryItem>
              <SummaryItem>
                <ItemTitle>Подземная парковка</ItemTitle>
                <Value>
                  {details.undergroundGarages ? `${details.undergroundGarages} м/м` : 'нет'}
                </Value>
              </SummaryItem>
            </Col>
          </Row>
        </SummaryWrapper>
      </Grid>
    </Summary>
  );
};
