import Link from 'next/link'
import React from 'react'
import { projects } from '../../../constants/data'



const page = () => {
  return (
    <div className='min-h-screen  mt-60'>
      {projects.map((group,index)=>{
        return (
          <div id={group.groupTitle} key={index} className='animate-appearSideRide mb-20 '>
        <div className="animate-char-in mb-5 mx-5 animate-char-in-onReload text-3xl md:text-6xl lg:text-8xl font-extrabold ">
        {group.groupTitle} <span className="text-gradient  ">Projects</span>
        </div>
        {group.data.map((project,index)=>{
          return (
            <Link href={project.link} target='_blank'  key={index} className=' px-4 2xl:py-0 block overflow-hidden group border-b-2 border-accent2/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-accent2  after:origin-bottom hover:after:origin-top after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100'>
              <div className='container md:flex items-center justify-between py-10'>
              <div className='text-3xl md:text-4xl lg:text-6xl font-extrabold '>
                {project.title}
                <div className='opacity-0 group-hover:opacity-100 text-lg  transition-all duration-500 text-fade'>
                    {project.message}
                </div>
              </div>
              <div className='  text-fade'>
                {project.description}
              </div>
              </div>
          
        </Link>
          )
        })}
        
      </div>
        )
      })}
      
      
      
    </div>
  )
}

export default page