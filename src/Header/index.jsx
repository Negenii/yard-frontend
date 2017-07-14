import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import LogoImg from './compass-logo.svg';

const Nav = styled.nav`
  font-family: 'Fira Sans', sans-serif;
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  background-color: #fff;
  border-bottom: solid 1px #eaebf0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const NavLink = styled.a`
  margin-left: 2rem;
  font-size: 1rem;
  text-decoration: none;
  line-height: 1;
  color: #3e4247;
`;

export default () =>
  (<Header>
    <Grid>
      <HeaderWrapper>
        <LogoLink to="/">
          <img src={LogoImg} alt="compass-logo" />
        </LogoLink>
        <Nav className="header-nav">
          <NavLink href="undefined">Купить</NavLink>
          <NavLink href="undefined">Снять</NavLink>
          <NavLink href="undefined">Наши агенты</NavLink>
        </Nav>
      </HeaderWrapper>
    </Grid>
  </Header>);
