import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'

function NavBer() {
  const [nav, setNav] = useState(false);

  return (


    <div className="flex justify-between items-center w-full h-20  px-4 text-[#5A96E3] bg-black">
      <div>
        <h1 className="text-5xl font-signature sm:ml-28 ml-4">Kaju Saikia</h1>
      </div>

      <ul  className="hidden md:flex">
        <li  className="px-12 cursor-pointer flex font-signature  capitalize select-none text-xl text-[#5A96E3] ">
            <Link to={'/'} className="mr-28 hover:scale-105 duration-200 text-3xl">Home</Link>
            <HashLink to={'/#about'} className="mr-28 hover:scale-105 text-3xl duration-200">About</HashLink>
            <HashLink to={'/#portfolio'} className="mr-28 text-3xl hover:scale-105 duration-200">Portfolio</HashLink>
            <Link to={'/work'} className="mr-24 hover:scale-105 text-3xl duration-200">Work</Link>
        </li>
      </ul>
      

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30 } />}
      </div>

          {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-[#5A96E3]">
           <li  className="text-4xl flex  flex-wrap" onClick={() => setNav(!nav)}>
            <Link to={'/'} className="cursor-pointer ml-36 mb-20">Home</Link>
            <HashLink to={'/#about'} className="cursor-pointer ml-36 mb-20">About</HashLink>
            <HashLink to={'/#portfolio'} className="cursor-pointer ml-36 mb-20">Portfolio</HashLink>
            <Link to={'/work'} className="cursor-pointer ml-36 mb-20">Work</Link>
        </li>
      </ul>
          )}
    </div>


  );
}
export default NavBer;
