import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

  const Contact = () => {

    const links = [
        {
            id: 1,
            child: (
                <> <FaLinkedin size={30} /> </>
            ),
            href: "https://Linkedin.com",
        },
        {
            id: 2,
            child: (
                <> <FaGithub size={30} /> </>
            ),
            href: "https://github.com/Piyush6678",
        },
        {
            id: 3,
            child: (
                <> <HiOutlineMail size={30} /> </>
            ),
            href: "mailto:aggarwalpiyush6678@gmail.com",
        },
        {
            id: 4,
            child: (
                <> <BsFillPersonLinesFill size={30} /> </>
            ),
            href: "/resume.pdf",
            download: true,
        },
    ]


  return (
    <div  className='w-full h-screen bg-gradient-to-b to-gray-800 from-black p-4 text-white  ' name="contact" >

        <div className='flex mx-auto h-full flex-col p-4 justify-center max-w-screen-lg ' >
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 ' >Contact</p>
                <p className='py-6' > Submit the form below to get in touch with me   </p>
            </div>

            <div className='flex justify-center items-center ' >
                <form action={import.meta.env.VITE_formLink} method="POST" className='flex flex-col w-full md:w-1/2 ' >
            <input type="text" className=' text-white focus:outline-none p-2 bg-transparent  border-2 rounded-md' name="name" placeholder='Enter Your Name' />
            <input type="text" className=' text-white focus:outline-none p-2 bg-transparent border-2 rounded-md my-4 ' name="email" placeholder='Enter Your Name' />
    <textarea placeholder="Enter Your message" name="message" rows="10"  className=" border-2 rounded-md text-white focus:outline-none p-2 bg-transparent" ></textarea>

    <button  className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300' >Lets talk</button>

                </form>
            </div>

            <div className='flex lg:hidden justify-center gap-8 mt-6'>
                {links.map(({ id, child, href, download }) => (
                    <a key={id} href={href} download={download} target='_blank' rel="noreferrer" className='text-gray-400 hover:text-white hover:scale-110 duration-200'>
                        {child}
                    </a>
                ))}
            </div>

        </div>
      
    </div>
  )
}


export default Contact