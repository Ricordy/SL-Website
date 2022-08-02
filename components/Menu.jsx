import logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

const Menu = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const itens = [
    {
      link: "#about-us",
      text: "About Us"
    },
    {
      link: "#events",
      text: "Events"
    },
    {
      link: "#roadmap",
      text: "Roadmap"
    },
    {
      link: "#how-it-works",
      text: "How it works"
    },
    {
      link: "#contact",
      text: "Contact"
    },
    {
      link: "whitepaper.pdf",
      text: "Whitepaper"
    },
  ];

  return (
    <>
    <nav className=' bg-c1 md:flex z-10 sticky hidden min-w-full bg-dark_green justify-evenly gap-20 py-4'>
      <div className='flex'>
        <a href="#top" className='flex flex-row md:text-xl items-center'><Image src={logo} alt="Logo Something Legendary" className='w-20' /></a>
      </div>
      <div className="flex px-0">
      <ul className='sm:flex sm:relative gap-4 items-center px-6'>
        { itens.map(({link, text}, index) => {
          return <li key={index}><a className='text-slate-300 hover:text-slate-200' href={link}>{text}</a></li>
        })}
      </ul>
      </div>
    </nav>
    
    <section className="bg-c1 flex fixed w-full z-20 md:hidden text-right drop-shadow-md bg-dark_green px-6 -my-12 py-2 items-center justify-between">
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
          

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
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
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-black">
            { itens.map(({link, text}, index) => {
              return <li key={index} className="border-b border-gray-400 my-8 uppercase">
                <a href={link}  onClick={() => setIsNavOpen(false)}>{text}</a>
              </li>
              })
            }
            </ul>
          </div>
        </section>
    
    </>
  )
}

export default Menu