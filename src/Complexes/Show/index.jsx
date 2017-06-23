import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Heading from './Heading';
import Gallery from './Gallery';

const title = 'Жилой комплекс «Полянка/44»';
const address = 'Район Якиманка, улица Большая Полянка, дом 44 · 119180';

export default () => (
  <div>
    <Heading title={title} address={address} />
    <Gallery imagesCount={41} />
    <section className="complex-info">
      <Grid>
        <div className="complex-info-titles">
          <div className="complex-info-titles-item">
            <h2 className="complex-info-title">
              950
              <small className="complex-info-title-subtitle">предложений</small>
            </h2>
          </div>
          <div className="complex-info-titles-item">
            <div className="complex-info-title-architect">
              <h2 className="complex-info-title">
                John McAslan + Partners
                <small className="complex-info-title-subtitle">архитектор</small>
              </h2>
            </div>
          </div>
          <div className="complex-info-titles-item">
            <h2 className="complex-info-title">
              Группа «ПСН»
              <small className="complex-info-title-subtitle">застройщик</small>
            </h2>
          </div>
        </div>
      </Grid>
    </section>
    <section className="complex-summary">
      <Grid>
        <h2 className="complex-summary-title">Характеристики</h2>
        <div className="complex-summary-wrapper">
          <Row>
            <Col xs={4}>
              <dl className="complex-summary-summary-item">
                <dt className="complex-summary-item-title">Количество квартир:</dt>
                <dd className="complex-summary-item-value">1 503</dd>
              </dl>
              <dl className="complex-summary-summary-item">
                <dt className="complex-summary-item-title">Статус:</dt>
                <dd className="complex-summary-item-value">Квартиры</dd>
              </dl>
              <dl className="complex-summary-summary-item">
                <dt className="complex-summary-item-title">Цены:</dt>
                <dd className="complex-summary-item-value">от 5.3 до 143.5 млн</dd>
              </dl>
            </Col>
            <Col xs={4}>
              <dl className="complex-summary-summary-item">
                <dt className="complex-summary-item-title">Количество квартир:</dt>
                <dd className="complex-summary-item-value">1 503</dd>
              </dl>
              <dl className="complex-summary-summary-item">
                <dt className="complex-summary-item-title">Количество квартир:</dt>
                <dd className="complex-summary-item-value">1 503</dd>
              </dl>
              <dl className="complex-summary-summary-item">
                <dt className="complex-summary-item-title">Количество квартир:</dt>
                <dd className="complex-summary-item-value">1 503</dd>
              </dl>
            </Col>
            <Col xs={4}>
              <dl className="complex-summary-summary-item">
                <dt className="complex-summary-item-title">Количество квартир:</dt>
                <dd className="complex-summary-item-value">1 503</dd>
              </dl>
              <dl className="complex-summary-summary-item">
                <dt className="complex-summary-item-title">Количество квартир:</dt>
                <dd className="complex-summary-item-value">1 503</dd>
              </dl>
              <dl className="complex-summary-summary-item">
                <dt className="complex-summary-item-title">Количество квартир:</dt>
                <dd className="complex-summary-item-value">1 503</dd>
              </dl>
            </Col>
          </Row>
        </div>
      </Grid>
    </section>
    <section className="complex-description">
      <Grid>
        <Row>
          <div className="col-xs-2">
            <div className="complex-description-title-wrapper">
              <h2 className="complex-description-title">Описание</h2>
            </div>
          </div>
          <div className="col-xs-10">
            <p className="complex-description-paragraph">
              ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля. Территория разделена на три зоны: жилой район, центральный стадион «Динамо» и большой спортивный парк.
            </p>
            <p className="complex-description-paragraph">
              Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt Regency Moscow» и четыре современных бизнес-центра. На территории — рестораны, спа-комплекс, фитнес-центр, химчистка, аптеки, магазины и отделения банков. В каждом корпусе работает консьерж и круглосуточная охрана. Для жителей оборудованы технические помещения под хранение колясок и велосипедов, комнаты для домашних животных и уютные вестибюли с мягкими креслами для встреч с друзьями и соседями.
            </p>
            <p className="complex-description-paragraph">
              Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей, торгово-развлекательный комплекс, подземная парковка для гостей и две крупные спортивные арены. Жизнь квартала сосредоточена в этой зоне: здесь можно сходить на концерт или фестиваль, поболеть за любимую команду и купить новую рубашку в торговом комплексе.
            </p>
            <p className="complex-description-paragraph">
              Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и Отдыха. Здесь каждый найдет занятие: для детей оборудованы игровые зоны, для подростков — спортивные площадки на открытом воздухе, для взрослых — велосипедные дорожки и зоны отдыха, где можно подышать свежим воздухом во время рабочего перерыва.
            </p>
          </div>
        </Row>
      </Grid>
    </section>
    <section className="complex-infrastructure">
      <Grid>
        <div className="complex-infrastructure-wrapper">
          <h2 className="complex-infrastructure-title">Инфраструктура</h2>
          <div className="complex-infrastructure-items">
            <Row>
              <div className="col-xs-2">
                <p className="complex-infrastructure-item">Бассейн</p>
                <p className="complex-infrastructure-item">Частная школа</p>
              </div>
              <div className="col-xs-2">
                <p className="complex-infrastructure-item">Бассейн</p>
                <p className="complex-infrastructure-item">Частная школа</p>
              </div>
              <div className="col-xs-2">
                <p className="complex-infrastructure-item">Бассейн</p>
                <p className="complex-infrastructure-item">Частная школа</p>
              </div>
              <div className="col-xs-2">
                <p className="complex-infrastructure-item">Бассейн</p>
                <p className="complex-infrastructure-item">Частная школа</p>
              </div>
              <div className="col-xs-2">
                <p className="complex-infrastructure-item">Бассейн</p>
                <p className="complex-infrastructure-item">Частная школа</p>
              </div>
              <div className="col-xs-2">
                <p className="complex-infrastructure-item">Бассейн</p>
                <p className="complex-infrastructure-item">Частная школа</p>
              </div>
            </Row>
          </div>
        </div>
      </Grid>
    </section>
    <section className="complex-offers">
      <Grid>
        <div className="row center-xs">
          <h2 className="complex-offers-title">Предложения в ЖК «Полянка/44»</h2>
        </div>
        <Row>
          <Col xs={4}>
            <div className="complex-offer-card">
              <h3 className="complex-offer-card-title">1-комнатные квартиры</h3>
              <p className="complex-offer-card-subtitle">Площадь</p>
              <p className="complex-offer-card-value">от 59 до 120 м²</p>
              <p className="complex-offer-card-subtitle">Стоимость</p>
              <p className="complex-offer-card-value">от 20.3 до 84.2 млн руб</p>
              <p className="complex-offer-card-button-wrapper">
                <button className="complex-offer-card-button">Посмотреть предложения</button>
              </p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="complex-offer-card">
              <h3 className="complex-offer-card-title">2-комнатные квартиры</h3>
              <p className="complex-offer-card-subtitle">Площадь</p>
              <p className="complex-offer-card-value">от 59 до 120 м²</p>
              <p className="complex-offer-card-subtitle">Стоимость</p>
              <p className="complex-offer-card-value">от 20.3 до 84.2 млн руб</p>
              <p className="complex-offer-card-button-wrapper">
                <button className="complex-offer-card-button">Посмотреть предложения</button>
              </p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="complex-offer-card">
              <h3 className="complex-offer-card-title">3-комнатные квартиры</h3>
              <p className="complex-offer-card-subtitle">Площадь</p>
              <p className="complex-offer-card-value">от 59 до 120 м²</p>
              <p className="complex-offer-card-subtitle">Стоимость</p>
              <p className="complex-offer-card-value">от 20.3 до 84.2 млн руб</p>
              <p className="complex-offer-card-button-wrapper">
                <button className="complex-offer-card-button">Посмотреть предложения</button>
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
    <section className="complex-area">
      <Grid>
        <div className="between-xs row">
          <Col xs={6}>
            <div className="complex-area-wrapper">
              <h2>Якиманка</h2>
              <p className="complex-area-paragraph">
                Исторический центр Москвы в двух километрах от Кремля
              </p>
              <a className="complex-area-link" href="undefined">Гид по Якиманке →</a></div>
          </Col>
          <Col xs={6}>
            <img src="/images/yakimanka.png" alt="Якиманка" />
          </Col>
        </div>
      </Grid>
    </section>
    <section className="complex-map">
      <Grid>
        <Row>
          <Col xs={6}>
            <img className="complex-map-image" src="/images/googlemap.png" alt="" />
          </Col>
          <Col xs={6}>
            <div className="complex-map-list">
              <div className="complex-map-item">
                <p className="complex-map-title">Красный Октябрь</p>
                <p className="complex-map-text">24 минуты, 6 км</p>
              </div>
              <div className="complex-map-item">
                <p className="complex-map-title">World className</p>
                <p className="complex-map-text">2 минуты, 300 м</p>
              </div>
              <div className="complex-map-last-item">
                <p className="complex-map-title">Третьяковская галерея</p>
                <p className="complex-map-text">14 минуты, 4 км</p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  </div>
);
