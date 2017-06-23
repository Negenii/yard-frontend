import React from 'react';

export default (props) => (
  <section className="complex-heading">
    <div className="container">
      <div className="row between-xs">
        <div className="col-xs">
          <h1 className="complex-heading-title">{props.title}</h1>
          <p className="complex-heading-address">{props.address}</p>
        </div>
        <div className="add-to-favs">
          <button
            type="button"
            name="add-to-favs-button"
            className="add-to-favs-button">В избранное
          </button>
        </div>
      </div>
    </div>
  </section>
);
