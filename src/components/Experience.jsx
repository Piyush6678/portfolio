import React from 'react'

const Experience = () => {
    const tech = [
        {
            id: 1,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            alt: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            alt: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            alt: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            alt: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 5,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            alt: "Next JS",
            style: "shadow-white",
            imgStyle: "bg-white rounded-full p-1"
        },
        {
            id: 6,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: "React",
            style: "shadow-blue-600"
        },
        {
            id: 7,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            alt: "GitHub",
            style: "shadow-gray-400",
            imgStyle: "bg-white rounded-full p-1"
        },
        {
            id: 8,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            alt: "TypeScript",
            style: "shadow-blue-500"
        },
        {
            id: 9,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            alt: "MongoDB",
            style: "shadow-green-500"
        },
        {
            id: 10,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
            alt: "Socket.io",
            style: "shadow-white",
            imgStyle: "bg-white rounded-full p-1"
        }
    ]


  return (
    <div name="experience"  className='  w-full h-screen bg-gradient-to-b to-gray-800 from-black'>
        <div  className='p-4 flex flex-col max-w-screen-lg mx-auto justify-center text-white w-full h-full  ' >
            <div>
                <p className=' inline text-4xl border-b-4 p-2 border-gray-500 font-bold '  >Experience</p>
                <p className='py-6' >These are the technologies I've worked with</p>
            </div>

    {/* Single row for large screens (lg and up) */}
    <div className="hidden lg:block w-4/5 mx-auto overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {[...tech, ...tech].map(({ id, style, src, alt, imgStyle }, index) => (
          <div
            key={index}
            className={`shrink-0 w-64 mx-4 shadow-md duration-500 rounded-lg py-2 hover:scale-105 ${style}`}
          >
            <img className={`w-20 mx-auto ${imgStyle || ""}`} src={src} alt={alt} />
            <p className="mt-4 text-center font-bold uppercase">{alt}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Two rows for mobile/tablet (below lg) */}
    <div className="lg:hidden w-full space-y-8">
        {/* Row 1: Left to Right (First Half) */}
        <div className="w-full overflow-hidden">
             <div className="flex animate-marquee whitespace-nowrap w-max">
                {[...tech.slice(0, tech.length / 2), ...tech.slice(0, tech.length / 2)].map(({ id, style, src, alt, imgStyle }, index) => (
                <div
                    key={index}
                    className={`shrink-0 w-64 mx-4 shadow-md duration-500 rounded-lg py-2 hover:scale-105 ${style}`}
                >
                    <img className={`w-20 mx-auto ${imgStyle || ""}`} src={src} alt={alt} />
                    <p className="mt-4 text-center font-bold uppercase">{alt}</p>
                </div>
                ))}
            </div>
        </div>

         {/* Row 2: Right to Left (Second Half) */}
         <div className="w-full overflow-hidden">
             <div className="flex animate-marquee-reverse whitespace-nowrap w-max">
                {[...tech.slice(tech.length / 2), ...tech.slice(tech.length / 2)].map(({ id, style, src, alt, imgStyle }, index) => (
                <div
                    key={index}
                    className={`shrink-0 w-64 mx-4 shadow-md duration-500 rounded-lg py-2 hover:scale-105 ${style}`}
                >
                    <img className={`w-20 mx-auto ${imgStyle || ""}`} src={src} alt={alt} />
                    <p className="mt-4 text-center font-bold uppercase">{alt}</p>
                </div>
                ))}
            </div>
        </div>
    </div>



        </div>



    </div>
  )
}

export default Experience
