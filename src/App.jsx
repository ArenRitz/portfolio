import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion } from 'framer-motion';
import {BsArrowDown} from 'react-icons/bs'

const projects = [
	{
		name: 'Clone-BNB',
		stack: ['Next.js, TailwindCSS, Prisma, Zustand, Next-Auth, MongoDB'],
		desc: 'An Airbnb clone built to get familiarized with Next.JS 13. Users can sign up, login, and create listings and reservations',
		hosted: 'https://clone-bnb-beta.vercel.app/',
		github: 'https://github.com/ArenRitz/clone-bnb',
	},
	{
		name: 'StartGate',
		stack: ['React, TailwindCSS, DaisyUI, PostgreSQL'],
		desc: 'A sleek, customizable personal browser dashboard offering handy widgets and diverse themes for an effortless web experience.',
		github: 'https://github.com/ArenRitz/final-dashboard',
	},
];

function App() {
	return (
		<>
			<nav className='h-16 w-full absolute'></nav>
			<div className='h-screen w-full flex relative'>
				<div className='m-auto w-[50%] border-l-4 border-green-400'>
					<div className='ml-12 py-4 flex flex-col gap-6'>
						<p className='text-green-400 text-2xl font-normal w-fit before:content-["👋_"] before:text-[40px]'>
							 Hello, my name is
						</p>

						<p className="text-white  text-[90px]  leading-none after:content-['.'] after:text-green-400 ">
							Aren Dolbakian
						</p>

						<div className='w-fit text-[35px]  leading-none text-zinc-500 '>
							Full Stack Web Developer 💻
						</div>
        {/*  */}
						<p className=' text-2xl'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
						</p>

						<button className='w-fit py-4 px-12 mt-12 border-2 text-lg rounded-lg border-green-400 text-green-400 hover:bg-green-400 hover:text-black'>
							GET IN TOUCH
						</button>
					</div>
				</div>

        <button className='absolute bottom-8 m-auto left-0 right-0  w-fit pb-2 pt-6 border-2 text-lg rounded-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black'>
							<BsArrowDown className=" animate-bounce text-4xl"/>
						</button>

			</div>
      <div className='h-screen w-full bg-gray-800'>
      
      
      </div>

		</>
	);
}

export default App;
