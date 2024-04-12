import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';

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
    <div className="relative">
      {/* Transparent Navbar */}
      <div className="absolute top-0 left-0 w-full  bg-opacity-25 text-white z-10">
        <Navbar />
      </div>
      
      {/* Slider */}
      <Slider {...settings} className="overflow-hidden">
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.source} alt={image.alt} className="w-full grayscale-25 brightness-50" />
            
          </div>
        ))}
      </Slider>
      
      {/* Text Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full">
        <div className="container mx-auto px-4">
        <p className="text-lg md:text-5xl lg:text-8xl  lg:leading-[6.5rem]  leading-2 md:leading-[3rem] font-bold w-full font-montserrat drop-shadow-md">Christ the Living Hope <br />Community Church</p>

        </div>
      </div>
    </div>
  );
};

export default CarouselWithNavbar;