import React from 'react';
import { Carousel } from 'react-bootstrap';
import  './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/internationalpatientcare.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://pyxis.nymag.com/v1/imgs/998/e0b/5ec78f5ece52fbf71e8400abe790d16019-26-hospital-1.rsquare.w700.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.narayanahealth.org/sites/all/themes/nh_default_theme/images/resize-image/cancer-min.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;