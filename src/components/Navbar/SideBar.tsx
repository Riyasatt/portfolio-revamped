'use client'

import { navLinks } from "../../../constants/data"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = () => {
  const pathname = usePathname()

  return (
    <div className="flex fixed rounded-lg right-0 top-[64px] transition-all w-60 duration-500  flex-col justify-between border-e bg-background/90 backdrop-blur-lg">
  <div className="px-4 py-6 flex flex-col items-center text-lg gap-5 ">
    {navLinks.map((link,index)=>{
        return (
            <Link className={`${pathname === link.url ? "text-gradient" : ""}`} key={index} href={link.url} >{link.name}</Link>
        )
    })}
                <Link href='/contact' className=" border-accent3 mt-10 fill-hover font-semibold hover:text-white relative p-2 px-4 rounded-lg border-white/30 border">
                     <span>
                     Connect
                   </span>
                </Link>
  </div>

  
</div>
  )
}

export default SideBar