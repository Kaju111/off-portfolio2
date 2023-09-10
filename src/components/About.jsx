import React from 'react'
import Footer from './Footer'
import {motion} from "framer-motion"

const upOptions = {
  initial:{
    y:"-100%",
    opacity: 0
  },
  whileInView:{
    y:0,
    opacity: 1
  },
  Transition:{
    delay: 0.3,
    easeIn : "easeIn"
  }
}


const dwnnOptions = {
  initial:{
    y:"100%",
    opacity: 0
  },
  whileInView:{
    y:0,
    opacity: 1
  },
  Transition:{
    delay: 0.3,
    easeIn : "easeIn"
  }
}

const aboutOptions = {
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


function About() {
  return (
    <div className='h-auto bg-gradient-to-t from-black to-gray-900 ' id='about'>

          <motion.div {...aboutOptions} className='text-[#5A96E3] sm:text-6xl sm:border-b-2 mr-40 border-b-2 m-auto border-[#5A96E3] text-4xl font-bold font-primary ml-10 sm:ml-72 sm:mr-[750px] '>About Me.</motion.div>
        <div className='text-[#5A96E3] font-normal ml-10 sm:ml-72 sm:mr-60 mr-8  mt-20 text-xl sm:text-3xl'>
          <motion.h1 {...upOptions}>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</motion.h1>
          <motion.h1 {...dwnnOptions} className='mt-12 mb-[80px] sm:mb-[230px]'>
          I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.
          </motion.h1>
        </div>

        <Footer/>
    </div>
  )
}

export default About
