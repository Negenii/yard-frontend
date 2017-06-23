import React from 'react';
import { Grid } from 'react-flexbox-grid';

export default (props) => (
  <div>
  <section className="complex-gallery">
    <div className="complex-gallery-images-wrapper">
      <img src="/images/bitmap-1.png" className="complex-gallery-img" alt="" />
      <img src="/images/bitmap-2.png" className="complex-gallery-img" alt="" />
      <img src="/images/bitmap-3.png" className="complex-gallery-img" alt="" />
      <img src="/images/bitmap-4.png" className="complex-gallery-img" alt="" />
      <img src="/images/bitmap-5.png" className="complex-gallery-img" alt="" />
    </div>
    <Grid>
      <div className="complex-gallery-button-wrapper">
        <button type="button" name="button" className="complex-gallery-all-photos-btn">{props.imagesCount} фотографии</button>
      </div>
    </Grid>
  </section>
</div>
);
