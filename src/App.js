import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Logo from './images/compass-logo.svg';
import CompassDevelopmentLogo from './images/compass-development-logo.svg';
import Complex1 from './images/complex@3x.png';
import Complex2 from './images/appartment-preview2@2x.jpg';
import Complex3 from './images/appartment-preview3@2x.jpg';


import './style.css';
import './complex.css';
/* eslint-disable react/jsx-filename-extension */
/* eslint max-len: ["error", 800]*/

export default () => (
  <div className="background-pattern">
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
    <section className="banner">
      <img src={CompassDevelopmentLogo} alt="" />
    </section>
    <section className="banner-text">
      <Grid>
        <Row center="xs">
          <div className="col-xs-8">
            <h2 className="banner-text-title">Discover Our New Developments</h2>
            <p className="banner-text-paragraph">Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</p>
            <button type="button" name="contact" className="banner-black-button">Contact The Team</button>
          </div>
        </Row>
      </Grid>
    </section>
    <section className="complexes-cards">
      <Grid>
        <Row>
          <Col xs={12}>
            <a href="undefined" className="complexes-complex-card">
              <img src={Complex1} className="complexes-complex-block-image" alt="complex" />
              <div className="complexes-complex-description">
                <p className="complexes-complex-description-address">SOUTH BEACH, SAN FRANCISCO</p>
                <h3 className="complexes-complex-description-title">The Harrison</h3>
                <p className="complexes-complex-description-info">Beautifully appointed residences perched atop Rincon Hill, The Harrison offers unparalleled Bay Bridge and city views within steps of San Francisco’s greatest restaurants, shops, and The Embarcadero. </p>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <a href="undefined" className="complexes-complex-card">
              <img src={Complex2} className="complexes-complex-block-image" alt="complex" />
              <div className="complexes-complex-description">
                <p className="complexes-complex-description-address">MIDTOWN EAST, MANHATTAN</p>
                <h3 className="complexes-complex-description-title">100 East 53rd Street</h3>
                <p className="complexes-complex-description-info">One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan&apos;s Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned. </p>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <a href="undefined" className="complexes-complex-card">
              <img src={Complex3} className="complexes-complex-block-image" alt="complex" />
              <div className="complexes-complex-description">
                <p className="complexes-complex-description-address">NOLITA, MANHATTAN</p>
                <h3 className="complexes-complex-description-title">152 Elizabeth</h3>
                <p className="complexes-complex-description-info">152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.</p>
              </div>
            </a>
          </Col>
        </Row>
      </Grid>
    </section>
    <footer className="footer">
      <Grid>
        <Row>
          <Col xs={2}>
            <h4 className="footer-heading">ООО «Ярд»</h4>
            <p className="footer-paragraph">ОГРН 1175074002531</p>
            <p className="footer-paragraph">ИНН 5036165365</p>
            <p className="footer-phone">
              +7 (999) 821-14-88
            </p>
          </Col>
          <Col xsOffset={2} xs={2}>
            <hr className="footer-line" />
            <h4 className="footer-title">Жилые комплексы</h4>
            <a href="undefined" className="footer-link">ВТБ Арена Парк</a>
            <a href="undefined" className="footer-link">Садовые кварталы</a>
            <a href="undefined" className="footer-link">Резиденция Монэ</a>
            <a href="undefined" className="footer-link footer-link-top-offset footer-link-arrow">Все ЖК Москвы</a>
          </Col>
          <Col xs={2}>
            <hr className="footer-line" />
            <h4 className="footer-title">Компания</h4>
            <a href="undefined" className="footer-link">Команда</a>
            <a href="undefined" className="footer-link">О компании</a>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={4} xs={8}>
            <p className="footer-disclaimer">Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</p>
          </Col>
        </Row>
      </Grid>
    </footer>
  </div>
  );
