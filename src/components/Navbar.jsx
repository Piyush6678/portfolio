import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
const [nav,setnav]=useState(false)

const links=[
    {
    id:1,
    link:"home",
},
    {
    id:2,
    link:"about",
},
    {
    id:3,
    link:"projects",
},
{
    id:4,
    link:"experience",
},
    {
    id:5,
    link:"contact",
},
]

useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setnav(false);
        }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <div className='flex justify-between h-20 text-white px-4 fixed bg-black items-center w-full z-50' >
    <div>
        <h1 className='text-5xl ml-2 font-signature' >Piyush</h1>
    </div>
    <ul className='hidden md:flex gap-5 mr-2 ' >

{links.map((link)=>(
    <li  key={link.id}  className='cursor-pointer  capitalize  font-medium text-gray-500  hover:scale-105 duration-200   '> 
      <Link to={link.link}  smooth duration={500}  >{link.link}</Link>
    </li>
  ))
}
    </ul>
      <div  onClick={()=>{setnav(!nav)}} className='cursor-pointer pr-4 z-50 text-gray-500 md:hidden' >
        {(nav)? <FaTimes size={30} />:<FaBars size={30}  />}
        
      </div>

    {nav && <ul  className='flex flex-col items-center justify-center fixed left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-40'  >

{links.map((link)=>(
    <li  key={link.id} className='cursor-pointer capitalize px-4 py-6 text-4xl hover:scale-105 ' ><Link onClick={()=>setnav(!nav)} to={link.link}  smooth duration={500}  >{link.link}</Link></li>
  ))
}

    <div className='flex gap-8 mt-10'>
        <a href="https://Linkedin.com" target='_blank' rel="noreferrer" className='text-gray-400 hover:text-white hover:scale-110 duration-200'><FaLinkedin size={30} /></a>
        <a href="https://github.com/Piyush6678" target='_blank' rel="noreferrer" className='text-gray-400 hover:text-white hover:scale-110 duration-200'><FaGithub size={30} /></a>
        <a href="mailto:aggarwalpiyush6678@gmail.com" className='text-gray-400 hover:text-white hover:scale-110 duration-200'><HiOutlineMail size={30} /></a>
        <a href="/resume.pdf" download={true} className='text-gray-400 hover:text-white hover:scale-110 duration-200'><BsFillPersonLinesFill size={30} /></a>
    </div>

    </ul>
}



    </div>
  )
}

export default Navbar 
