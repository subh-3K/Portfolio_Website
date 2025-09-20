import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div className=' bg-black text-white py-20' id='contact'>
          <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className=' text-4xl font-bold text-center mb-12'>Contact Me</h2>
            <div className=' flex flex-col md:flex-row items-center md:space-x-12'>
              
              <div className=' flex-1'>
                <h3 className=' text-3xl font-bold text-transparent bg-clip-text mb-4 bg-gradient-to-r from-green-400 to-blue-500'>Let's Talk</h3>
                <p>I'm open to discussing web dev projects or partnership opportunities</p>

                <div className=' mb-4 mt-8'>
                <FaEnvelope className=' inline-block text-green-500 mr-2'></FaEnvelope>
                <a href='mail@.com' className=' hover:underline'>r.subham4334@gmail.com</a>
                </div>

                <div className=' mb-4 mt-8'>
                <FaPhone className=' inline-block text-green-500 mr-2'></FaPhone>
                <span>+91-********</span>
                </div>

                <div className=' mb-4 mt-8'>
                <FaMapMarkedAlt className=' inline-block text-green-500 mr-2'></FaMapMarkedAlt>
                <span>Kolkata,WestBengal,India</span>
                </div>

              </div>

                <div className=' flex-1 w-full'>
                    <form className=' space-y-4 '>
                        <div>
                            <label htmlFor='name' className=' block mb-2'>Your Name</label>
                            <input type='text' placeholder='Enter Your name' className=' w-full p-2 rounded bg-gray-600 focus:outline-none focus:border-green-400'/>
                        </div>

                         <div>
                            <label htmlFor='email' className=' block mb-2'>Your Email</label>
                            <input type='text' placeholder='Enter Your Email' className=' w-full p-2 rounded bg-gray-600 focus:outline-none focus:border-green-400'/>
                        </div>

                         <div>
                            <label htmlFor='name' className=' block mb-2'>Your Msg</label>
                            <textarea type='text' placeholder='Enter Your msg' className=' w-full p-2 rounded bg-gray-600 focus:outline-none focus:border-green-400' rows={5}/>
                        </div>
                        <button className=' bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                    </form>
                </div>

            </div>
          </div>
        </div>
  )
}

export default Contact
