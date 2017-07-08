import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import { getImageUrl } from '../../../utils';
import AllPhotosButton from './AllPhotosButton';

const Gallery = styled.section``;
const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
`;

const Image = styled.img`
  height: 400px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  margin-top: -2.625rem;
`;

export default props =>
  (<div>
    <Gallery>
      <ImagesWrapper>
        {props.images.map(image => <Image src={getImageUrl(image.id)} alt="Slider image" />)}
      </ImagesWrapper>
      <Grid>
        <ButtonWrapper>
          <AllPhotosButton images={props.images} />
        </ButtonWrapper>
      </Grid>
    </Gallery>
  </div>);
