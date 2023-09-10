import React from 'react'
import shose from "../assets/shose.jpeg"
import mba from "../assets/mba.jpeg"
import {FiExternalLink} from "react-icons/fi"


// {
//   "projects": [
//       {   "id": 1,
//           "title": "NIKE STORE",
//           "description": "Full-responsive e-commerce platform.",
//           "url": "https://nike-store-saikiakaju275-gmailcom.vercel.app/",
//           "tech": ["| ReactJs+Vite |", "| Redux Toolkit |", "| Tailwind |"],
//           "class" : "img1"
//       },
//       {   "id": 2,
//           "title": "WEATHER APP",
//           "description": "A beautiful weather app...",
//           "url": "https://weather-app-sigma-ten-93.vercel.app/",
//           "tech": ["| ReactJs |", "|  Weather-Api |"]
          
//       },
//       {   "id": 2,
//           "title": "WEATHER APP",
//           "description": "A beautiful weather app...",
//           "url": "https://weather-app-sigma-ten-93.vercel.app/",
//           "tech": ["| ReactJs |", "|  Weather-Api |"],
//           "img" : "https://ibb.co/fM7Cs6Z"
          
//       }
//   ]
// }

const Work = () => {
  return (
    <div className='h-[1400px] w-full bg-gradient-to-b from-black via-black to-gray-900'>
      <div className='flex items-center  flex-wrap pt-20 justify-around'>
        <div className='flex flex-col '>
      <p className=' text-white font-normal text-2xl m-2'>NIKE STORE</p>
      <p className=' text-white font-normal text-2xl bg-gray-900 h-20 p-5'>Full-responsive e-commerce platform</p>
      <div className='flex flex-row'>
      <p className='text-white font-normal text-sm m-2 '> ReactJs+Vite | Redux-Toolkit | Tailwind </p>
      <a href="https://nike-store-saikiakaju275-gmailcom.vercel.app/"><FiExternalLink className='text-white m-2'/></a>
      </div>
      </div>
      <a href="https://nike-store-saikiakaju275-gmailcom.vercel.app/">
      <img src={shose} alt="" className= 'w-[300px] md:w-[600px]' />
      </a>
      </div>

      <div className='flex items-center  flex-wrap pt-20 justify-around'>
      
        <div className='flex flex-col '>
      <p className=' text-white font-normal text-2xl m-2'>MBA CHAIWALA</p>
      <p className=' text-white font-normal text-2xl bg-gray-900 h-20 p-5'>MBA Chaiwala Clone with Animation  </p>
      <div className='flex flex-row'>
      <p className='text-white font-normal text-sm m-2 '> ReactJs | SASS |  </p>
      <a href="https://mbachaiwala-psi.vercel.app/"><FiExternalLink className='text-white m-2'/></a>
      </div>
      </div>

      <a href="https://mbachaiwala-psi.vercel.app/">
    <img src={mba} alt="" className='w-[300px] md:w-[600px]' />
</a>

      </div>
    </div>
  )
}

export default Work
