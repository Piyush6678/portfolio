import React from 'react'

const About = () => {
  return (
    <div className=' bg-gradient-to-b to-black from-gray-800 w-full h-screen text-white  ' name="about"   >
      
<div  className='max-w-screen p-4 mx-auto flex flex-col justify-center items-center w-full h-full' >
    <div className='pb-8'>
        <p className='text-4xl font-bold border-b-4 border-gray-500 inline '  >About Me</p>
        <p className='text-xl mt-20  ' >I am a Software Developer currently pursuing my <strong>B.Tech in CSE (Data Science)</strong> at <strong>MAIT</strong> (Class of 2028). 
              I specialize in building full-stack applications using the <strong>MERN Stack</strong> and have a deep passion for solving algorithmic challenges with <strong>Data Structures & Algorithms</strong>.  </p>
        <br />
        <p className='text-xl'>My passion lies in solving complex problems and building intuitive web applications. I have a strong command of Data Structures and Algorithms, which allows me to write efficient and optimized code. On the development side, I specialize in the MERN Stack (MongoDB, Express.js, React, Node.js), creating full-stack solutions that are both functional and scalable. I am always looking for opportunities to learn new technologies and apply my skills to real-world challenges.</p>
    </div>
</div>

    </div>
  )
}

export default About
