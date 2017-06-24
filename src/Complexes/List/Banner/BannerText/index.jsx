import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const BannerText = styled.section`
  margin-bottom: 4rem;
  margin-top: 3rem;
  line-height: 1.5;
  color: #3e4247;
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

const Paragraph = styled.p`
  line-height: 1.5rem;
  margin-top: .5rem;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 2px;
  font-family: 'Fira Sans', sans-serif;
`;

export default () => {
  return (
    <BannerText>
      <Grid>
        <Row center="xs">
          <Col xs={8}>
            <Title>Discover Our New Developments</Title>
            <Paragraph>
              Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.
            </Paragraph>
            <Button type="button" name="contact">Contact The Team</Button>
          </Col>
        </Row>
      </Grid>
    </BannerText>
  );
};
