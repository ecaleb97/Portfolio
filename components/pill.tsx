import Link from "next/link";

interface PillProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function Pill({ href, className, children }: PillProps) {
  return (
    <Link href={href} rel="noreferer" className={`flex gap-2 items-center border
    rounded-xl px-2 py-1 hover:bg-black hover:bg-opacity-5
    hover:scale-105 cursor-pointer ${className}`}>
      {children}
    </Link>
  )
}