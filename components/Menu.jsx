import logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

function Menu() {
  return (
    <nav className='flex items-center gap-2 mb-6'>
      <Image src={logo} alt="Logo" className='w-20' />
      <a href="#contact">About Us</a>
      <a href="#contact">Events</a>
      <a href="#contact">Contact</a>
      <a href="#contact">Whitepaper</a>
    </nav>
  )
}

export default Menu