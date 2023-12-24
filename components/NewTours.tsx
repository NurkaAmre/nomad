"use client";
import { url } from "inspector";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
      index === currentSlide ? "border-2 border-sky-500 opacity-50" : "";

    return (
      <li
        key={tour.id}
        className={`mr-2 w-[80px] h-[60px] md:w-[140px] md:h-[120px] shadow border border-black/50 rounded-md overflow-hidden ${activeClass}`}
        onClick={() => handleCurrentSlide(index)}
      >
        <Image
          className="w-full h-full"
          src={tour.image}
          alt={tour.title}
          width={150}
          height={150}
        />
      </li>
    );
  });

  useEffect(() => {
    const st = setInterval(() => {
      setCurrentSlide((prev) => (prev === tours.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(st);
  }, [currentSlide]);

  return (
    <div className="relative w-full">
      <div
        className="w-full md:h-[100vh]"
        style={{
          backgroundImage: `url(${tours[currentSlide].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black/40 w-full min-h-[25rem] h-[100%] p-10">
          <h4 className="text-white text-xl md:text-2xl">
            {tours[currentSlide].author}
          </h4>
          <h2 className="text-white text-[4rem]">
            {tours[currentSlide].title}
            <br />
          </h2>
          <h3 className="text-3xl md:text-6xl text-[#f1683a]">
            {tours[currentSlide].topic}
          </h3>
          <p className="mt-4">{tours[currentSlide].description}</p>
          <div className="mt-4 flex gap-4">
            <button className="btn p-2">Read More</button>
            <button className="text-black bg-white p-2">Book Now</button>
          </div>
          <div className="arrows static">
            <button onClick={nextSlide}>&lt;</button>
            <button onClick={prevSlide}>&gt;</button>
          </div>
        </div>
      </div>

      <ul className="list-none flex flex-row justify-center md:justify-end static md:absolute w-full md:w-[80%] md:bottom-0 md:right-0 my-4 gap-2 p-4">
        {toursIcon}
      </ul>
    </div>
  );
};

export default Tours;
