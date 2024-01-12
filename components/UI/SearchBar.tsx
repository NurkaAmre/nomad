'use client'

import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery !== '') {
      router.push(`/search?s=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <div className="flex rounded-full desktop-content search-box px-2 items-center bg-slate-50">
        <FiSearch className="text-gray-600 text-lg cursor-pointer" />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search place"
            className="rounded-full py-2 text-gray-800 bg-slate-50 px-2 outline-none border-0 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
 
export default SearchBar;