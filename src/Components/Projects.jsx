import React, { useEffect, useRef } from 'react';
import nextLogo from '../assets/next.svg';
import ProjectItem from './ProjectItem';
import StartGate from '../assets/StartGate.jpg';
import Scheduler from '../assets/Scheduler.png';
import CloneBNB from '../assets/CloneBNB.png';
import cx from 'classnames';
import { useInView, motion, useAnimation } from 'framer-motion';

const projectInfo = [
	{
		name: 'CloneBNB',
		stack: [
			'Typescript',
			'Next.js',
			'Prisma',
			'TailwindCSS',
			'Zustand',
			'MongoDB',
		],
		desc: 'An Airbnb-inspired web application with features such as listing creation/deletion, reservation management, and authentication. ',
		hosted: 'https://clone-bnb-beta.vercel.app/',
		github: 'https://github.com/ArenRitz/clone-bnb',
		img: CloneBNB,
	},
	{
		name: 'StartGate',
		stack: ['React', 'TailwindCSS', 'DaisyUI', 'PostgreSQL', 'Axios'],
		desc: 'A sleek, customizable personal browser dashboard offering handy widgets and diverse themes for an effortless web experience.',
		github: 'https://github.com/ArenRitz/final-dashboard',
		img: StartGate,
	},
	{
		name: 'Scheduler',
		stack: [
			'React',
			'Axios',
			'PostgreSQL',
			'SASS',
			'Storybook',
			'Jest',
			'Cypress',
		],
		desc: 'React based single page web app to track student interviews, using built-in and custom hooks',
		github: 'https://github.com/ArenRitz/scheduler',
		img: Scheduler,
	},
];


const variants = {
	hidden: {
		opacity: 0,
		y: 200,
	},
	inView: {
		opacity: 1,
		y: 0,
	},
};



const Projects = () => {
	const projectRef = useRef(null);
	const isInView = useInView(projectRef, { once: true });
	const controls = useAnimation();
	

	useEffect(() => {
		if (isInView) {
			controls.start('inView')
		}
	}, [isInView, controls]);




	return (
		<div ref={projectRef} className='w-full mb-[20vh]'>
			<div className='mt-16 mx-4 lg:mx-auto w-fit flex flex-col sm:grid sm:grid-cols-2 gap-8'>

				<motion.div
					variants={variants}
					initial='hidden'
					animate={ controls}
					transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.3 }}
					
				
				>
				<ProjectItem projectInfo={projectInfo[0]} />
				</motion.div>
				<motion.div
					variants={variants}
					initial='hidden'
					animate={ controls}
					transition={{ duration: 1, delay: 0.7, type: 'spring', bounce: 0.3  }}
					
				
				>
				<ProjectItem projectInfo={projectInfo[1]} />
				</motion.div>
				<motion.div
					variants={variants}
					initial='hidden'
					animate={ controls}
					transition={{ duration: 1, delay: 0.9, type: 'spring', bounce: 0.3  }}
					
				
				>
				<ProjectItem projectInfo={projectInfo[2]} />
				</motion.div>
			</div>
		</div>
	);
};

export default Projects;
