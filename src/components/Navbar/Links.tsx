"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "../../../constants/data"



const Links = () => {

  const pathname= usePathname()
  return (
    <div className="items-center justify-between gap-1 hidden  md:flex text-sm md:text-md lg:text-lg  ">
      {navLinks.map(link =>{
        const isActive = pathname===link.url
        
        return (
          
          <Link href={link.url} key={link.key} className={` relative group px-6    `}>
            <span className={`group-hover:text-accent2 transition-colors duration-300 ${isActive ? "text-accent2" : ""}`} >{link.name}</span>
            <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-accent2  transition-all  group-hover:w-full ${isActive ? "w-full" : ""} `}>
            
            </span>
          </Link>
        )
      })}
  </div>
  )
}

export default Links