import React from 'react'
import data from "../assets/data.json"
import {BsArrowUpRight} from 'react-icons/bs'

const Work = () => {
  return (
    <>
       <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900' >
          <h2 className='text-[#5A96E3] sm:text-5xl pt-10 border-[#5A96E3] text-3xl font-bold font-primary ml-5 sm:ml-44 sm:pt-28 '>Some Things I've build</h2>
          <div className=''>
          {data.projects.map((i) => (
              <div key={i.title} className="sm:ml-[250px] ml-4 mr-11 mt-12 p-4 sm:mt-[100px] border-2 sm:mr-[700px] sm:p-9 rounded-xl border-[#5A96E3]">
                <aside>
                  <h3 className='text-[#5A96F9] font-signature font-bold sm:text-3xl text-xl'>{i.title}</h3>
                  <p className='text-[#5A96E3] font-signature font-bold sm:text-3xl sm:my-5 my-3 text-xl'>{i.description}</p>

                  <h1 className='flex text-sm font-bold text-[#5A96E3] font-signature'>
                  <p className='border-2 border-[#5A96E3] rounded-xl py-1 px-1 sm:py-1 sm:px-2 '>Vite+React.js</p>
                  <p className='border-2 border-[#5A96E3] rounded-xl py-1 px-1 mx-2 sm:mx-5 sm:py-1 sm:px-2'>Tailwind CSS</p>
                  <p className='border-2 border-[#5A96E3] rounded-xl py-1 px-1 sm:py-1 sm:px-2'>Redux Toolkit</p>
                  </h1>

                  <a target={"blank"} href={i.url} className=' text-[#5A96E3]'>
                    <h1 className='flex font-signature border-2 border-[#5A96E3] rounded-xl sm:py-1 pl-7 text-sm font-bold sm:text-2xl ml-[200px] sm:mr-9 sm:ml-[390px] mt-4 hover:scale-110 hover:duration-200 '>View <BsArrowUpRight className='font-bold'/></h1>
                  </a>
                </aside>
              </div>
            ))}
          </div>

       </div>
    </>
  )
}

export default Work