import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<div id='about_section' className='w-full mt-[10vh] mb-[20vh] '>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className='w-full sm:w-[80%] lg:w-[50%] sm:max-w-[759px] m-auto border-l-2 border-green-400 overflow-hidden'
			>
				<div className='ml-4 sm:ml-12 mx-auto max-w-[710px] '>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
						viewport={{ once: true }}
					>
						<p
							before='01. '
							className='text-[6vw] sm:text-[39px] font-title font-bold before:content-[attr(before)] before:font-num before:text-green-400 overflow-hidden'
						>
							ABOUT ME
						</p>
					</motion.div>
					<motion.p
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							duration: 1.5,
							delay: 0.3,
							type: 'spring',
							bounce: 0.5,
						}}
						viewport={{ once: true }}
						className='mt-6 font-primary leading-relaxed text-[4vw] sm:text-[16px] '
					>
						I'm a tech enthusiast with a passion for web development and a knack
						for creative problem-solving. My journey has taken me through
						various roles, from providing top-notch customer support at Kraken
						Digital Assets Exchange to ensuring spot-on game localization at
						Pole To Win Inc. My tech arsenal includes JavaScript, ReactJS, SQL,
						and REST API technologies, all of which I honed during my Full-Stack
						Web Development training at Lighthouse Labs. What sets me apart is
						my ability to swiftly tackle challenges and maintain an unwavering
						commitment to delivering high-quality solutions. Beyond the code, I
						thrive on pushing boundaries and creating value. With a solid
						foundation in teamwork, critical thinking, and juggling multiple
						tasks, I'm eager to embrace new challenges and bring your digital
						visions to life.
					</motion.p>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							duration: 1.5,
							delay: 0.5,
							type: 'spring',
							bounce: 0.5,
						}}
						viewport={{ once: true }}
					>
						<p
							before={'>> '}
							className='mt-6 font-title before:content-[attr(before)] font-semibold text-[5vw] sm:text-[24px] before:text-green-400 '
						>
							My tech stack:
						</p>
						<div className='flex mt-6'>
							<motion.ul
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									duration: 1.5,
									delay: 0.7,
									type: 'spring',
									bounce: 0.5,
								}}
								viewport={{ once: true }}
								className='w-[50%] flex flex-col items-center  '
							>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									HTML
								</li>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									CSS
								</li>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									JavaScript
								</li>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									SQL
								</li>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									React
								</li>
							</motion.ul>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									duration: 1.5,
									delay: 0.9,
									type: 'spring',
									bounce: 0.5,
								}}
								viewport={{ once: true }}
								className='w-[50%]  flex flex-col items-center list-none'
							>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									Storybook
								</li>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									TailwindCSS
								</li>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									Material UI
								</li>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									Figma
								</li>
								<li className='w-28 before:content-["•"] before:text-green-400'>
									Framer
								</li>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default About;
