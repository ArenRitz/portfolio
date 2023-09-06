import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { motion } from 'framer-motion';

import Nav from './Components/Nav';
import Hero from './Components/Hero';

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
      <Nav />
      <Hero />
			
		</>
	);
}

export default App;
