import { useState } from 'react';

import nextLogo from './assets/next.svg'

import './App.css';


import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';


function App() {
	return (
		<>
      <Nav />
      <Hero />
      <About />


			<div className='w-full lg:w-[50%] lg:max-w-[759px] m-auto ' >
				<div className='mt-[15vw] ml-4 lg:ml-12 mx-auto max-w-[710px]'>
      <p
						before='02. '
						className='text-[6vw] lg:text-[2.5vw] xl:text-[39px] font-title font-bold before:content-[attr(before)] before:font-num before:text-green-400'
					>
						EXPERIENCE
					</p>
          </div>
          </div>
      <Projects />
  
		</>
	);
}

export default App;
