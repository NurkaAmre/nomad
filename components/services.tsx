import React from 'react';
import { FaUtensils, FaPlane, FaBus, FaHotel } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="" id='services'>
      <div className="flex flex-col text-white justify-center items-center">
        <h2 className="text-center mb-3 text-4xl md:text-5xl font-abhaya">The Perfect Travel</h2>
        <hr className="w-[180px] md:w-[720px] h-px mx-auto mt-2 md:mb-2 bg-gray-500 border-0 rounded dark:bg-gray-700" />
        <p className="mx-6 my-4 text-xl font-aloe md:text-lg">
          We cover all expenses from picking the perfect hotel to flights and destinations.
        </p>
      </div>
      <ul className="bg-white grid gap-4 md:grid-cols-2 py-10 md:px-20 px-8 md:gap-x-14 md:gap-y-8">
        <li className="shadow-lg">
          <div className="flex justify-evenly text-white py-2 bg-[#1B1D33]">
            <p className="font-abril">Tour Guide</p>
            <FaPlane className="text-2xl" />
          </div>
          <p className="px-8 py-4 text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit
            unde tempore quasi? Dignissimos?
          </p>
        </li>
        <li className="shadow-lg">
          <div className="flex justify-evenly text-white py-2 bg-[#1B1D33]">
            <p className="font-abril">Hotel</p>
            <FaHotel className="text-2xl" />
          </div>
          <p className="px-8 py-4 text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit
            unde tempore quasi? Dignissimos?
          </p>
        </li>
        <li className="shadow-lg">
          <div className="flex justify-evenly text-white py-2 bg-[#1B1D33]">
            <p className="font-abril">Transport</p>
            <FaBus className="text-2xl" />
          </div>
          <p className="px-8 py-4 text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit
            unde tempore quasi? Dignissimos?
          </p>
        </li>
        <li className="shadow-lg">
          <div className="flex justify-evenly text-white font-abril py-2 bg-[#1B1D33]">
            <p className="font-abril">Meal</p>
            <FaUtensils className="text-2xl" />
          </div>
          <p className="md:px-8 py-4 text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis magnam ut ea error perspiciatis magni velit
            unde tempore quasi? Dignissimos?
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Services;
