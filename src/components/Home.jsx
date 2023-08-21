import React from 'react'
import profile from '../assets/photo1.jpeg'

function Home() {


  return (

    // <div className='sticky'>
      
    //     <div className='text-white'>Kaju saikia</div>
    // </div>
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>

        <div className='max-w-screen-lg mx-auto  flex flex-col sm:pt-60 pt-16 items-center justify-center md:flex-row'>
            <div className='max-w-screen-lg mx-auto flex flex-col sm:ml-0 ml-10 justify-center h-full'>
                <h2 className=' text-5xl sm:text-8xl font-bold text-[#5A96E3] font-signature mr-9'>
                Hello, I'm Kaju
                </h2>
                <p className='text-[#5A96E3] py-4 max-w-md sm:text-4xl text-2xl'>
                    Front end developer
                </p>

                <div>
                    <button >
                        Portfolio
                        
                    </button>
                </div>
            </div>
            <div className='border-2 border-[#5A96E3] p-2'>
              <img src={profile} alt="my profile" className='rounded-2xl sm:h-96 sm:mx-auto h-80  '/>
            </div>
        </div>
    </div>
    // <div>kaju saikia</div>
  )
}

export default Home
