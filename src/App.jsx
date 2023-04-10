import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion';

function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a dummy project 1 description.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://via.placeholder.com/300x200',
      githubLink: 'https://github.com/username/project1',
      liveLink: 'https://project1.example.com',
    },
    {
      title: 'Project 2',
      description: 'This is a dummy project 2 description.',
      techStack: ['Angular', 'Firebase'],
      image: 'https://via.placeholder.com/300x200',
      githubLink: 'https://github.com/username/project2',
      liveLink: 'https://project2.example.com',
    },
    // Add more projects here
  ];
  return (
    <div className="min-h-screen bg-zinc-800 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <header>
          <h1 className="text-4xl font-bold mb-4">Aren Dolbakian</h1>
          <h2 className='text-2xl font-semibold mb-4'>Full Stack Web Developer</h2>
        </header>
        <section>
          <h3 className="text-xl font-semibold mb-4">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add a similar block for each project */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-700/25 backdrop-blur-[5px] border-zinc-700 border-[1px] p-4 rounded-lg shadow-lg shadow-white/2 "
            >
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="mb-4">Description of project 1</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                View Project
              </a>
            </motion.div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-2"
              ></textarea>
            </div>
  <button
  type="submit"
  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700"
>
  Submit
</button>
</form>
</section>
</motion.div>
</div>
);
}

export default App;