import Image from "next/image"
import Link from "next/link"
import Links from "./Links"

const Navbar = () => {


  return (
    // <header className="  bg-background sticky py-2  md:py-4 lg:py-6  top-0 w-full  z-40 ">
    //     <nav className="container mx-auto  px-3  lg:px-20 ">
    //         <div className="flex justify-between items-center">
    //             <Link href="/" className="w-24 md:w-24 lg:w-28">
    //               <Image src="/logo.svg" width={100} height={20} alt="logo" className="w-full" />
    //             </Link>
    //             <div className="">
    //             <Links />
    //             </div>
    //             <button className=" relative group px-4 border py-1 rounded-lg border-accent ">
    //                     <span className=" w-full text-white transition-colors duration-200  group-hover:text-white  ">
    //                     CONTACT ME
    //                     </span>
    //                 <span className="absolute top-[0%] left-0 w-0 h-[30px] rounded-lg bg-accent  transition-all duration-[250ms] group-hover:w-full  "></span>
                    
    //             </button>
    //             <div className="flex gap-5 items-center">
    //             <button className="hidden border-accent3  sm:block fill-hover font-semibold hover:text-white relative p-2 px-4 rounded-lg border-white/30 border">
    //                 <span>
    //                     Contact
    //                 </span>
    //             </button>
                
    //             <button className="bg-pri px-4 py-1 rounded-md  ">
    //                 Resume
    //             </button>
    //             <div className="md:hidden flex items-center">
    //                 <button className=" focus:outline-none">
    //                     <svg className="w-6 h-6" fill="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    //                     </svg>
    //                 </button>
    //             </div>
    //             </div>
    //         </div>
            
    //     </nav>
    // </header>
    <header className="bg-background/50 backdrop-blur-lg fixed top-0 w-full z-40">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link  className="block text-teal-600" href="/">
         <Image alt="logo" src='/logopng.png' height={20} className="" width={100} />
        </Link>
      </div>

      <div className="hidden md:block">
        <Links />
      </div>

      <div className="flex items-center gap-4">
      <Link href='/contact' className="hidden border-accent3  sm:block fill-hover font-semibold hover:text-white relative p-2 px-4 rounded-lg border-white/30 border">
                     <span>
                     Connect
                   </span>
                </Link>

        <div className="block md:hidden">
          {/* <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/* </button> */}
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar