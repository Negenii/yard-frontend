import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import Logo from './compass-logo.svg';


export default () => {
  return (
    <Router>
      <header className="header">
        <Grid>
          <div className="header-wrapper">
            <Link to="/" >
              <img src={Logo} alt="compass-logo" className="header-logo" />
            </Link>
            <nav className="header-nav">
              <a href="undefined" className="header-nav-link">Купить</a>
              <a href="undefined" className="header-nav-link">Снять</a>
              <a href="undefined" className="header-nav-link">Наши агенты</a>
            </nav>
          </div>
        </Grid>
      </header>
    </Router>
  );
};
