import React from 'react'
import portfolio from '../assets/portfolio.png'
import qr from '../assets/qr.png'
import currency from '../assets/currency.png'
import chatbot from '../assets/chatbot.png'
import netflix from '../assets/netflix.png'
import book from '../assets/book.png'
import todo from '../assets/Todo.png'
const Projects = () => {

  const projects = [
  {
    id: 1,
    projectName: "Book Management",
    techStack: ["MERN"],
    image: book,
    github: "https://github.com/username/portfolio-website"
  },
  {
    id: 2,
    projectName: "Currency Converter",
    techStack: ["HTML ", "Currency API " , "CSS ", "JavaScript "],
    image: currency,
    github: "https://chimerical-bienenstitch-24a477.netlify.app/"
  },
  {
    id: 3,
    projectName: "QR Code Generator",
    techStack: ["HTML ", "OpenQR API " , "CSS ", "JavaScript "],
    image: qr,
    github: "https://github.com/username/qr-code-generator"
  },
  {
    id: 4,
    projectName: "Chat App",
     techStack: ["HTML ", "Gemini API " , "CSS ", "JavaScript "],
    image: chatbot,
    github: "https://github.com/username/chat-app"
  },
  {
    id: 5,
    projectName: "Netflix UI Clone",
    techStack: ["HTML ", "CSS"],
    image: netflix,
    github: "https://github.com/username/ecommerce-site"
  },
  {
    id: 6,
    projectName: "Todo List",
    techStack: ["REACT.JS ", "TailwindCSS"],
    image: todo,
    github: "https://github.com/username/ecommerce-site"
  }
];

  return (

    <div className=' bg-black text-white py-20' id='project'>
      <div className=' container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className=' text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map(project=>(
          <div key={project.id} className=' bg-gray-800 p-6 rounded-lg  hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
            <img src={project.image} alt='' className=' rounded-lg mb-4 w-full h-48 object-cover'/>
            <h3 className=' text-2xl font-bold mb-2'>{project.projectName}</h3>
            <p className=' text-gray-400 mb-4'>{project.techStack}</p>
            <a href={project.github} className=' inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full ' target='_blank' rel='noopener noreferror'>GitHub</a>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
