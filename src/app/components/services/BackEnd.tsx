import React from "react";

export const skills = [
  {
    id: 1,
    name: "Node.js",
  },
  {
    id: 2,
    name: "Express.js",
  },
  {
    id: 3,
    name: "MongoDB",
  },
  {
    id: 4,
    name: "PostgreSQL",
  },
  
];

const BackEnd = () => {
  return (
    <div className=" relative  animate-appearSideReverse animate-appearSideReverseOnLoad my-10  ">
       <div className="w-60 h-60 blur-3xl bg-blue-500/20 absolute left-[35%] top-60 rounded-full -z-10"></div>
       <div className="w-40 h-40 blur-3xl bg-white/20 absolute left-16 top-10  rounded-full -z-10"></div>
        <div className="flex flex-col sm:items-end">
      <div className="text-fade text-lg md:text-2xl font-extrabold ">
        I PROVIDE
      </div>
      <div className="animate-char-in animate-char-in-onReload text-3xl md:text-6xl lg:text-8xl font-extrabold ">
        BackEnd <span className="text-gradient ">Services</span>
        <div className=" mt-5 text-xl font-bold space-y-5 max-w-3xl  ">
          <div className="sm:flex items-center   gap-5  space-y-5 sm:space-y-0">
            <div className="flex-1 h-40 flex flex-col items-center justify-center addBorder relative fill-hover  px-4 py-6  ">
              <div>
                <span className="text-5xl  font-extrabold">1</span> Years{" "}
              </div>
              <div className="text-fade text-sm ">of Experience</div>
            </div>
            <div className="flex-1  text-sm text-fade h-40 font-normal  addBorder px-4 py-6 fill-hover relative">
              <div>
              I am a backend developer skilled in server-side technologies and databases, focused on building robust and scalable web applications. I am dedicated to ensuring data integrity and efficient performance through optimized server logic and secure data management
              </div>
            </div>
          </div>
          <div className="sm:flex flex-wrap items-center gap-5 hidden ">
            {skills.map((name, index) => (
              <div
                key={index}
                className="addBorder flex-1 text-center px-4 py-4 fill-hover2 p-0 relative"
              >
                <div>{name.name}</div>
              </div>
            ))}
          </div>
          <div className="addBorder flex flex-col justify-center items-center py-6 relative fill-hover2 text-5xl ">

            <div className=" font-normal text-3xl">See All&nbsp; </div> <div>Projects</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BackEnd;
