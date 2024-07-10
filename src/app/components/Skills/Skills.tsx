import React from "react";

export const frontEndSkills = [
    {
        id: 1,
        name : "REACTJS",
        progress : 80,
        prog : "w-[80%]"
    },{
        id: 2,
        name : "NEXTJS",
        progress : 80,
        prog : "w-[80%]"
    },{
        id: 3,
        name : "TAILWIND CSS",
        progress : 90,
        prog : "w-[90%]"
    },{
        id: 4,
        name : "SHADCN",
        progress : 80,
        prog : "w-[80%]"
    },
]

export const backEndSkills = [
    {
        id: 1,
        name : "NODE.JS",
        progress : 70,
        prog : "w-[70%]"
    },{
        id: 2,
        name : "EXPRESS.JS",
        progress : 50,
        prog : "w-[50%]"
    },{
        id: 3,
        name : "MONGODB",
        progress : 75,
        prog : "w-[75%]"
    },{
        id: 4,
        name : "POSTGRESSQL",
        progress : 75,
        prog : "w-[75%]"
    },
]

export const languagesSkills = [
    {
        id: 1,
        name : "C",
        progress : 50,
        prog : "w-[50%]"
    },{
        id: 2,
        name : "C++",
        progress : 75,
        prog : "w-[75%]"
    },{
        id: 3,
        name : "JAVA",
        progress : 50,
        prog : "w-[50%]"
    },{
        id: 4,
        name : "PYTHON",
        progress : "50",
        prog : "w-[50%]"
    },
]

export const otherSkills = [
    {
        id: 1,
        name : "UI/UX ",
        progress : 30,
        prog : "w-[30%]"
    },{
        id: 2,
        name : "PHOTOSHOP ",
        progress : 40,
        prog : "w-[40%]"
    },{
        id: 3,
        name : "VIDEO EDITING",
        progress : 30,
        prog : "w-[30%]"
    },
]
export const basicsSkills = [
    {
        id: 1,
        name : "HTML 5",
        progress : 95,
        prog : "w-[95%]"
    },{
        id: 2,
        name : "CSS 3",
        progress : 85,
        prog : "w-[85%]"
    },{
        id: 3,
        name : "JAVASCRIPT",
        progress : 75,
        prog : "w-[75%]"
    },{
        id: 4,
        name : "TYPESCRIPT",
        progress : 75,
        prog : "w-[75%]"
    },
]

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
        <div className="flex-1 w-full md:min-w-[500px]">
        <div className="animate-char-in text-3xl mb-5 md:text-4xl lg:text-5xl font-extrabold ">
        FrontEnd <span className="text-gradient ">Development</span>
        </div>
          <div className="flex flex-col gap-4">
            {frontEndSkills.map((name,index)=>{
                return (
                    <span key={index} className=" rounded-lg relative  font-bold bg-gray-700 flex items-center  justify-between ">
              <span className={` h-3 rounded-lg p-6 bg-gradient animate-growAppear  ${name.prog} flex items-center`}>
                <div className="h-full flex items-center ">
                {name.name}
                </div>
              </span>
              <span className="absolute right-4 "> {name.progress}%</span>
              
            </span>
                )
            })}
          </div>
        </div>
        <div className="flex-1 w-full md:min-w-[500px]">
        <div className="animate-char-in text-3xl mb-5 md:text-4xl lg:text-5xl font-extrabold  ">
        BackEnd <span className="text-gradient ">Development</span>
        </div>
          <div className="flex flex-col gap-4">
          {backEndSkills.map((name,index)=>{
                return (
                    <span key={index} className=" rounded-lg relative  font-bold bg-gray-700 flex items-center  justify-between ">
              <span className={` h-3 rounded-lg p-6 bg-gradient animate-growAppear ${name.prog} flex items-center`}>
                <div className="h-full flex items-center ">
                {name.name}
                </div>
              </span>
              <span className="absolute right-4 "> {name.progress}%</span>
              
            </span>
                )
            })}
          </div>
        </div>
        <div className="flex-1 w-full md:min-w-[500px]">
        <div className="animate-char-in mb-5 text-3xl md:text-4xl lg:text-5xl font-extrabold ">
        Languages 
        </div>
          <div className="flex flex-col gap-4">
          {languagesSkills.map((name,index)=>{
                return (
                    <span key={index} className=" rounded-lg relative  font-bold bg-gray-700 flex items-center  justify-between ">
              <span className={` h-3 rounded-lg p-6 bg-gradient animate-growAppear  ${name.prog} flex items-center`}>
                <div className="h-full flex items-center ">
                {name.name}
                </div>
              </span>
              <span className="absolute right-4 "> {name.progress}%</span>
              
            </span>
                )
            })}
          </div>
        </div>
        <div className="flex-1 w-full md:min-w-[500px]">
        <div className="animate-char-in mb-5 text-3xl md:text-4xl lg:text-5xl font-extrabold ">
        Basics 
        </div>
          <div className="flex flex-col gap-4">
          {basicsSkills.map((name,index)=>{
                return (
                    <span key={index} className=" rounded-lg relative  font-bold bg-gray-700 flex items-center  justify-between ">
              <span className={` h-3 rounded-lg p-6 bg-gradient animate-growAppear  ${name.prog} flex items-center`}>
                <div className="h-full flex items-center ">
                {name.name}
                </div>
              </span>
              <span className="absolute right-4 "> {name.progress}%</span>
              
            </span>
                )
            })}
          </div>
        </div>
        <div className="flex-1 w-full md:min-w-[500px]">
        <div className="animate-char-in mb-5 text-3xl md:text-4xl lg:text-5xl font-extrabold ">
        Others   
        </div>
          <div className="flex flex-col gap-4">
          {otherSkills.map((name,index)=>{
                return (
                    <span key={index} className=" rounded-lg relative  font-bold bg-gray-700 flex items-center  justify-between ">
              <span className={` h-3 rounded-lg p-6 bg-gradient animate-growAppear  ${name.prog} flex items-center`}>
                <div className="h-full flex items-center ">
                {name.name}
                </div>
              </span>
              <span className="absolute right-4 "> {name.progress}%</span>
              
            </span>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
