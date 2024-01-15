'use client';
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './Todo.module.css'
import { SiYourtraveldottv } from "react-icons/si";

interface Place {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
}

type PropTypes = {
  places: Place[]
  baseUrl: string
}

const Todo = ({places, baseUrl}: PropTypes) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [options, setOptions] = useState<Place[]>(places);
  
  
  useEffect(() => {
    const defaultExpandedIndex = 0;
    setExpandedIndex(defaultExpandedIndex);
  }, []);

  const fetchDataByCategory = async (category: string) => {
    try {
      const res = await fetch(`${baseUrl}/api/todo/${category}`)
      const result = await res.json()
      setOptions(result.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setOptions([]);
    }
  };

  const handleCategoryClick = (category: string) => {
    fetchDataByCategory(category);
  };

  // useEffect(() => {
  //   fetchDataByCategory('festival');
  // }, []);
  
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
        <ul className='flex flex-wrap justify-center items-center my-4 relative'>
           <li>
            <button
              className={classes.bttn}
              onClick={() => handleCategoryClick('festival')}>
              Festival
            </button>
          </li>
           <li>
            <button
              className={classes.bttn}
              onClick={() => handleCategoryClick('artculture')}>
              Art & Culture
            </button>
          </li>
           <li>
            <button
              className={classes.bttn}
              onClick={() => handleCategoryClick('foodsdrink')}>
              Foods & Drink
            </button>
          </li>
          <li>
            <button
              className={classes.bttn}
              onClick={() => handleCategoryClick('adventure')}>
              Adventure
            </button>
          </li>
          <li>
            <button
              className={classes.bttn}
              onClick={() => handleCategoryClick('nature')}>
              Nature
            </button>
          </li>
          <li>
             <button
              className={classes.bttn}
              onClick={() => handleCategoryClick('monastery')}>
              Monastery
            </button>
          </li>
        </ul>
        <div className="flex md:flex-row md:flex-wrap md:gap-4 gap-1 justify-center flex-col items-center">
          {options.map((option, index) => (
            <Link
              href={`/todo/${option.id}`}
              key={index}
              className={`option relative overflow-hidden  w-[370px] md:h-[500px] rounded-md cursor-pointer transition duration-500 ease-in-out ${
                expandedIndex === index ? 'md:w-[500px] h-[400px]' : 'md:w-24 h-32'
              }`}
              onMouseEnter={() => handleHover(index)}
              onClick={handleClick}
            >
              <div className="image-container relative w-full h-full">
                 {option.image && (
                  <Image src={option.image} alt={`Option ${index + 1}`} layout="fill" objectFit="cover"/>
                )}
              </div>
              <div className={`label absolute top-4 left-4 ${expandedIndex === index ? '' : 'hidden'}`}>
                <div className="icon flex justify-center w-10 h-10 rounded-full bg-black text-defaultBackground">
                  <SiYourtraveldottv className='text-2xl text-[#7c9de5]'/>
                </div>
                <div className="info flex flex-col justify-center ml-2 whitespace-pre" style={{ color: 'white', textShadow: '1px 1px 2px black' }}>
                   <div className="main font-bold text-lg">{option.title}</div>
                  {/* <div className="sub px-2">{option.description}</div> */}
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
