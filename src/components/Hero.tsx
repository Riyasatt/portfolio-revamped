import Image from 'next/image'
import React from 'react'
import { Oswald } from 'next/font/google'
import { Loader } from 'lucide-react';
import Link from 'next/link';



const oswald = Oswald({ subsets: ["latin"] });


const Hero = () => {
  return (
    <main className={`${oswald.className}`}>
      <div className='relative  overflow-hidden '>
        <div className=' h-[115vh] mx-auto    ' />
        <div className='absolute top-[20%] w-full '>
          <div className='text-center  relative hero-text-removed  cursor-default font-extrabold text-[65px]  sm:text-[80px] md:text-[90px]  lg:text-[120px] xl:text-[136px] container  mx-auto   tracking-tighter leading-tight '>
            <div className=' absolute  left-0 blur-lg '>
            <span className='text-gradient relative animate-char-in-onReload' style={{animationDelay : "0s"}} >‘‘</span> <span className='animate-char-in-onReload relative' style={{animationDelay : "0.1s"}} >I</span> <span className=' text-gradient blur-2xl animate-char-in-onReload' style={{animationDelay : "0.2s"}} >BUILD</span> <span className=' text-gradient blur-2xl animate-char-in-onReload' style={{animationDelay : "0.2s"}} >WEBSITES</span> <span className='animate-char-in-onReload' style={{animationDelay : "0.3s"}} >THAT</span> <span className='animate-char-in-onReload' style={{animationDelay : "0.4s"}} >MAKES</span>  <span className=' text-gradient animate-char-in-onReload blur-2xl' style={{animationDelay : "0.5s"}} >PIXELS</span>  <span className='animate-char-in-onReload' style={{animationDelay : "0.6s"}} >DANCE</span> <span className='text-gradient animate-char-in-onReload' style={{animationDelay : "0.7s"}} >’’</span>
            </div>
            <div className='absolute left-0 ' >
            <span className='text-gradient animate-char-in-onReload' style={{animationDelay : "0s"}} >‘‘</span> <span className='animate-char-in-onReload' style={{animationDelay : "0.1s"}} >I</span> <span className='animate-char-in-onReload' style={{animationDelay : "0.1s"}} >BUILD</span> <span className=' text-gradient  animate-char-in-onReload' style={{animationDelay : "0.2s"}} >WEBSITES</span> <span className='animate-char-in-onReload' style={{animationDelay : "0.3s"}} >THAT</span> <span className='animate-char-in-onReload' style={{animationDelay : "0.4s"}} >MAKES</span>  <span className=' text-gradient animate-char-in-onReload ' style={{animationDelay : "0.5s"}} >PIXELS</span>  <span className='animate-char-in-onReload' style={{animationDelay : "0.6s"}} >DANCE</span> <span className='text-gradient animate-char-in-onReload' style={{animationDelay : "0.7s"}} >’’</span>
            </div>
          </div>
        </div>
        {/* <div className='absolute  -bottom-[70px]  md:-bottom-32 w-full z-1  '>
          <div className=' container  mx-auto h-[650px] md:h-[700px] lg:h-[900px] bg-center bg-no-repeat  bg-contain'>
           
            <div>
            <Image src='/man8.png' alt='image' className='mx-auto  ' height={100} width={700} />
            </div>
          </div>
        </div> */}
          {/* <div className=' absolute bottom-0 '> */}
          <div className='absolute bottom-6 mx-5  right-0  '>
            {/* <Image src="/pointer.png" width={250} height={250} alt='cursor' /> */}
            <div className='flex items-center gap-x-4'>
              <div>
            <div className='text-xl'>
              Open to Work
            </div>
            <div className='text-fade'>
              Based in Delhi
            </div>
              </div>
              <Loader  size={30} className='animate-spin-slow hover:animate-spin   '/>
            </div>
        </div>
        <Link href='#contact'  className='absolute bottom-0  mx-5 left-0  '>
            {/* <Image src="/pointer.png" width={250} height={250} alt='cursor' /> */}
            {/* <ScrollToDown /> */}
            <Image className='animate-spin-slow ' src='/ScDown.png' alt='scroll down' height={100} width={100} />
        </Link>
        </div>
      {/* </div> */}
    </main>
  )
}

export default Hero