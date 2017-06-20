import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Complex1 from './complex@3x.png';

export default () => {
  return (
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
  );
};
