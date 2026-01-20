import React, { useState, useRef } from 'react';

const ProjectItem = ({  title, description, tech, src, videoSrc, reverse, demoLink, codeLink }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
        videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center justify-center w-full mb-24 gap-12`}>
   
      <div className="w-full md:w-1/2 p-4 text-white">
        <h3 className="text-3xl font-bold mb-4 border-b-2 border-gray-500 inline-block">{title}</h3>
        <p className="text-lg mb-4 text-cyan-400 font-bold uppercase tracking-wider">{tech}</p>
        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
          {description}
        </p>
         <div className='flex items-center gap-6' >
             {demoLink && (
                 <a href={demoLink} target="_blank" rel="noopener noreferrer" className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:scale-105 duration-200 text-white font-bold shadow-lg shadow-cyan-500/50' >
                     Demo
                 </a>
             )}
             {codeLink && (
                 <a href={codeLink} target="_blank" rel="noopener noreferrer" className='px-8 py-3 bg-transparent border border-gray-500 rounded-lg hover:scale-105 duration-200 text-white font-bold hover:bg-gray-800 shadow-md' >
                     Code
                 </a>
             )}
         </div>

      </div>


      <div 
        className="w-full md:w-1/2 h-64 md:h-80 relative rounded-xl overflow-hidden shadow-xl shadow-gray-700 hover:shadow-cyan-500/30 duration-300 border border-gray-700 bg-gray-900 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img 
            src={src} 
            alt={title} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100 group-hover:scale-105'}`}
        />
        <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        />
       
      </div>
    </div>
  );
};

export default ProjectItem;
