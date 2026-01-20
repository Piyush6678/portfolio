import React from 'react';
import ProjectItem from './ProjectItem';
import lmsphoto from '../assets/lmsphoto.png';
import sketifyVideo from '../assets/sketify.mp4';
import sketify from '../assets/sketify.png';


// Portfolio Component
const Portfolio = () => {

    const projects = [
        {
            id: 1,
            title: "SketchSync – Real-Time Collaborative Canvas",
            tech: "Next.js,TypeScript, Tailwind, WebSockets",
            description: "Engineered a full-stack Excalidraw-style whiteboard application facilitating low-latency collaboration. Leveraged the HTML5 Canvas API for high-performance rendering of shapes and freehand strokes. Implemented a custom WebSocket server with Express.js to broadcast drawing events instantly to connected clients. Architected a robust PostgreSQL schema to persist session data and drawing history",
            src: sketify, // Using heroImage as placeholder thumbnail
            videoSrc: sketifyVideo,
            reverse: false,
            codeLink: "https://github.com/Piyush6678/collaborative-whiteboard"
        },
        {
            id: 2,
            title: "EduCore – Scalable LMS Platform",
            tech: "React,Node.js, MongoDB, tailwind, Razorpay",
            description: "Architected a two-sided marketplace platform for online education. Implemented Role-Based Access Control (RBAC) to distinguish between Student and Admin privileges. Developed a dynamic Admin Dashboard for performing CRUD operations on course metadata and media. Integrated [Razorpay/Stripe] to handle secure payment processing and order fulfillment",
            src: lmsphoto,
            videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-scifi-loading-bar-99-percent-complete-11785-large.mp4",
            reverse: true,
            demoLink: "lms-frontend-pie8.vercel.app",
            codeLink: "https://github.com/Piyush6678/lms-frontend"
        }
    ];


  return (
    <div  name="projects"   className='bg-gradient-to-b from-gray-800 to-black  w-full text-white md:min-h-screen py-20' >
      <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'  >
        <div  className='pb-8' >
             <p className='text-4xl inline border-b-4 border-gray-500  font-bold'>Projects</p>
              <p className='py-6' >Check out some of my work </p>
               </div>

               <div className='flex flex-col px-12 sm:px-0' >
               
               {projects.map((project)=>(
                   <ProjectItem key={project.id} {...project} />
               ))}
           
               </div>
      </div>
    </div> 
  )
}

export default Portfolio
