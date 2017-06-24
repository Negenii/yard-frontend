import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';


const Area = styled.section`
  padding-top: 4rem;
  padding-bottom: 13.5rem;
  background-color: #3e4247;
`;

const Wrapper = styled.div`
  padding-top: 7.25rem;
`;

const Paragraph = styled.p`
  padding-right: 4rem;
  margin-bottom: 3.25rem;
  font-family: 'Philosopher';
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 2rem;
  color: #ffffff;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 3rem;
  padding-bottom: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: bold;
  color: #a9afb6;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: 'Fira Sans';
  font-size: 1rem;
  color: #00779a;
`;

const Image = styled.img`
  width: 100%;
`;


export default () => (
  <Area>
    <Grid>
      <Row xs="between">
        <Col xs={6}>
          <Wrapper>
            <Title>Якиманка</Title>
            <Paragraph>
              Исторический центр Москвы в двух километрах от Кремля
            </Paragraph>
            <Link href="undefined">Гид по Якиманке →</Link>
          </Wrapper>
        </Col>
        <Col xs={6}>
          <Image src={process.env.PUBLIC_URL + '/images/yakimanka.png'} alt="Якиманка" />
        </Col>
      </Row>
    </Grid>
  </Area>
);
