import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

const Gallery = styled.section``;
const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: scroll;
`;

const Image = styled.img``;

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

export default props =>
  (<div>
    <Gallery>
      <ImagesWrapper>
        <Image src="/images/bitmap-1.png" alt="" />
        <Image src="/images/bitmap-2.png" alt="" />
        <Image src="/images/bitmap-3.png" alt="" />
        <Image src="/images/bitmap-4.png" alt="" />
        <Image src="/images/bitmap-5.png" alt="" />
      </ImagesWrapper>
      <Grid>
        <ButtonWrapper>
          <AllPhotosButton type="button" name="button">
            {props.imagesCount} фотографии
          </AllPhotosButton>
        </ButtonWrapper>
      </Grid>
    </Gallery>
  </div>);
