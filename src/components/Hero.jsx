import React from 'react'
import dpImg from '../assets/dp.jpeg'

const Hero = () => {
  return (
    <div className=' bg-black text-white text-center py-16 '>
      <img src={dpImg} alt='' className=' mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
      <h1 className=' text-4xl font-bold'>
        I'm {" "}
        <span className=' text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Subham Roy</span>
        ,Web Developer
      </h1>
      <p className=' mt-4 text-lg text-gray-300'>
        I Specialized in building modern and responsive web applications
      </p>
      <div className=' mt-8 space-x-4'>
        <button className=' bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        <button /*onClick={()=>window.open('https://drive.google.com/file/d/1ax4ZStqDbns0GMXYiB6GuaUXQYPWZ97t/view?usp=drivesdk','_blank')}*/ className=' bg-gradient-to-r from-pink-400 to-blue-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
