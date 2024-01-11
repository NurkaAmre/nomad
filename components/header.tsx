'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className='bg-[#131C27] text-white flex flex-col md:flex-row justify-between px-4 py-4 md:py-4 w-full fixed z-20'>
      <div className='flex justify-between'>
        <Link href='/'> <h1 className='font-poller tracking-wider font-semibold text-3xl text-[#797DA5] md:px-4 md:text-4xl'>Nomads.</h1></Link>
        <div className='md:hidden text-3xl'>
          <button onClick={toggleMenu} className='text-white bg-transparent'>
           <AiOutlineMenu />
          </button>
        </div>
      </div>
      <ul
        className={`${showMenu ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row tracking-wider md:gap-10 md:text-xl text-xl md:mt-2`}
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
      <div className='flex mt-2 md:mt-0 rounded-full px-1 mx-6 justify-center items-center w-4/3 md:w-1/6 bg-slate-50'>
        <AiOutlineSearch className='text-gray-700 text-3xl' />
        <input
          type='text'
          placeholder='Search'
          className='font-aloe text-xl rounded-full py-1 bg-slate-50 px-1 outline-none border-0 w-full text-gray-900'
        />
      </div>
    </header>
  );
};

export default Header;