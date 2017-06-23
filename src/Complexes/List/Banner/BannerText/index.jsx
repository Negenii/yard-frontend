import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
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
  );
};
