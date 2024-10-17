import { Github, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-blue-50'>
      <div className='p-6 bg-white mx-auto relative z-10 overflow-hidden border border-b-0 border-gray-200'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <Link href='/'>
            {/* <LogoType className='h-7 text-gray-800' /> */}
          </Link>
          <p className='max-w-md text-sm text-gray-500'>
            Um projeto divertido que valeu a pena fazer. Espero que você goste!
          </p>
          <p className='text-sm leading-5 text-gray-400'>
            © {new Date().getFullYear()} Texto Certo API
          </p>
          <div className='flex items-center space-x-3'>
            <a
              href='https://www.linkedin.com/in/jefferson-brandao-dev/'
              target='_blank'
              rel='noreferrer'
              className='group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100'>
              <span className='sr-only'>Linkedin</span>
              <Linkedin className='h-4 w-4 text-blue-800 transition-colors group-hover:text-blue-700' />
            </a>
            <a
              href='https://github.com/jeffersonbraster'
              target='_blank'
              rel='noreferrer'
              className='group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100'>
              <span className='sr-only'>Github</span>
              <Github className='h-4 w-4 text-gray-600 transition-colors group-hover:text-black' />
            </a>

            <a
              href='https://www.instagram.com/jeffersonbrandao/'
              target='_blank'
              rel='noreferrer'
              className='group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100'>
              <span className='sr-only'>Instagram</span>
              <Instagram className='h-4 w-4 text-rose-700 transition-colors group-hover:text-rose-600' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
