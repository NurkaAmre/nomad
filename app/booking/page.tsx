'use client'
import React, { useState } from 'react';
import backgroundImage from '@/public/images/bg.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

   const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // Reset the input value if the checkbox is unchecked
    if (!event.target.checked) {
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const bgImageStyle = {
    backgroundImage: `url(${backgroundImage.src})`, // Use backgroundImage.src to get the image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maxHeight: '100vh', // Adjust height as needed
  };
  return (
    <div className="bg-cover bg-center h-screen" style={bgImageStyle}>
      <div className="container mx-auto py-12"> {/* Adjust the padding/margin as needed */}
        <form className='mt-10'>
          <div className="relative bg-gradient-to-t from-slate-800 to-transparent border border-slate-800 border-opacity-10 shadow-md flex flex-col transition duration-500 h-full">
            <div className="bg-gradient-to-b w-full to-transparent  shadow-md">
              <h1 className="text-center my-2 text-gray-400 text-3xl font-bold">Booking Form</h1>
            </div>
          <div className="-mx-3 md:flex my-6 px-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <input className="appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50 rounded py-3 px-4 mb-3 placeholder-gray-300 ::placeholder" type="text" placeholder="Full Name" />
            </div>
            <div className="md:w-1/2 px-3">
              <input className="appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50 rounded py-3 px-4 placeholder-gray-300 ::placeholder" type="text" placeholder="Nationality" />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6 px-6">
            <div className="md:w-full px-3">
              <input className="appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50 rounded py-3 px-4 mb-3 placeholder-gray-300 ::placeholder" type="email" placeholder="example@example.com" />
              </div>
              <div className="md:w-full px-3">
              <input className="appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50 rounded py-3 px-4 mb-3 placeholder-gray-300 ::placeholder" type="text" placeholder="Address" />
            </div>
            </div>
             <div className="-mx-3 md:flex mb-6 px-6">
            <div className="md:w-full px-3">
              <input className="appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50 rounded py-3 px-4 mb-3 placeholder-gray-300 ::placeholder" type="text" placeholder="Phone number with code" />
              </div>
              <div className="md:w-full px-3">
              <input className="appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50 rounded py-3 px-4 mb-3 placeholder-gray-300 ::placeholder" type="text" placeholder="Your height (horse/camel riders)" />
            </div>
            </div>

            <div className="-mx-3 md:flex md:justify-between mb-6 px-6">
            <div className=" px-3 md:flex md:flex-col">
              <label className='text-gray-200 mb-2'>
                  Do you have pre-existing medical condition? If yes, please give details
               </label>
              <textarea
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter additional information"
              className="appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50 rounded py-3 px-4 mb-3 placeholder-gray-300 ::placeholder"
              />
              </div>
               <div className=" px-3 md:flex md:flex-col">
              <label className='text-gray-200 mb-2'>
                  Do you have pre-existing medical condition? If yes, please give details
               </label>
              <textarea
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter additional information"
              className="appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50 rounded py-3 px-4 mb-3 placeholder-gray-300 ::placeholder"
              />
            </div>
          </div>
            
            <div className="mx-3 md:flex md:justify-evenly mb-6 pl-3 pr-9">
              <div className='select'>
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Please select your tour
                </label>
              <div className="relative">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        aria-placeholder="Select an Tour"
        className="appearance-none block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50 py-3 pl-4 pr-10"
      >
        <option value="option1" className='bg-slate-800  hover:bg-transparent'>Winter Tour</option>
        <option value="option2" className='bg-slate-800 hover:bg-transparent'>Nomads Tour</option>
        <option value="option3" className='bg-slate-800 hover:bg-transparent'>Eagle Festival Tour</option>
      </select>
      <span className="select-arrow absolute top-0 right-0 bg-slate-800 text-gray-50 px-3 py-3 pointer-events-none">
        &#9660;
      </span>
    </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">
                  Joining date in Ulaanbaatar
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="Select a date"
                  className="md:w-full px-2 appearance-none py-2 block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-gray-50" />
              </div>
            </div>

          <div className='my-4 '>
              <button className="block w-full bg-transparent border border-slate-800 border-opacity-10 focus:outline-none shadow-md text-white text-2xl hover:text-gray-400 font-bold py-2 px-4 rounded">
                Book Now
              </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Booking;
