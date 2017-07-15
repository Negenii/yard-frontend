// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const CardLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 350px;
  margin-bottom: 3rem;
  text-decoration: none;
  background-color: #fff;

  &:hover{
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .3);
  }
`;

const Image = styled.img`
  width: 484px;
  height: 350px;
  flex-shrink: 0;
`;

const Description = styled.div`
  padding: 1.5rem 6.25rem 1.5rem 1rem;
  background-color: #fff;
  border-bottom: solid 2px #646971;
`;

const Address = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  color: #646971;
  text-transform: capitalize;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  color: #000;
  font-weight: bold;
  margin-top: 1.75rem;
  margin-bottom: 0;
`;

const Info = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #3e4247;
  margin-top: .8rem;
  margin-right: 2rem;
`;

type props = {
  id: number,
  imageUrl: string,
  title: string,
  address: string,
  children: string,
};

export default ({ id, imageUrl, title, address, children }: props) =>
  (<Row>
    <Col xs={12}>
      <CardLink to={`/complex/${id}`}>
        <Image src={imageUrl} alt="complex" />
        <Description>
          <Address>{address}</Address>
          <Title>{title}</Title>
          <Info>{children}</Info>
        </Description>
      </CardLink>
    </Col>
  </Row>);
