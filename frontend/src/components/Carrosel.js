import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ imageUrls }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {imageUrls.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Imagem ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
