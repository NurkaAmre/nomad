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
      index === currentSlide ? "" : "opacity-85 backdrop-blur-lg";

    return (
      <li
        key={tour.id}
        className={`mr-2 w-[90px] h-[100px] md:w-[180px] md:h-[250px] shadow-3xl rounded-md overflow-hidden ${activeClass}`}
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

  useEffect(() => {
    const st = setInterval(() => {
      setCurrentSlide((prev) => (prev === tours.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(st);
  }, [currentSlide]);

  return (
    <div className="relative w-full">
      <div
        className=" md:h-[100vh] "
        style={{
          backgroundImage: `url(${tours[currentSlide].image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" md:mx-[10rem] bg-black opacity-50  min-h-[25rem] h-[100%] p-10">
          <h4 className="text-white font-bold tracking-[10px] md:mt-[5rem] md:text-2xl text-base">
            {tours[currentSlide].author}
          </h4>
          <h2 className="text-white leading-[1.3em] text-[2em] md:text-[5em] font-bold ">
            {tours[currentSlide].title}
            <br />
          </h2>
          <h3 className="text-[#f1683a] leading-[1.3em] md:text-[5em] text-[4em] font-bold ">
            {tours[currentSlide].topic}
          </h3>
          <p className="mt-4">{tours[currentSlide].description}</p>
          <div className="mt-4 flex gap-4">
            <button className="bg-[#4a81c4] text-white px-4 py-2 font-abhaya font-extrabold hover:bg-[#eee] hover:text-[#212125]">Read More</button>
            <button className="text-black px-4 py-2 font-abhaya font-extrabold bg-[#eee] hover:bg-[#4a81c4] hover:text-[#eee]">Book Now</button>
          </div>
          <div className="arrows static">
            <button onClick={nextSlide}>&lt;</button>
            <button onClick={prevSlide}>&gt;</button>
          </div>
        </div>
      </div>

      <ul className="list-none flex flex-row justify-center md:justify-end static md:absolute w-full md:w-[90%] md:bottom-0 md:right-10 gap-2 p-4">
        {toursIcon}
      </ul>
    </div>
  );
};

export default Tours;
