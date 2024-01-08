export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='text-center mb-2 mt-20 px-4 text-gray-500'>
      <small>
        &copy; {currentYear} Caleb Villanueva Zamalloa. All rights reserved.
      </small>
      <p>
        <span>Made with ❤️ </span>
        with <a href="https://nextjs.org">Next.js</a> and <a href="https://tailwindcss.com">Tailwind CSS</a>
      </p>
    </footer>
  )
}
