import React from "react";
import { workExperience } from "../../constants/data";
import Link from "next/link";
const WorkExperience = () => {
  return (
    <div className="mb-40 ">
      <div className="text-5xl px-5 flex flex-wrap animate-appearSideReverse  md:text-6xl pb-20 md:pb-32 lg:text-9xl font-extrabold  ">
        <span>Work</span>
        <span className="">
          <div className="flex">
            <span
              className="animate-char-in  text-gradient "
              style={{ animationDelay: "0s" }}
            >
              Experience
            </span>
          </div>
        </span>
      </div>
        {workExperience.map((work,index)=>{
          return (
            <Link href={work.link} target='_blank'  key={index} className=' px-4 2xl:py-0 block overflow-hidden group border-b-2 border-accent2/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-accent2  after:origin-bottom hover:after:origin-top after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100'>
              <div className='container lg:flex items-center justify-between py-10 gap-5'>
              <div className='text-3xl md:text-6xl lg:text-7xl font-extrabold '>
                <span className=" uppercase flex gap-10 items-center  ">
                  {work.company}
                  <span className="text-fade text-base md:text-xl  ">
                        {work.role}
                  </span>
                  </span>
                
                <div className="visible lg:hidden uppercase text-base text-fade  ">
                  {work.position}
                </div>
                <div className=' hidden lg:block pt-2 uppercase  text-2xl   text-fade '>
                    {work.position}
                </div>
              </div>
              <div className=" lg:max-w-[30rem]">
                  <div className="font-bold text-base  opacity-90 mb-5 lg:mb-2">
                        {work.duration}
                  </div>
                  <div className='  text-fade'>
                  {work.description}
                  </div>
              </div>
              
              </div>
          
        </Link>
          )
        })}
        
        </div>
  );
};

export default WorkExperience;
