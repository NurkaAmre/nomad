'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import art from '@/public/images/art.jpg';
import food from '@/public/images/food.jpg';
import festival from '@/public/images/festival.jpg';
import icefestival from '@/public/images/icefestival.jpg';
import yak from '@/public/images/yak.jpeg';
import camel from '@/public/images/camel.jpeg';
import arul from '@/public/images/arul.jpg';
import boorsog from '@/public/images/boorsog.webp';
import buuz from '@/public/images/buuz.webp';
import cheese from '@/public/images/cheese.jpg';


const options = [
  {
    image: art,
    mainText: 'Art & Culture',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: food,
    mainText: 'Food & Drink',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: festival,
    mainText: 'Festivals & Events',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: icefestival,
    mainText: 'Festivals & Events',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
   {
    image: yak,
    mainText: 'Festivals & Events',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: camel,
    mainText: 'Festivals & Events',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: arul,
    mainText: 'Festivals & Events',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: boorsog,
    mainText: 'Festivals & Events',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    image: buuz,
    mainText: 'Festivals & Events',
    subText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Todo = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // Set type to number or null

  const handleHover = (index: number) => {
    setExpandedIndex(index);
  };

  const handleClick = () => {
    if (expandedIndex !== null) {
      const nextIndex = (expandedIndex + 1) % options.length;
      setExpandedIndex(nextIndex);
    }
  };

  return (
    <div className='py-10'>
      <div className='flex flex-col text-white justify-center items-center'>
        <h2 className='text-center text-4xl md:text-5xl font-abhaya'>To Do Things</h2>
        <ul className='grid grid-cols-2 gap-4 my-4 mx-4 md:flex md:justify-between md:gap-[4rem] md:my-4'>
           <li>
            <button className='rounded-full border-2 bg-[#6491C9] md:text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Festival</button>
          </li>
           <li>
            <button className='rounded-full border-2 bg-[#6491C9] md:text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Art & Culture</button>
          </li>
           <li>
            <button className='rounded-full border-2 bg-[#6491C9] md:text-xl font-abhaya font-light px-4 md:px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Foods & Drink</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] md:text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Adventure</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] md:text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Nature</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] md:text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Family</button>
          </li>
        </ul>
        <div className="flex md:flex-row md:flex-wrap md:gap-4 gap-1 justify-center flex-col items-center">
          {options.map((option, index) => (
            <Link href='#'
              key={index}
              className={`option relative overflow-hidden  w-[370px] md:h-[500px] rounded-md cursor-pointer transition duration-500 ease-in-out ${
                expandedIndex === index ? 'md:w-[500px] h-[400px]' : 'md:w-32 h-32'
              }`}
              onMouseEnter={() => handleHover(index)}
            onClick={handleClick}
            >
              <div className="image-container">
                <Image src={option.image} alt={`Option ${index + 1}`} layout="fill" objectFit="cover"/>
              </div>
              <div className={`label absolute bottom-4 left-4 ${expandedIndex === index ? '' : 'hidden'}`}>
                <div className="icon flex items-center justify-center w-10 h-10 rounded-full bg-white text-defaultBackground">
                  <i></i>
                </div>
                <div className="info flex flex-col justify-center ml-2 text-white whitespace-pre">
                  <div className="main font-bold text-lg">{option.mainText}</div>
                  <div className="sub px-2">{option.subText}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
