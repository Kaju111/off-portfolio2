import React from 'react'

function About() {
  return (
    <div className='h-screen bg-gradient-to-t from-black to-gray-900 ' id='about'>

          <div className='text-[#5A96E3] sm:text-6xl sm:border-b-2 mr-40 border-b-2 sm:mr-[989px] border-[#5A96E3] text-4xl font-bold font-primary ml-10 sm:ml-72 '>About Me.</div>
        <div className='text-[#5A96E3] font-normal ml-10 sm:ml-72 sm:mr-60 mr-8 mt-20 text-xl sm:text-3xl'>
          <h1>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</h1>
          <h1 className='mt-12'>
          I love learning new and better ways to create seamless user experiences with clean, efficient, and scalable code. At the end of the day, my primary goal is to create something beautiful with people that bring out the best in me.
          </h1>
        </div>
    </div>
  )
}

export default About
