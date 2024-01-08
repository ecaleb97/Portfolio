'use client'

import { MenuIcon } from "./Icons/menu"
import { CloseIcon } from "./Icons/close"
import { links } from "@/app/lib/data"
import { useState } from "react"
import Link from "next/link"

export function Header () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="z-[999] relative">
      <div className="hidden sm:block">

      </div>
      <div className="fixed bg-slate-100 w-screen h-[3rem]
      flex items-center justify-between px-3 sm:hidden">
        <span className="font-semibold tracking-[0.1rem]">
          Caleb.dev
        </span>
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      { isMobileMenuOpen && (
        <nav className="bg-[#fbfbfb] z-[999] size-full 
          fixed top-[3rem] bottom-0
          sm:hidden"
        >
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