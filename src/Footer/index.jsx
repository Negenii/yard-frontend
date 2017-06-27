import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import ArrowImg from './right-arrow.svg';

const Footer = styled.footer`
  width: 100%;
  height: auto;
  padding-top: 2rem;
  margin-top: 2rem;
  padding-bottom: 1.75rem;
  background-color: #111111;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #a9afb6;
`;

const Heading = styled.h4`
  margin-top: 1rem;
  font-size: 0.875rem;
  margin: 0;
  font-weight: 700;
  line-height: 1.5rem;
`;

const Paragraph = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  line-height: 1.3rem;
  font-weight: 300;
  color: #a9afb6;
`;

const Phone = styled.p`
  margin-top: 1.3rem;
`;

const Title = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: #646971;
`;

const FooterLine = styled.hr`
  height: 2px;
  margin: 0 0 1rem 0;
  background: #3e4247;
  border: none;
`;

const FooterLink = styled.a`
  display: block;
  margin-top: .5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  color: #fff;
  text-decoration: none;
`;

const ArrowWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const LinkArrow = styled.img`
  margin-left: .5rem;
  margin-top: .5rem;
`;

const Disclaimer = styled.p`
  margin-top: 5.75rem;
  margin-bottom: 0;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  font-size: 11px;
  line-height: 1.75;
  color: #a9afb6;
`;

export default () =>
  (<Footer>
    <Grid>
      <Row>
        <Col xs={2}>
          <Heading>ООО «Ярд»</Heading>
          <Paragraph>ОГРН 1175074002531</Paragraph>
          <Paragraph>ИНН 5036165365</Paragraph>
          <Phone>+7 (999) 821-14-88</Phone>
        </Col>
        <Col xsOffset={2} xs={2}>
          <FooterLine />
          <Title>Жилые комплексы</Title>
          <FooterLink href="undefined">ВТБ Арена Парк</FooterLink>
          <FooterLink href="undefined">Садовые кварталы</FooterLink>
          <FooterLink href="undefined">Резиденция Монэ</FooterLink>
          <ArrowWrapper>
            <FooterLink href="undefined">Все ЖК Москвы</FooterLink>
            <LinkArrow src={ArrowImg} />
          </ArrowWrapper>
        </Col>
        <Col xs={2}>
          <FooterLine />
          <Title>Компания</Title>
          <FooterLink href="undefined">Команда</FooterLink>
          <FooterLink href="undefined">О компании</FooterLink>
        </Col>
      </Row>
      <Row>
        <Col xsOffset={4} xs={8}>
          <Disclaimer>
            Любая информация, представленная на данном сайте, носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями статьи 437 ГК
            РФ. © ООО «Ярд», 2017
          </Disclaimer>
        </Col>
      </Row>
    </Grid>
  </Footer>);
