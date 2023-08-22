import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import  {BsFillPersonLinesFill} from 'react-icons/bs'

function SocialLink() {

    const links = [
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            
            href:"https://github.com/kaju111",
           
        },
        {
            id:3,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:saikiakaju275@gmail.com',
           
        },
        {
            id:1,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            style: 'rounded-br-md'
        },
        
    ]


  return (
    <div className='flex-col top-[35%] flex left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, dowload})=>(
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 font-normal ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800' + " " + style}>
                <a href={href} 
                className='flex justify-between items-center w-full text-[#5A96E3]'
                download={dowload}
                target='_blank'
                >
                {child}
                </a>
            </li>

            ))

            }

        </ul>
    </div>
  )
}

export default SocialLink
