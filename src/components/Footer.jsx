import React from 'react'
import {BsArrowRight} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <div className='h-auto bg-black' >
          <a href="/work" className='text-[#5A96E3] font-normal flex border-2 border-[#5A96E3] w-[250px] sm:w-[290px] justify-center sm:ml-[300px] ml-[40px] text-lg rounded-lg sm:text-xl'>Check My Works <BsArrowRight className='text-3xl ml-2'/></a>
          <p className='border-b-2 border-[#5A96E3] sm:ml-[286px] ml-10 mr-10 mt-2 sm:mt-5 sm:mr-[210px]'></p>
          <h1 className='text-[#5A96E3] font-normal sm:text-lg text-xs text-center'>Build without Patience by Kaju Saikia.</h1>
        </div>
    </div>
  )
}

export default Footer
