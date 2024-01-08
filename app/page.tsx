import Image from 'next/image'
import { Intro } from './components/intro'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-5'>
      <Intro />
    </main>
  )
}
