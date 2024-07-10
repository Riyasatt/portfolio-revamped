'use client'

import {  Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Marquee from 'react-fast-marquee'

export const socialLinks = [
    {
        id: 1,
        icon : <Github size={60} />,
        link : "https://github.com/Riyasatt",
        color : "text-white bg-gray-900  [&>*]:z-10 [&>*]:relative hover:before:w-full before:w-0 before:absolute before:duration-300 before:top-0 before:right-0 hover:before:left-0 before:scale-150 before:rounded-full overflow-clip before:h-full  before:bg-accent3 hover:text-white"

    },{
        id: 2,
        icon : <Linkedin size={60}/>,
        link : "https://www.linkedin.com/in/k-riyasat-ali/",
        color : "text-white  bg-blue-500 [&>*]:z-10 [&>*]:relative hover:before:w-full before:w-0 before:absolute before:duration-300 before:top-0 before:right-0 hover:before:left-0 before:scale-150 before:rounded-full overflow-clip before:h-full  before:bg-accent3 hover:text-white"
    },{
        id: 3,
        icon : <Instagram size={60}/>,
        link : "https://www.instagram.com/riyasatttt/",
        color : "text-white bg-violet-600  [&>*]:z-10 [&>*]:relative hover:before:w-full before:w-0 before:absolute before:duration-300 before:top-0 before:right-0 hover:before:left-0 before:scale-150 before:rounded-full overflow-clip before:h-full  before:bg-accent3 hover:text-white"
    },{
        id: 4,
        icon : <Twitter size={60}/>,
        link : "https://x.com/Riyasattt",
        color : "text-white bg-blue-500  [&>*]:z-10 [&>*]:relative hover:before:w-full before:w-0 before:absolute before:duration-300 before:top-0 before:right-0 hover:before:left-0 before:scale-150 before:rounded-full overflow-clip before:h-full  before:bg-accent3 hover:text-white"
    },{
        id: 5,
        icon : <Mail size={60}/>,
        link : "mailto:kriyasatali04@gmail.com",
        color : "text-white bg-red-500  [&>*]:z-10 [&>*]:relative hover:before:w-full before:w-0 before:absolute before:duration-300 before:top-0 before:right-0 hover:before:left-0 before:scale-150 before:rounded-full overflow-clip before:h-full  before:bg-accent3 hover:text-white"
    },
]

const Socials = () => {

    const pathname = usePathname()
  return (
    <div className='mb-32'>
        <Marquee autoFill className=' border-t'>
        <div className='  text-6xl pb-4 lg:text-9xl font-extrabold  '>
            <span>findme</span>
            <span className='text-gradient'>ONLINE</span>
        </div>
        
        </Marquee>
        
        <Marquee autoFill speed={100} direction='right' className='relative -top-6 opacity-70 border-b  '>
        <div className='  text-6xl pb-4 lg:text-9xl font-extrabold  '>
            <span>my</span>
            <span className='text-gradient'>SOCIALS</span>
        </div>
        </Marquee>
        <div className=' min-h-[60ch] relative w-full  '>
            <div className='w-96 h-96 absolute -z-10 bg-blue-500/30 rounded-full blur-3xl'>
            </div>  
            <div className='w-60 h-60 animate-pulse bottom-20  right-20 absolute -z-10 bg-white/30 rounded-full blur-3xl'>
            </div> 
            <div className='mt-20 md:flex container flex-wrap gap-5 space-y-5 md:space-y-0 animate-char-in'>
                {socialLinks.map((social,index)=> {
                    const delayTime = index*0.2
                    return (
                        <div key={index} className={` ${pathname === '/contact' ? " animate-char-in-onReload" : "animate-char-in" }  w-full md:min-w-96 flex-1 `} style={{animationDelay : `${delayTime}s`}}>
                        <Link href={social.link} target='_blank'  className={`  fill-hover3 relative flex-1 h-32 md:h-60  flex items-center justify-center border rounded-xl ${social.color}`}>
                        {social.icon}
                        </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        
    </div>
  )
}

export default Socials