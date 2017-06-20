import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
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
  );
};
