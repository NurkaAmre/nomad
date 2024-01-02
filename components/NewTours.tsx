"use client";
import Link from 'next/link';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import './Carousel.css';

type TourItemType = {
  id: number;
  image: string;
  author: string;
  title: string;
  topic: string;
  description: string;
};

type PropTypes = {
  tours: TourItemType[];
};

const Tours = ({ tours }: PropTypes) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCurrentSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === tours.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? tours.length - 1 : prevSlide - 1
    );
  };

  const toursIcon = tours?.map((tour: TourItemType, index: number) => {
    const activeClass =
      index === currentSlide ? "" : "opacity-85 backdrop-blur-lg";

   return (
      <li
        key={tour.id}
        className={`w-[80px] mt-2 md:mb-2 static h-[100px] md:w-[180px] md:h-[200px] shadow-3xl rounded-md overflow-hidden ${activeClass}`}
        onClick={() => handleCurrentSlide(index)}
      >
        <Image
          className="w-full h-full object-cover rounded-xl"
          src={tour.image}
          alt={tour.title}
          width={150}
          height={150}
        />
      </li>
    );
  });

  const toursPerPage = 4;
  const toursForMobile = toursIcon.slice(0, toursPerPage)
  
  useEffect(() => {
    const st = setInterval(() => {
      setCurrentSlide((prev) => (prev === tours.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(st);
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="arrows md:hidden lg:hidden">
        <button onClick={nextSlide} className="left-0 md:hidden lg:hidden ">&lt;</button>
        <button onClick={prevSlide} className="right-0 md:hidden lg:hidden">&gt;</button>
      </div>
      <div
        className="md:h-[100vh] relative"
        style={{
          backgroundImage: `url(${tours[currentSlide].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
         
        <div className="md:mx-[10rem] bg-black opacity-50 min-h-[25rem] h-[100%] p-10">
          <h4 className="text-white font-bold tracking-[10px] md:mt-[1rem] md:text-2xl text-base text-animation">
            {tours[currentSlide].author}
          </h4>
          <h2 className="text-white leading-[1.3em] text-[2em] md:text-[5em] font-bold text-animation">
            {tours[currentSlide].title}
            <br />
          </h2>
          <h3 className="text-[#f1683a] leading-[1.3em] md:text-[5em] text-[4em] font-bold text-animation">
            {tours[currentSlide].topic}
          </h3>
          <p className="mt-4 text-animation">{tours[currentSlide].description}</p>
          <div className="mt-4 flex gap-4 text-animation">
            <Link href={`/tour/${tours[currentSlide].id}`} className="bg-[#4a81c4] text-white px-4 py-2 font-abhaya font-extrabold hover:bg-[#eee] hover:text-[#212125]">Read More</Link>
            <Link href='/booking' className="text-black px-4 py-2 font-abhaya font-extrabold bg-[#eee] hover:bg-[#4a81c4] hover:text-[#eee]">Book Now</Link>
          </div>
        </div>
      </div>

      <ul className="list-none  flex flex-row justify-center md:justify-end absolute md:absolute md:w-[85%] md:bottom-0 md:right-4 gap-2 px-4 bottom-[-2]">
        {window.innerWidth > 767 ? toursIcon : toursForMobile}
      </ul>
    </div>
  );
};

export default Tours;
