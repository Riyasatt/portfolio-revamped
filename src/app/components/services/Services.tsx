import React from 'react'
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import FullStack from './FullStack'

const Services = () => {
  return (
    <div className=' '>
    <div className='  my-20 mb-40 md:mt-32 font-sans '>
      <div className='text-5xl flex mx-5 flex-wrap animate-appearSideReverse animate-appearSideReverseOnReload md:text-6xl pb-20 md:pb-32 lg:text-9xl font-extrabold  '>
        <div>
          <span className=' '  >W</span>
          <span className=' ' >h</span>
          <span className=' ' >a</span>
          <span className=' ' >t</span>
          <span className=' ' >&nbsp;</span>
          <span className=' ' >I</span>
          <span className=' ' >&nbsp;</span>
        </div>
        <span className=''>
          <div className='flex'>
        <span className='animate-char-in  text-gradient ' style={{animationDelay : "0s"}}>P</span>
        <span className='animate-char-in text-gradient' style={{animationDelay : "0.1s"}} >R</span>
        <span className='animate-char-in text-gradient ' style={{animationDelay : "0.2s"}} >O</span>
        <span className='animate-char-in text-gradient'  style={{animationDelay : "0.3s"}}>V</span>
        <span className='animate-char-in text-gradient' style={{animationDelay : "0.4s"}}>I</span>
        <span className='animate-char-in text-gradient'  style={{animationDelay : "0.5s"}}>D</span>
        <span className='animate-char-in text-gradient' style={{animationDelay : "0.6s"}}>E</span>
        </div>
        </span>
      </div>
      <div className='container'>
      <FrontEnd />
      <BackEnd />
      <FullStack />
      </div>
      
    </div>
    </div>
  )
}

export default Services