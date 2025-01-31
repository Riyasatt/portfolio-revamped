"use client";

import Image from "next/image";
import Link from "next/link";
import Links from "./Links";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Menu } from "lucide-react";
import { navLinks } from "../../../constants/data"
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/70 backdrop-blur fixed top-0 w-full z-40">
      <div className="mx-auto max-w-screen-xl px-6  lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12 ">
            <Link className="block text-teal-600 py-2 w-[80px]" href="/">
              <Image
                alt="logo"
                src="/logopng.png"
                priority
                height={32}
                className="w-auto h-auto"
                width={80}
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <Links />
          </div>

          <div className="flex items-center gap-4">
            <div className="">
              <Link
                href="/contact"
                className="hidden border-accent3  md:block fill-hover font-semibold hover:text-white relative p-2 px-4 rounded-lg border-white/30 border"
              >
                <span>Connect</span>
              </Link>
            </div>
            <button
              onClick={() => setIsSideBar(!isSideBar)}
              className="block md:hidden"
            >
              {/* <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"> */}
              <Menu />
              {/* </button> */}
            </button>
            
              <div className={`flex fixed md:hidden overflow-hidden rounded-lg right-0 top-[64px] transition-all ${isSideBar ? "w-60" : "w-0"}   flex-col justify-between border bg-background/90 backdrop-blur-lg`}>
                <div className="px-4 py-6 flex flex-col items-center text-lg gap-5 ">
                  {navLinks.map((link, index) => {
                    return (
                      <Link
                        className={`${
                          pathname === link.url ? "text-gradient" : ""
                        } font-bold`}
                        key={index}
                        href={link.url}
                        onClick={()=>setIsSideBar(false)}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                  <Link
                  onClick={()=>setIsSideBar(false)}
                    href="/contact"
                    className=" border-accent3 mt-10 fill-hover font-semibold hover:text-white relative p-2 px-4 rounded-lg border-white/30 border"
                  >
                    <span>Connect</span>
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
