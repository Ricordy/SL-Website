import logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

const Menu = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
    <nav className='bg-[#8d6f57] md:flex z-10 sticky hidden min-w-full bg-dark_green justify-evenly gap-20 py-4'>
      <div className='flex'>
        <a href="#top" className='flex flex-row md:text-xl items-center'><Image src={logo} alt="Logo Something Legendary" className='w-20' /></a>
      </div>
      <div className="flex px-0">
      <ul className='sm:flex sm:relative gap-4 items-center md:text-xl px-6'>
        <li><a className='text-slate-300 hover:text-slate-200' href="#services">Services</a></li>
        <li><a className='text-slate-300 hover:text-slate-200' href="#training">Training</a></li>
        <li><a className='text-slate-300 hover:text-slate-200' href="#clients">Clients</a></li>
        <li><a className='text-slate-300 hover:text-slate-200' href="#blog">Blog</a></li>
        <li><a className='text-slate-300 hover:text-slate-200' href="#contact">Contact</a></li>
      </ul>
      </div>
    </nav>
    
    <section className="bg-#8d6f57 flex fixed w-full z-20 md:hidden text-right drop-shadow-md bg-dark_green px-6 -my-12 py-2 items-center justify-between">
        <div className="brand flex items-center">
          <Image src={logo} alt="Logo Something Legendary" className='w-20' />
        </div>
          <a href="#_"
            className="px-1 py-2 space-y-1 drop-shadow-md rounded-sm m-2"
            onClick={(e) => {
              e.preventDefault();
              setIsNavOpen((prev) => !prev)}}
          >
            <span className="block h-0.5 w-6 bg-white bg-opacity-80"></span>
            <span className="block h-0.5 w-6 bg-white bg-opacity-80"></span>
            <span className="block h-0.5 w-6 bg-white bg-opacity-80"></span>
          </a>
          

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} > 
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-light_green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-dark_green">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#services"  onClick={() => setIsNavOpen(false)}>Services</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#training"  onClick={() => setIsNavOpen(false)}>Training</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#clients"  onClick={() => setIsNavOpen(false)}>Clients</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#blog" onClick={() => setIsNavOpen(false)}>Blog</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#contact"  onClick={() => setIsNavOpen(false)}>Contact</a>
              </li>
            </ul>
          </div>
        </section>
    
    </>
  )
}

export default Menu