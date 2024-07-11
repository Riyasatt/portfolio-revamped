import React from "react";
import { allSkills } from "../../../constants/data";



const Skills = () => {
  return (
    <div className="mb-40 px-5">
      <div className="text-5xl flex flex-wrap animate-appearSideReverse  md:text-6xl pb-20 md:pb-32 lg:text-9xl font-extrabold  ">
        <span>My Digital</span> 
        <span className=''>
          <div className='flex'>
        <span className='animate-char-in  text-gradient ' style={{animationDelay : "0s"}}>D</span>
        <span className='animate-char-in text-gradient' style={{animationDelay : "0.1s"}} >N</span>
        <span className='animate-char-in text-gradient ' style={{animationDelay : "0.2s"}} >A</span>
        </div>
        </span>
      </div>
      <div className="container mx-auto flex gap-10 flex-wrap">
        {allSkills.map((skillGroup,index)=>{
          return (
            <div key={index} className="flex-1 w-full md:min-w-[500px]">
        <div className="animate-char-in text-3xl mb-5 md:text-4xl lg:text-5xl font-extrabold ">
        {skillGroup.groupTitle}
        </div>
          <div className="flex flex-col gap-4">
            {skillGroup.data.map((skills,index)=>{
                return (
                    <span key={index} className=" rounded-lg relative  font-bold bg-gray-700 flex items-center  justify-between ">
              <span className={` h-3 rounded-lg p-6 bg-gradient animate-growAppear  ${skills.prog} flex items-center`} style={{width:`${skills.progress}%`}}>
                <div className="h-full flex items-center ">
                {skills.name}
                </div>
              </span>
              <span className="absolute right-4 "> {skills.progress}%</span>
              
            </span>
                )
            })}
          </div>
        </div>
          )
        })}
        
        
      </div>
    </div>
  );
};

export default Skills;
