import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className="mb-80 mx-5 pt-20" id='contact'>
       <div className="text-5xl flex flex-wrap animate-appearSideReverse justify-end  md:text-6xl pb-20 md:pb-32 lg:text-9xl text-right font-extrabold  ">
        <div>LET&apos;S</div> 
          <div className='flex sm:relative sm:top-6 justify-end'>
          <span className='animate-char-in  text-gradient ' style={{animationDelay : "0s"}}>C</span>
          <span className='animate-char-in text-gradient' style={{animationDelay : "0.1s"}} >o</span>
          <span className='animate-char-in text-gradient ' style={{animationDelay : "0.2s"}} >l</span>
          <span className='animate-char-in text-gradient'  style={{animationDelay : "0.3s"}}>l</span>
          <span className='animate-char-in text-gradient' style={{animationDelay : "0.4s"}}>a</span>
          <span className='animate-char-in text-gradient'  style={{animationDelay : "0.5s"}}>b</span>
          <span className='animate-char-in text-gradient' style={{animationDelay : "0.6s"}}>o</span>
          <span className='animate-char-in text-gradient' style={{animationDelay : "0.6s"}}>r</span>
          <span className='animate-char-in text-gradient' style={{animationDelay : "0.6s"}}>a</span>
          <span className='animate-char-in text-gradient' style={{animationDelay : "0.6s"}}>t</span>
          <span className='animate-char-in text-gradient' style={{animationDelay : "0.6s"}}>e</span>
        </div>
      </div>
      <div className='min-h-[50vh] relative flex items-center justify-center'>
        <div className='w-96 h-96 absolute animate-pulse -z-10 bg-blue-500/30 rounded-full blur-3xl'>
        </div>
        <div className='text-center'>
            <div className='text-sm md:text-base lg:text-2xl text-fade'>
                Say hello
            </div>
            <Link href='mailto:kriyasatali04@gmail.com' className='text-[7vw] lg:text-[5vw] font-bold'>
                kriyasatali04@gmail<span className=' text-gradient'>.</span>com
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact