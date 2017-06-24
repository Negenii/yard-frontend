import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin-top: 1rem;
  padding-bottom: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1.5rem;
  background-color: #fff;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-family: 'Philosopher';
  font-size: 20px;
  font-weight: 700;
  color: #3e4247;
`;

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-family: 'Fira Sans';
  font-size: 1rem;
  line-height: 1;
  color: #a9afb6;
`;

const Value = styled.p`
  padding: 0;
  margin-top: 0;
  margin-bottom: 25px;
  font-family: 'Fira Sans';
  font-size: 1rem;
  line-height: 1.38;
  color: #3e4247;
`;

const ButtonWrapper = styled.p`
  margin-top: 2rem;
  margin-bottom: 0;
  text-align: center;
`;

const Button = styled.button`
  padding-top: 12px;
  padding-left: 2rem;
  padding-bottom: 12px;
  padding-right: 2rem;
  border: 0;
  border-radius: 0.125rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1rem;
  line-height: 1;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

export default props =>
  (<Card>
    <Title>{props.rooms}-комнатные квартиры</Title>
    <Subtitle>Площадь</Subtitle>
    <Value>от {props.squareMin} до {props.squareMax} м<sup>2</sup></Value>

    <Subtitle>Стоимость</Subtitle>
    <Value>от {props.priceMin} до {props.priceMax} млн руб</Value>

    <ButtonWrapper>
      <Button>Посмотреть предложения</Button>
    </ButtonWrapper>
  </Card>);
