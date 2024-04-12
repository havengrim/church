import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';
import Navbar from './Navbar';

const CarouselWithNavbar = () => {
  const images = [
    { source: Image1, alt: 'Image 1' },
    { source: Image2, alt: 'Image 2' },
    { source: Image3, alt: 'Image 3' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  

  return (
    <div className="w-100 overflow-hidden">
      <div className="relative h-full">
        <div className="absolute top-0 left-0 w-full  opacity-50 text-white z-10">
          {/* Transparent Navbar */}
          <Navbar className="text-white"/>
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.source} alt={image.alt} className="w-full filter grayscale-50" />
              
            </div>
          ))}

          

        </Slider>
        <div className="absolute top-24 left-0 w-full h-20  text-white z-10 flex items-center justify-center">
       
            </div>
      </div>
    </div>
  );
};

export default CarouselWithNavbar;
