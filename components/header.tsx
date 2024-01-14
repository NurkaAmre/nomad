'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import SearchBar from './UI/SearchBar';
import { motion, AnimatePresence, easeInOut } from 'framer-motion'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className='bg-[#131C27] text-white flex flex-col md:flex-row justify-between px-4 py-4 md:py-4 w-full fixed z-20 transition-all duration-500'>
      <div className='flex justify-between'>
        <Link href='/'> <h1 className='font-poller tracking-wider font-semibold text-3xl text-[#797DA5] md:px-4 md:text-4xl'>Nomads.</h1></Link>
        <div className='md:hidden text-3xl'>
          <button onClick={toggleMenu} className='text-white bg-transparent'>
           <AiOutlineMenu />
          </button>
        </div>
      </div>
      <ul
        className={'hidden md:flex flex-col md:flex-row tracking-wider md:gap-10 md:text-xl text-xl md:mt-2'}
      >
        <li>
          <Link href={'#'} className='py-2 px-4 hover:bg-[#6179ad] hover:rounded-full'>Destinations</Link>
        </li>
        <li>
          <Link href={'#'} className='py-2 px-4 hover:bg-[#6179ad] hover:rounded-full'>Things To Do</Link>
        </li>
        <li>
          <Link href={'#'} className='py-2 px-4 hover:bg-[#6179ad] hover:rounded-full'>Tours</Link>
        </li>
        <li>
          <Link href={'#'} className='py-2 px-4 hover:bg-[#6179ad] hover:rounded-full'>Services</Link>
        </li>
      </ul>
      <AnimatePresence>
        {showMenu && (
          <motion.ul
          initial={{opacity: 0, y: -100, scale: 0}}
          animate={{opacity: 1, y: 0, scale: 1}}
          exit={{opacity: 0, y: -100, scale: 0}}
          transition={{
            duration: 0.5,
            ease: easeInOut
          }}
          className={`flex md:hidden flex-col md:flex-row tracking-wider md:gap-10 md:text-xl text-xl md:mt-2`}
        >
          <li>
            <Link href={'#'} className='py-2 px-4 hover:bg-[#6179ad] hover:rounded-full'>Destinations</Link>
          </li>
          <li>
            <Link href={'#'} className='py-2 px-4 hover:bg-[#6179ad] hover:rounded-full'>Things To Do</Link>
          </li>
          <li>
            <Link href={'#'} className='py-2 px-4 hover:bg-[#6179ad] hover:rounded-full'>Tours</Link>
          </li>
          <li>
            <Link href={'#'} className='py-2 px-4 hover:bg-[#6179ad] hover:rounded-full'>Services</Link>
          </li>
        </motion.ul>
        )}
      </AnimatePresence>
      <SearchBar />
    </header>
  );
};

export default Header;