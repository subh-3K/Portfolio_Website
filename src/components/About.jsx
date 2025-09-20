import React from 'react'
import aboutimg from '../assets/HeroImg.png'
const About = () => {
  return (
    <div className=' bg-black text-white py-20' id='about'>
      <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className=' text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className=' flex flex-col md:flex-row items-center md:space-x-12'>
          <img src={aboutimg} alt=''
            className=' w-72 h-80 rounded object-cover mb-8 md:mb-0'
          />
          <div className=' flex-1'>
            <p className=' text-lg mb-8'>Passionate Frontend Developer specializing in crafting seamless and responsive user interfaces with React.js. With a solid foundation in Java programming and Data Structures & Algorithms, I thrive on solving real-world problems through clean, scalable code. My focus is on delivering intuitive digital experiences, optimizing performance, and constantly upgrading my skill set in the fast-evolving world of web development. Always learning. Always growing.</p>
            
            <div className='space-y-4'>
              <div className=' flex items-center'>
                <label htmlFor='html&css' className=' w-2/12'>HTML & CSS</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <div className=' flex items-center'>
                <label htmlFor='react' className=' w-2/12'>REACT.JS</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <div className=' flex items-center'>
                <label htmlFor='node&express' className=' w-2/12'>NODE.JS & EXPRESS.JS</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <div className=' flex items-center'>
                <label htmlFor='database' className=' w-2/12'>SQL & MONGODB</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <div className=' flex items-center'>
                <label htmlFor='language' className=' w-2/12'>C ,JAVA ,PYTHON</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <div className=' flex items-center'>
                <label htmlFor='git&hub' className=' w-2/12'>GIT & GITHUB</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <div className=' flex items-center'>
                <label htmlFor='cloud' className=' w-2/12'>CLOUD/AWS</label>
                <div className=' grow bg-gray-800 rounded-full h-2.5'>
                  <div className=' bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                  </div>
                </div>
              </div>
            </div>

            <div className=' mt-12 flex justify-between text-center'>

              <div>
                <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  NA
                </h3>
                <p>Experience</p>
              </div>

              <div>
                <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  5+
                </h3>
                <p>Project Conpleted</p>
              </div>

              <div>
                <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  NA
                </h3>
                <p>Happy Client</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
