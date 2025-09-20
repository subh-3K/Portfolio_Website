import React from 'react'
import logoImg from '../assets/Logo.jpeg'

const Navbar = () => {
  return (
    <nav className=' bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className=' container py-2 flex justify-center md:justify-between items-center'>
        <div className='hidden md:inline'>
          <img src={logoImg} alt='Logo' className='h-16 w-auto rounded-full border-2 border-white object-cover transform transition-transform duration-300 hover:scale-105' />
        </div>
        <div className=' space-x-6'>
          <a href='#home' className=' hover:text-gray-400'>Home</a>
          <a href='#about' className=' hover:text-gray-400'>About Me</a>
          <a href='#service' className=' hover:text-gray-400'>Service</a>
          <a href='#project' className=' hover:text-gray-400'>Project</a>
          <a href='#contact' className=' hover:text-gray-400'>Contact</a>
        </div>
        <button className=' bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
      </div>
    </nav>
  )
}

export default Navbar
