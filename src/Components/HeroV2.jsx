import React, { useEffect, useState, useRef } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import {
	motion,
	useAnimation,
	useScroll,
} from 'framer-motion';
import cx from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const HeroV2 = ({contactView}) => {
	const controls = useAnimation();
	const { scrollY } = useScroll();

	

	useEffect(() => {
		const handleScroll = () => {
            console.log('current' + scrollY.current)
            console.log('last' + scrollY.getPrevious())
			if (scrollY.current > 100) {
				controls.start({
					opacity: 0,
				});
			} else {
				controls.start({
					opacity: 1,
				});
			}
		};

		const unsubY = scrollY.on('change', handleScroll);

		return () => {
			unsubY();
		};
	}, [scrollY, controls]);

	return (
		<div className='h-full w-full flex relative '>
            <ToastContainer toastStyle={{backgroundColor: "#181818", color: "#fff"}} />
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className={
					'h-fit m-auto sm:m-auto w-full sm:w-[80%] lg:w-[50%] sm:max-w-[759px] border-l-2 border-green-400 overflow-hidden'
				}
			>
				<div className={'ml-4 sm:ml-12 py-4 flex flex-col gap-6 '}>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1.5, type: 'spring', bounce: 0.5 }}
						viewport={{ once: true }}
					>
						<svg
							className='wave w-[20vw] sm:w-[10vw] lg:w-[5vw]'
							version='1.1'
							viewBox='0 0 1200 1200'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='m478.44 221.4c16.32 0 32.52 7.1992 43.441 21.121 14.879 18.961 205.44 262.08 220.44 281.04 16.441 20.762 39.719 21.48 39.719 21.48h2.1602c4.0781 0 8.1602-1.0781 11.879-3 2.3984-1.3203 8.2812-10.801 8.7617-14.879 6.1211-56.281 15-96.48 26.398-133.32 15.238-49.441 43.441-64.078 67.32-64.078 15.48 0 29.039 6.2383 35.879 13.078 17.52 17.52 20.281 33.238 0.35938 97.559-23.762 76.68-9.4805 266.76-9.4805 266.76 0 0.60156 0 1.1992 0.12109 1.8008l2.3984 74.398c0.71875 23.039-3.8398 45.961-13.441 66.961-10.32 22.559-25.922 42.121-45.602 57.121l-93.961 71.52c-20.762 15.84-45.359 26.039-71.281 29.52-6.8398 0.96094-13.68 1.4414-20.52 1.4414-22.68 0-45.238-5.1602-65.879-15l-9.9609-4.8008c-9.2383-4.4414-18-9.8398-26.16-16.078l-334.32-249.12c-25.922-19.078-30.359-56.762-8.2812-81.359 10.559-11.879 25.441-17.641 40.441-17.641 12.238 0 24.719 3.8398 35.16 11.52l122.04 88.078s8.7617 6.7188 13.199 6.7188h0.71875c3.6016-0.71875 5.7617-3.4805 5.2812-7.1992-0.60156-4.1992-5.6406-7.9219-9-11.039-71.281-68.16-201.84-192.96-213.24-204-22.078-21-22.801-56.039-1.8008-78 10.801-11.281 25.32-17.039 39.84-17.039 13.68 0 27.48 5.0391 38.16 15.238 11.762 11.16 116.52 111.48 189.24 180.96 2.1602 2.0391 4.3203 4.5586 7.1992 4.5586 2.7617 0 5.5195-2.7617 5.6406-5.5195 0-2.7617-2.3984-4.8008-4.4414-6.8398-84-87.121-231.48-240.24-242.16-251.4-21.121-21.961-20.52-56.879 1.4414-78 10.68-10.32 24.48-15.48 38.281-15.48 14.52 0 28.922 5.6406 39.719 16.922 12.238 12.719 158.04 164.04 241.68 250.8 2.8789 3 6.1211 7.0781 10.078 7.3203h0.23828c3.2383 0 6.3594-3 6.7188-6.2383 0.35937-3.6016-3.1211-6.7188-5.3984-9.7188-62.52-79.68-153.72-195.96-162.48-207.24-18.84-24-14.641-58.68 9.3594-77.52 10.078-7.9219 22.078-11.762 33.961-11.762m0-30c-18.961 0-37.559 6.4805-52.559 18.121-23.281 18.359-34.559 46.441-32.281 74.039l-27.719-28.801c-16.199-16.801-38.039-26.039-61.32-26.039-22.199 0-43.078 8.5195-59.039 23.879-16.441 15.84-25.68 36.961-26.039 59.762-0.48047 22.801 8.0391 44.281 23.879 60.719l12.961 13.441c-17.641 3.2383-34.078 11.879-46.559 24.961-32.398 33.961-31.199 87.961 2.6406 120.36l67.199 64.32h-0.71875c-24.238 0-47.16 10.078-62.879 27.719-16.078 17.879-23.762 41.879-21.359 65.641 2.5195 23.879 15 45.602 34.199 59.762l334.08 249c9.4805 7.1992 20.039 13.68 30.961 18.961l9.9609 4.8008c24.48 11.762 51.719 18 78.84 18 8.1602 0 16.559-0.60156 24.602-1.6797 30.961-4.1992 60.48-16.441 85.32-35.398l93.961-71.52c23.52-17.879 42.48-41.641 54.719-68.52 11.398-25.078 17.039-52.801 16.199-80.398l-2.3984-74.398c0-1.1992 0-2.2812-0.23828-3.4805-3.8398-51.602-9.7188-197.04 8.2812-255.36 19.922-64.559 23.281-96.48-7.8008-127.68-13.441-13.559-35.398-21.961-57.121-21.961-21.719 0-72.238 8.2812-96 85.199-12.359 39.961-20.52 79.801-26.281 127.92-3.2383-1.4414-7.0781-3.9609-10.32-8.0391-12-15.238-139.8-178.08-194.28-247.68l-26.039-33.238c-16.199-20.762-40.68-32.641-67.078-32.641z'
								fill='#4ade7f'
							/>
						</svg>
					</motion.div>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							duration: 1.5,
							delay: 0.2,
							type: 'spring',
							bounce: 0.5,
						}}
						viewport={{ once: true }}
						className='flex text-[6vw] sm:text-[39px] font-title font-extrabold'
					>
						<span
							before="Hello, I'm "
							className="text-green-400 leading-none after:content-['.'] after:text-white before:content-[attr(before)] before:text-white"
						>
							Aren Dolbakian
						</span>
					</motion.div>

					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							duration: 1.5,
							delay: 0.4,
							type: 'spring',
							bounce: 0.5,
						}}
						viewport={{ once: true }}
					>
						<p className='w-fit text-white text-[5vw] sm:text-[24px] font-bold font-title leading-none whitespace-pre'>
							{'>>'} Full Stack Developer
						</p>
					</motion.div>

					<motion.p
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							duration: 1.5,
							delay: 0.6,
							type: 'spring',
							bounce: 0.5,
						}}
						viewport={{ once: true }}
						className='font-primary text-white text-[4vw] sm:text-[16px]'
					>
						With a fusion of creativity and technical expertise, I specialize in transforming ideas into engaging web experiences. Explore my projects and let's collaborate to bring your digital vision to life.
					</motion.p>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{
							duration: 1.5,
							delay: 0.7,
							type: 'spring',
							bounce: 0.5,
						}}
						viewport={{ once: true }}
					>
						<button
							onClick={() => contactView()}
							className='transition-all duration-200 font-primary w-fit py-2 px-6 mt-6 sm:mt-8 border-[1px] sm:border-2 text-[4vw] sm:text-[16px] rounded-xl border-green-400 text-green-400 hover:bg-green-400 hover:text-black'
						>
							GET IN TOUCH
						</button>
					</motion.div>
				</div>
			</motion.div>
			<motion.div initial={{ opacity: 1 }} animate={controls}>
				<button className='transition-all duration-200 absolute bottom-2 sm:bottom-8 m-auto left-0 right-0 w-fit pb-2 pt-4 sm:pt-6 border-[1px] sm:border-2 rounded-full border-transparent text-green-400 hover:bg-green-400 hover:text-black focus:outline-none focus:border-0 focus:ring-0'>
					<BsArrowDown className=' animate-bounce text-[4vw] sm:text-4xl' />
				</button>
			</motion.div>
		</div>
	);
};

export default HeroV2;
