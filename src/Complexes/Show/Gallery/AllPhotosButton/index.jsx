import React from 'react';
import styled from 'styled-components';
import { declenNum } from '../../../../utils';

const AllPhotosButton = styled.button`
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  border: none;
  border-radius: 2px;
  background-color: #00779a;
  color: #fff;
  font-family: 'Fira Sans';
  line-height: 1;
  font-size: 10px;
  font-weight: 300;
  cursor: pointer;
`;
export default props =>
  (<AllPhotosButton type="button" name="button">
    {props.images.length}{' '}
    {declenNum(['фотография', 'фотографии', 'фотографий'])(props.images.length)}
  </AllPhotosButton>);
