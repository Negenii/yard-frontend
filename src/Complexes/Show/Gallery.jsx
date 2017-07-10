// @flow
import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

import type { ImagesType } from '../types';
import { getImageUrl } from '../../utils';
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


const AllPhotosButton = styled.button`
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  border: none;
  border-radius: 2px;
  background-color: #00779a;
  color: #fff;
  font-family: 'Fira Sans';
  line-height: 1;
  font-size: 10px;
  font-weight: 300;
  cursor: pointer;
`;

type Props = {
  images: ImagesType,
};

export default (props: Props) =>
  (<div>
    <Gallery>
      <ImagesWrapper>
        {props.images.map(image => <Image src={getImageUrl(image.id)} alt="Slider image" />)}
      </ImagesWrapper>
      <Grid>
        <ButtonWrapper>
          <AllPhotosButton type="button" name="button" images={props.images} />
        </ButtonWrapper>
      </Grid>
    </Gallery>
  </div>);
