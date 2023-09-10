import React from 'react'
import {BsArrowRight} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <div className='h-[120px] bg-black' >
          <a href="/work" className='text-[#5A96E3] font-normal flex border-2 border-[#5A96E3] w-[250px] sm:w-[290px] justify-center sm:ml-[300px] ml-[40px] text-lg rounded-lg sm:text-xl'>Check My Works <BsArrowRight className='text-3xl ml-2'/></a>
          <p className='border-b-2 border-[#5A96E3] sm:ml-[286px] ml-10 mr-10 mt-2 sm:mt-5 sm:mr-[210px]'></p>
          <h1 className='text-gray-700  font-normal sm:text-lg text-xs text-center hover:text-[#5A96E3] duration-300 select-none'>Build by Kaju Saikia.</h1>
        </div>
    </div>
  )
}

export default Footer
