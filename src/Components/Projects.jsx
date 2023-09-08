import React from 'react';
import nextLogo from '../assets/next.svg';
import ProjectItem from './ProjectItem';
import StartGate from '../assets/StartGate.jpg';
import Scheduler from '../assets/Scheduler.png';
import CloneBNB from '../assets/CloneBNB.png';


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
        img: CloneBNB
	},
	{
		name: 'StartGate',
		stack: ['React', 'TailwindCSS', 'DaisyUI', 'PostgreSQL', 'Axios'],
		desc: 'A sleek, customizable personal browser dashboard offering handy widgets and diverse themes for an effortless web experience.',
		github: 'https://github.com/ArenRitz/final-dashboard',
        img: StartGate
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
        img: Scheduler
	},
];



const Projects = () => {
	return (
		<div className='w-full pb-[20vh]'>
			<div className='w-full lg:w-[50%] m-auto'>
				<div className='ml-4'>

				</div>
			</div>
			<div className='mt-12  mx-4 lg:mx-auto w-fit flex flex-col lg:grid lg:grid-cols-2 gap-8'>
            <ProjectItem projectInfo={projectInfo[0]} />
            <ProjectItem projectInfo={projectInfo[1]} />
            <ProjectItem projectInfo={projectInfo[2]} />
            
			</div> 
		</div>
	);
};

export default Projects;
