/* eslint-disable react/jsx-no-undef */
// components/shared/banner.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../upload/banner/banner.jpg';

const Banner = () => {
  const carouselStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    height: '300px', // Ajuste conforme necessário
  };

  return (
    <div id="bannerInterno" className="carousel slide mb-4" data-bs-ride="carousel">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div className="carousel-item active" style={carouselStyle}></div>
        </Carousel.Item>
        {/* Adicione mais itens do carousel conforme necessário */}
      </Carousel>
    </div>
    
  );
};

export default Banner;
