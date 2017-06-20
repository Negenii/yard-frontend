import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Logo from './compass-logo.svg';

export default () => {
  return (
    <header className="header">
      <Grid>
        <div className="header-wrapper">
          <img src={Logo} alt="compass-logo" className="header-logo" />
          <nav className="header-nav">
            <a href="undefined" className="header-nav-link">Купить</a>
            <a href="undefined" className="header-nav-link">Снять</a>
            <a href="undefined" className="header-nav-link">Наши агенты</a>
          </nav>
        </div>
      </Grid>
    </header>
  );
};
