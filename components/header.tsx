'use client'

import { MenuIcon } from "./Icons/menu"
import { CloseIcon } from "./Icons/close"
import { links } from "@/app/lib/data"
import { useState } from "react"
import Link from "next/link"
import calebImage from "../public/caleb-portrait.jpg"
import Image from "next/image"

export function Header () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="z-[999] relative">
      <div className="hidden sm:block">
        <div className='fixed top-0 left-1/2 h-[4.5rem] -translate-x-1/2 
        w-full rounded-none border border-white border-opacity-40 bg-white 
        bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'>
        </div>
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
        py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] items-center justify-center gap-y-1
          text-[0.9rem] font-medium text-gray-500 sm:w-[initial]
          sm:flex-nowrap sm:gap-5">
            {
              links.map(link => {
                return (
                  <li 
                    key={link.hash}
                    className="h-3/4 flex items-center justify-center relative"
                  >
                    <Link 
                      href={link.hash}
                      className={`flex w-full justify-center items-center p-3
                      hover:text-gray-950 transition`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
      <div className="bg-white/95 fixed w-screen h-[3rem]
      flex items-center justify-between px-3 sm:hidden">
        <div className="size-9 border border-black rounded-full">
          <Image 
            src={calebImage} 
            alt="Caleb's profile picture" 
            className="rounded-full"
          />
        </div>
        
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      { isMobileMenuOpen && (
        <nav className="bg-[#fbfbfb] w-full min-h-screen
          fixed top-0 bottom-0
          sm:hidden"
        >
          <div 
            className="h-[3rem] 
            flex justify-end items-center 
            pr-3"
          >
            <button onClick={toggleMobileMenu}>
              <CloseIcon />
            </button>
          </div>
          
          <ul className="text-[#333336] text-3xl pl-10 font-semibold
          mt-10 flex flex-col gap-8">
            {
              links.map(link => {
                return (
                  <li key={link.hash} onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href={link.hash}>
                      {link.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      )}
    </header>
  )
}