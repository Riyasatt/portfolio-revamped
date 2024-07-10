import React from 'react'
import Services from '../components/services/Services'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import Contact from '../components/Contact/Contact'

const page = () => {
  return (
    <div className='relative'>
      <Services />
      <Contact />
    </div>
  )
}

export default page