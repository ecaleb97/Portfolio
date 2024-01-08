import { SectionHeading } from "./section-heading"

export function About () {
  return (
    <section id="about" className="w-full max-w-[50rem] text-left
    flex flex-col gap-10">
      <SectionHeading>About me</SectionHeading>
      <p className="leading-7">
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m also
        learning how to play the guitar.
      </p>
    </section>
  )
}