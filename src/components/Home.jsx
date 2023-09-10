import React from 'react'
import profile from '../assets/photo3.jpeg'
import About from './About'
import {BsArrowUpRight} from 'react-icons/bs'
import { motion } from "framer-motion"


const headingOptions = {
    
  initial:{
    y:"-100%",
    opacity: 0
  },
  whileInView:{
    y:0,
    opacity: 1
  },
  Transition:{
    delay: 0.8,
  }
}
const imgOptions = {
  initial:{
    scale:0.1,
    opacity: 0
  },
  whileInView:{
    scale: 1,
    opacity: 1
  },
  Transition:{
    delay: 0.3,
  }
}


function Home() {


  return (

  <>
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-900'>

        <div className='max-w-screen-lg mx-auto  flex flex-col sm:pt-60 pt-16 items-center justify-center md:flex-row'>
            <motion.div {...headingOptions} className='max-w-screen-lg mx-auto flex flex-col sm:ml-0 ml-10 justify-center h-full'>
         
                <h2 className=' text-5xl sm:text-[85px] m-auto font-bold text-[#5A96E3] font-primary '>
                Hello, I'm Kaju
                </h2>
         
                <p className='text-[#5A96E3]  sm:mt-6 font-normal  sm:ml-0 ml-7 py-4 max-w-md sm:text-[38px] text-2xl mt-4'>
                   <div>Front end developer</div>
                <div className='sm:flex flex mt-10'>
                    <button className='text-[#213363] ml-5 mt-5 sm:mt-0 w-fit px-4  mb-12 py-2 my-1 items-center text-2xl font-signature rounded-md bg-gradient-to-r from-[#A1C2F1]   to-[#5A96E3] hover:bg-cyan-600 hover:text-[#080202] hover:scale-110 hover:duration-1000 '>
                    Contact 
                        
                    </button>
                    <a href='/work' className='font-signature flex sm:flex sm:flex-row text-3xl ml-6 sm:ml-14 sm:mt-2  mt-7'>
                        Work <BsArrowUpRight/>
                    </a>
                </div>
                </p>
            </motion.div>

            <motion.div {...imgOptions} className='border-2 border-[#5A96E3] p-2'>
              <img src={profile} alt="my profile" className='rounded-2xl  sm:h-96 sm:w-[390px] sm:mx-auto h-70 w-[300px] '/>
            </motion.div>
        </div>
        </div>
        
      <div><About/></div>


    </>
   
  )
}

export default Home
