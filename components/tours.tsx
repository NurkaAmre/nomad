import React, { useState, useEffect } from 'react';
import { client } from "@/sanity/lib/client";
import Image from 'next/image';
import './Carousel.css';
import { AiOutlinePicLeft, AiOutlinePicRight } from 'react-icons/ai';

interface CustomImage {
  asset: {
    url: string;
  };
}

interface Tour {
  _id: string;
  title: string;
  description: string;
  image: CustomImage;
  duration: string;
  location: string;
  price: number;
}

const Tours: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const [tours, setTours] = useState<Tour[]>([]);

  const fetchTours = async () => {
    try {
      const tourData: Tour[] = await client.fetch('*[_type == "tour"]{ _id, title, description, "image": image.asset->, duration, location, price }');
      setTours(tourData);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  useEffect(() => {
    if (tours.length > 0) {
      setBackgroundImage(tours[currentSlide]?.image.asset.url || '');
    }
  }, [currentSlide, tours]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === tours.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? tours.length - 1 : prevSlide - 1));
  };

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
          {tours.map((tour, index) => (
            <div key={tour._id} className={`item ${index === currentSlide ? 'active' : ''}`}>
              <Image src={tour.image.asset.url} className="dark-overlay img bg-black opacity-90" alt={`Slide ${index}`} />
              <div className='content'>
                <h3 className='author'>{tour.location}</h3>
                <h1 className='title'>{tour.title}</h1>
                <h2 className='topic'>{tour.duration}</h2>
                <div className='des'>{tour.description}</div>
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
          {tours.map((tour, index) => (
            <div key={tour._id} className={`item ${index === currentSlide ? 'active' : ''}`}>
              <Image src={tour.image.asset.url} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        {/* Arrows */}
        <div className="arrows">
          <button onClick={handlePrevClick}><AiOutlinePicLeft /></button>
          <button onClick={handleNextClick}><AiOutlinePicRight /></button>
        </div>
        {/* Time running */}
        <div className="time">{/* Display time if required */}</div>
      </div>
    </section>
  );
};

export default Tours;