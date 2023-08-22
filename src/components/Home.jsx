import React from 'react'
import profile from '../assets/photo1.jpeg'

function Home() {


  return (

  
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto  flex flex-col sm:pt-60 pt-16 items-center justify-center md:flex-row'>
            <div className='max-w-screen-lg mx-auto flex flex-col sm:ml-0 ml-10 justify-center h-full'>
                <h2 className=' text-5xl sm:text-8xl font-bold text-[#5A96E3] font-signature mr-9'>
                Hello, I'm Kaju
                </h2>
                <p className='text-[#5A96E3] sm:flex sm:mt-6  sm:ml-0 ml-7 flex-row py-4 max-w-md sm:text-4xl text-2xl'>
                    Front end developer

                <div>
                    <button className='text-[#213363] ml-24 mt-5 sm:mt-0 w-fit px-4 mb-7  py-2 my-1 items-center text-2xl font-signature sm:ml-10 rounded-md bg-gradient-to-r from-[#A1C2F1]   to-[#5A96E3] hover:bg-cyan-600 hover:text-[#080202] hover:scale-110 hover:duration-1000 '>
                        Portfolio
                        
                    </button>
                </div>
                </p>
            </div>
            <div className='border-2 border-[#5A96E3] p-2'>
              <img src={profile} alt="my profile" className='rounded-2xl  sm:h-96 sm:mx-auto h-80  '/>
            </div>
        </div>
    </div>
    // <div>kaju saikia</div>
  )
}

export default Home
