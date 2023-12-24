'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import gobi from '@/public/images/gobi.jpg';
import tavanbogd from '@/public/images/tavanbogd.jpg';
import winter from '@/public/images/winter.jpg';
import naadam from '@/public/images/naadam.jpg';
import './Carousel.css';
import { AiOutlinePicLeft, AiOutlinePicRight } from 'react-icons/ai';

const Tours = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');

  const slideData = [
    { image: winter, author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'TOUR', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' },
    { image: naadam, author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'TOUR', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' },
    { image: gobi, author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'TOUR', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' },
    { image: tavanbogd, author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'TOUR', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' },
  ];

  const thumbData = [
    { image: winter, author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'TOUR', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' },
    { image: naadam, author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'TOUR', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' },
    { image: gobi, author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'TOUR', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' },
    { image: tavanbogd, author: 'LUNDEV', title: 'DESIGN SLIDER', topic: 'TOUR', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...' },
  ];
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slideData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slideData.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    setBackgroundImage(slideData[currentSlide].image.src);
  }, [currentSlide, slideData]);

  const handlePrevClick = () => {
    prevSlide();
  };

  const handleNextClick = () => {
    nextSlide();
  };

  return (
    <section className="my-10">
      <h2 className="text-center mb-3 text-4xl md:text-5xl font-abhaya">Tour of Nomads.</h2>
      <div className="carousel my-6" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="list">
          {slideData.map((slide, index) => (
            <div key={index} className={`item ${index === currentSlide ? 'active' : ''}`}>
              <Image src={slide.image} className="dark-overlay img bg-black opacity-90" alt={`Slide ${index}`} />
              <div className='content'>
                <h3 className='author'>{slide.author}</h3>
                <h1 className='title'>{slide.title}</h1>
                <h2 className='topic'>{slide.topic}</h2>
                <div className='des'>{slide.description}</div>
                <div className='buttons'>
                  <button className='btn'>Read More</button>
                  <button className='btn2'>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Thumbnails */}
        <div className="thumbnail">
          {thumbData.map((slide, index) => (
            <div key={index} className={`item ${index === currentSlide ? 'active' : ''}`}>
              <Image src={slide.image} alt={`Slide ${index}`} />
              
            </div>
          ))}
        </div>
        {/* Arrows */}
        <div className="arrows">
          <button onClick={handlePrevClick}>&lt;</button>
          <button onClick={handleNextClick}>&gt;</button>
        </div>
        {/* Time running */}
        <div className="time">{/* Display time if required */}</div>
      </div>
    </section>
  );
};

export default Tours;
