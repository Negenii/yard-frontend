// @flow
import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
`;

const Item = styled.div`
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: #fff;
  border-bottom: solid 1px #e0e0e1;

  &:last-child{
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    padding-bottom: 27px;
    background-color: #fff;
  }
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.38;
  color: #a9afb6;
`;

export default () =>
  (<List>
    <Item>
      <Title>Красный Октябрь</Title>
      <Text>24 минуты, 6 км</Text>
    </Item>
    <Item>
      <Title>World className</Title>
      <Text>2 минуты, 300 м</Text>
    </Item>
    <Item>
      <Title>Третьяковская галерея</Title>
      <Text>14 минуты, 4 км</Text>
    </Item>
  </List>);
