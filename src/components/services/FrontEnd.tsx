import Link from "next/link";
import React from "react";
import { frontEndTechs } from "../../../constants/data";



const FrontEnd = () => {
  return (
    <div className=" relative  animate-appearSide my-10 ">
      <div className="w-60 h-60 blur-3xl bg-blue-500/20 absolute right-[35%] top-60 rounded-full -z-10"></div>
      <div className="w-40 h-40 blur-3xl bg-white/20 absolute right-16 top-10  rounded-full -z-10"></div>
      <div className="text-fade animate-disappear text-lg md:text-2xl font-extrabold ">
        I PROVIDE
      </div>
      <div className="animate-char-in  text-3xl md:text-6xl lg:text-8xl font-extrabold ">
        FrontEnd <span className="text-gradient ">Services</span>
        <div className=" mt-5 text-xl font-bold space-y-5 max-w-3xl  ">
          <div className="sm:flex items-center   gap-5  space-y-5 sm:space-y-0">
            <div className="flex-1 h-40 flex flex-col items-center justify-center addBorder relative fill-hover  px-4 py-6  ">
              <div>
                <span className="text-5xl  font-extrabold">2</span> Years{" "}
              </div>
              <div className="text-fade text-sm ">of Experience</div>
            </div>
            <div className="flex-1  text-sm text-fade h-40 font-normal addBorder px-4 py-6 fill-hover relative">
              <div>
                I am a frontend developer skilled in Next.js and TypeScript,
                focused on creating dynamic and responsive web applications. . I
                am dedicated to enhancing user experience through intuitive
                design and seamless interactivity.
              </div>
            </div>
          </div>
          <div className="sm:flex flex-wrap items-center gap-5 hidden ">
            {frontEndTechs.map((name, index) => (
              <div
                key={index}
                className="addBorder flex-1 text-center px-4 py-4 fill-hover2 p-0 relative"
              >
                <div>{name.name}</div>
              </div>
            ))}
          </div>
          <Link href='/projects' className="addBorder flex flex-col justify-center items-center py-6 relative fill-hover2 text-5xl ">

            <div className=" font-normal text-3xl text-fade">See All&nbsp; </div> <div>Projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
