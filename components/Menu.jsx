import logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

function Menu() {
  return (
    <nav className='flex justify-between items-center gap-2 mb-6'>
      <h1 className="flex">
        <Image src={logo} alt="Logo Something Legendary" className='w-20' />
      </h1>
      <div className='flex space-x-4'>
        <a className='border-b border-cyan-500' href="#contact">About Us</a>
        <a className='border-b border-cyan-500' href="#contact">Events</a>
        <a className='border-b border-cyan-500' href="#contact">Contact</a>
        <a className='border-b border-cyan-500' href="#contact">Whitepaper</a>
      </div>
    </nav>
  )
}

export default Menu