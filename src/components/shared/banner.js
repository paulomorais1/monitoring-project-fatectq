import React from 'react';
import banner from '../upload/banner/banner.jpg';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    height: '300px', // Ajuste conforme necessário
  };

  return (
    <div id="bannerInterno" className="mb-4" style={bannerStyle}></div>
  );
};

export default Banner;
