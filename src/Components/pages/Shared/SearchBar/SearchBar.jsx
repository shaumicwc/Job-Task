import React, { useEffect, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useLocation } from 'react-router-dom';

const SearchBar = ({setSearchText}) => {
  const location = useLocation()
  return (
    <div className={`flex py-2 items-center bg-transparent border-2 ${ location.pathname === '/' || location.pathname.startsWith('/booking/') || location.pathname === '/about' ? '' : 'border-gray-800'} rounded w-full`}>
      <input onChange={(e) => setSearchText(e.target.value)} className={`w-full px-3 ${location.pathname === '/' || location.pathname.startsWith('/booking/') || location.pathname === '/about' ? 'text-white placeholder-white' : 'text-black placeholder-black'}  bg-transparent focus:outline-none `} type="text" placeholder="Search your destination" />
      <button className="pr-3">
        <MagnifyingGlassIcon className={`h-5 w-5 ${location.pathname === '/' || location.pathname.startsWith('/booking/') || location.pathname === '/about' ? 'text-white ' : 'text-black'} font-bold`} />
      </button>
    </div>
  );
};

export default SearchBar;