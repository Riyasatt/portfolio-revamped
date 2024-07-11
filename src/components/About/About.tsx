'use client'

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react'
import Marquee from "react-fast-marquee";
import { aboutServices } from '../../../constants/data';



const About = () => {
  const pathname = usePathname()

  return (
    <div className='px-5 w-full  relative '>
      <div className=' '>
        <div className=''>
      <Marquee direction='right' className='border-t'>
    <div className='  text-6xl pb-4 lg:text-9xl font-extrabold  '>
    <span>Who <span className='text-gradient'>am I&nbsp;</span></span><span>Who <span className='text-gradient'>am I&nbsp;</span></span><span>Who <span className='text-gradient'>am I&nbsp;</span></span>
    </div>
    </Marquee>
      <Marquee speed={100} className='relative -top-5 opacity-60 ' >
    <div className='  text-6xl pb-4 lg:text-9xl font-extrabold  '>
    <span>myself</span><span className='text-gradient'>RiyasatAli</span><span>
    私自身</span><span className='text-gradient tracking-tighter'>リヤサットアリ</span>
    </div>
    </Marquee>
    <Marquee direction='right' className='border-b relative -top-10 opacity-35'>
    <div className='  text-6xl pb-4 lg:text-9xl font-extrabold  '>
    <span>About <span className='text-gradient'>ME&nbsp;</span></span><span>About <span className='text-gradient'>ME&nbsp;</span></span><span>About <span className='text-gradient'>ME&nbsp;</span></span>
    </div>
    </Marquee>
    {
      pathname === '/about' &&
      <div className='absolute flex  lg:hidden z-10 -top-10 w-[calc(100vw-50px)] justify-center '>
        <Image alt='Riyasat' height={300} width={300} src='/man.png' className=' animate-fadeImage  w-auto h-auto    ' />
          
      </div>
    }
    </div>
    <div className='container mb-20  flex justify-between'>
      <div className='max-w-2xl mt-20 flex-1 lg:flex-auto animate-appearSide animate-appearSideOnReload '>
        {
          pathname === '/about' && <div className='h-40 am:h-60 lg:hidden'></div>
        }
        <div>
        <div className='animate-char-in text-4xl border-b-4 border-blue-500 pb-4 mb-5  md:text-5xl lg:text-6xl font-extrabold'>
        K<span className='text-gradient'>.</span> RIYASAT <span className='text-gradient'>ALI</span>
        </div>
        <div className="flex flex-wrap items-center gap-5 mb-5  ">
            {aboutServices.map((name, index) => (
              <div
                key={index}
                className="addBorder font-bold flex-1 animate-growAppear text-center px-4 py-4 fill-hover2 p-0 relative"
                style={{animationDelay : `${index*0.1}s`}}
              >
                <div>{name.name}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 animate-char-in text-base  font-normal addBorder px-4 py-6 ">
          I am a full-stack developer and college student in Delhi, skilled in both frontend and backend technologies.  I love new challenges and always look at things from a fresh perspective, allowing me to develop innovative end-to-end solutions that meet both user and business needs efficiently.
          </div>
          </div>
      </div>
            <Image alt='Riyasat' height={500} width={500} src='/man.png' className='hidden animate-fadeImage    lg:block relative -top-72 ' />
          
    </div>
   
    </div>
    
    </div>
  )
}

export default About