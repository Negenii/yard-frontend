import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';


export default (props) => {
  return (
    <Router>
      <Row>
        <Col xs={12}>
          <Link to={`/Complex/${props.id}`} className="complexes-complex-card">
            <img src={props.imageUrl} className="complexes-complex-block-image" alt="complex" />
            <div className="complexes-complex-description">
              <p className="complexes-complex-description-address">SOUTH BEACH, SAN FRANCISCO</p>
              <h3 className="complexes-complex-description-title">The Harrison</h3>
              <p className="complexes-complex-description-info">Beautifully appointed residences perched atop Rincon Hill, The Harrison offers unparalleled Bay Bridge and city views within steps of San Francisco’s greatest restaurants, shops, and The Embarcadero. </p>
            </div>
          </Link>
        </Col>
      </Row>
    </Router>
  );
};
