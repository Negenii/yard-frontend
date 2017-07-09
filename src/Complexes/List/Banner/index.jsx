// @flow
import React from 'react';
import styled from 'styled-components';
import CompassDevelopmentLogo from './compass-development-logo.svg';

const Banner = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 291px;
  background: #161616;
`;

export default () =>
  (<Banner>
    <img src={CompassDevelopmentLogo} alt="" />
  </Banner>);
