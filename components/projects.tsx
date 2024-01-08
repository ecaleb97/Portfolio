import Image from "next/image";
import { SectionHeading } from "./section-heading";
import ecommerceImage from "../public/ecommerce.jpg"
import insureLandingPage from "../public/insure-landing-page.jpg"
import Link from "next/link";
import { ReactIcon } from "./Icons/react";
import { TailwindIcon } from "./Icons/tailwind";
import { AstroIcon } from "./Icons/astro";

export function Projects () {
  return (
    <section id="projects" className="w-full max-w-[50rem] text-left
    scroll-mt-28 mb-28 flex flex-col gap-10">
      <SectionHeading>My projects</SectionHeading>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <li className="w-full border border-[#dbe5e5]
        rounded-lg">
          <div className="w-full rounded-lg">
            <Link href={"#"}>
              <Image 
                src={ecommerceImage} 
                alt="" 
                className="rounded-t-lg h-[215px] max-h-[259px] w-full object-cover
                object-top"
                priority 
              />
            </Link>
            <article className="bg-[#fafafa] w-full px-4 py-6 rounded-b-lg
            flex flex-col gap-6">
              <header>
                <h2 className="text-xl tracking-[0.05rem]">
                  <Link 
                    href={"#"}
                    className="hover:underline"
                  >
                    E-commerce product page
                  </Link>
                </h2>
              </header>
              <p className="text-[#8d8d8d] font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos assumenda numquam asperiores,
              </p>
              <footer className="flex gap-5">
                <ReactIcon />
                <TailwindIcon />
              </footer>
            </article>
          </div>
        </li>
        <li className="w-full border border-[#dbe5e5]
        rounded-lg">
          <div className="w-full rounded-lg">
            <Link href={"#"}>
              <Image 
                src={insureLandingPage} 
                alt="" 
                className="rounded-t-lg h-[215px] max-h-[259px] w-full object-cover
                object-top"
                priority 
              />
            </Link>
            <article className="bg-[#fafafa] w-full px-4 py-6 rounded-b-lg
            flex flex-col gap-6">
              <header>
                <h2 className="text-xl tracking-[0.05rem]">
                  <Link 
                    href={"#"}
                    className="hover:underline"
                  >
                    Insure landing page
                  </Link>
                </h2>
              </header>
              <p className="text-[#8d8d8d] font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos assumenda numquam asperiores,
              </p>
              <footer className="flex gap-5">
                <AstroIcon />
                <TailwindIcon />
              </footer>
            </article>
          </div>
        </li>
      </ul>
    </section>
  )
}