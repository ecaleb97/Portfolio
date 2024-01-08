import Image from "next/image"
import mainImage from "../favicon.ico"
import styles from "../ui/intro.module.css"

export function Intro() {
  return (
    <section id="home" className="w-full max-w-[50rem] flex flex-col
    gap-10 my-32 sm:my-40">
      <div>
        <Image
          src={mainImage}
          alt="Caleb's profile picture"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <p className="text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className={`font-bold ${styles.animate}`}>
          Hello, I&apos;m Caleb. {' '}
        </span>
        I&apos;m a full-stack developer. I enjoy building websites and apps.
      </p>
    </section>
  )
}