'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { client } from "@/sanity/lib/client";
import SearchBar from './UI/SearchBar';

type SanityDocument = {
  _id: string;
  title: string;
  image: string; // Assuming it's a URL or some identifier
  category: string;
  description: string;
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

   const handleSearch = async () => {
    const response = await client.fetch(
      `*[_type == 'places' && title match $query]`,
      { query: searchQuery }
    );
    setSearchResults(response);
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
      <SearchBar />
    </header>
  );
};

export default Header;