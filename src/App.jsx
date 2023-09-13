import { useState, useRef } from 'react';

import nextLogo from './assets/next.svg';

import './App.css';

import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Work from './Components/Work';
import Contact from './Components/Contact';
import HeroV2 from './Components/HeroV2';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function App() {
	const aboutViewRef = useRef(null);
	const projectsViewRef = useRef(null);
	const workViewRef = useRef(null);
	const contactViewRef = useRef(null);

	const handleClick = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
		document.activeElement.blur();
	};

	return (
		<>
		
			<Nav
				aboutView={() => handleClick(aboutViewRef)}
				projectsView={() => handleClick(projectsViewRef)}
				workView={() => handleClick(workViewRef)}
				contactView={() => handleClick(contactViewRef)}
			/>
			<HeroV2 contactView={() => handleClick(contactViewRef)}/>
			<div ref={aboutViewRef} className='scroll-mt-40'>
				<About />
			</div>

			<div ref={projectsViewRef} className='scroll-mt-40'>
				<div className='w-full sm:w-[80%] lg:w-[50%] sm:max-w-[759px] m-auto '>
					<div className=' ml-4 sm:ml-12 mx-auto max-w-[710px]'>
						<p
							before='02. '
							className='text-[6vw] sm:text-[39px] font-title font-bold before:content-[attr(before)] before:font-num before:text-green-400'
						>
							EXPERIENCE
						</p>
					</div>
				</div>
				<Projects />
			</div>

			<div ref={workViewRef} className='scroll-mt-40'>
				<div className='w-full sm:w-[80%] lg:w-[50%] sm:max-w-[759px] m-auto '>
					<div className='ml-4 sm:ml-12 mx-auto max-w-[710px]'>
						<p
							before='03. '
							className='text-[6vw] sm:text-[39px] font-title font-bold before:content-[attr(before)] before:font-num before:text-green-400'
						>
							WORK
						</p>
					</div>
				</div>
				<Work />
			</div>
			<div ref={contactViewRef} className='scroll-mt-40'>
				<div className='w-full sm:w-[80%] lg:w-[50%] sm:max-w-[759px] mx-auto mt-[20vh]'>
					<div className='ml-4 sm:ml-12 mx-auto max-w-[710px]'>
						<p
							before='04. '
							className='text-[6vw] sm:text-[39px] font-title font-bold before:content-[attr(before)] before:font-num before:text-green-400'
						>
							CONTACT
						</p>
					</div>
				</div>

				<Contact />
			</div>
			<div className='w-full flex flex-col justify-center gap-2 items-center h-20 pb-4'>

				<p className=''>Designed and Built by <span className='text-green-400'>Aren Dolbakian </span></p>
				<div className='flex gap-4 '>
					<a href='https://www.github.com/ArenRitz' target='_'  >
						<AiFillGithub className=' text-2xl hover:text-green-400' />
					</a>
					<a href='https://www.linkedin.com/in/arendolbakian' target='_' className=''>
						<AiFillLinkedin className=' text-2xl hover:text-green-400' />
					</a>
				</div>
			</div>
		</>
	);
}

export default App;
