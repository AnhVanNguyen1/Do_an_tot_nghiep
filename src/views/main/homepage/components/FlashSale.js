import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from 'mdbreact';
import Card from './Card';
import { MDBContainer } from 'mdb-react-ui-kit';

const FlashSale = () => {
  return (
    <section className="text-center my-5 ">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our bestsellers
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBCarousel
        activeItem={1}
        length={3}
        slide={true}
        showControls={true}
        showIndicators={true}
        multiItem
        interval={2500}
      >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBContainer>
                <MDBRow>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBContainer>
                <MDBRow>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBContainer>
                <MDBRow>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                  <MDBCol xl="3">
                    <Card />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </section>
  );
};

export default FlashSale;
