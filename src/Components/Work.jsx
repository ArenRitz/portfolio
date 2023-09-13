import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import cx from 'classnames';

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

const Work = () => {
	const projectRef = useRef(null);
	const isInView = useInView(projectRef, { once: true });
	const controls = useAnimation();
	const openControls = useAnimation();

	const [first, setFirst] = useState(false);
	const [second, setSecond] = useState(false);
	const [third, setThird] = useState(false);
	const [fourth, setFourth] = useState(false);

	const handleClick = (e) => {
		if (first || second || third || fourth) {
			setFirst(false);
			setSecond(false);
			setThird(false);
			setFourth(false);
		}

		if (e.target.id === 'first') {
			setFirst(!first);
		} else if (e.target.id === 'second') {
			setSecond(!second);
		} else if (e.target.id === 'third') {
			setThird(!third);
		} else if (e.target.id === 'fourth') {
			setFourth(!fourth);
		}
	};

	useEffect(() => {
		if (isInView) {
			controls.start('inView');
		}
	}, [isInView, controls]);

	return (
		<>
			<div className={' mx-auto mt-16 '}>
				<motion.div
					ref={projectRef}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='w-[4px] py-[350px] bg-green-400  ml-[5vw] sm:ml-[10vw] md:mx-auto relative'
				>
					<motion.div
						variants={variants}
						initial='hidden'
						animate={controls}
						transition={{ duration: 1.5, type: 'spring', bounce: 0.3 }}
						className={'flex absolute -left-[10px] items-center top-[12.5%] '}
					>
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white     mx-auto ' />
						<div className='h-[2px] w-12 bg-green-400' />

						<div
							className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim  font-num  rounded-3xl p-4 border-[2px] border-green-400 absolute left-[46px]  lg:left-[72px] transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-52 z-20 '
							tabIndex={0}
						>
							<p className='text-[2.5vw] sm:text-[12px]  text-gray-400'>
								2023 - Present
							</p>
							<p className='whitespace-nowrap font-title text-[4vw] font-semibold sm:text-[16px]  leading-none text-green-400'>
								Localization Quality Assurance
							</p>
							<p>Pole To Win Inc.</p>
							<p className='text-[12px] font-primary  transition-all opacity-0 group-hover: group-hover:opacity-100 duration-1000 group-focus:opacity-100'>
								Contributed to enhancing game quality by meticulously testing
								and resolving translation issues. Collaborated closely with
								developers and localization teams for over 10 game projects,
								ranging from AAA to indie titles.
							</p>
						</div>
					</motion.div>
					{/* left side disappear on smaller screens */}
					<motion.div
						variants={variants}
						initial='hidden'
						animate={controls}
						transition={{
							duration: 1.5,
							delay: 0.25,
							type: 'spring',
							bounce: 0.3,
						}}
						className={
							'hidden md:flex absolute -right-[10px] items-center top-[35%]'
						}
					>
						<div
							className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim  rounded-3xl p-4 border-[2px] right-[46px] lg:right-[72px] border-green-400 absolute transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-52'
							tabIndex={0}
						>
							<p className='text-[2.5vw] sm:text-[12px] font-num text-gray-400'>
								2022
							</p>
							<p className='whitespace-nowrap font-title text-[4vw] font-semibold sm:text-[16px]  leading-none text-green-400'>
								Full Stack Development Diploma
							</p>
							<p className='font-primary text-[4vw] sm:text-[16px]'>
								Lighthouse Labs
							</p>
							<p className='text-[12px] font-primary  transition-all opacity-0 group-hover: group-hover:opacity-100 duration-1000 group-focus:opacity-100'>
								Completed rigorous Full-Stack Web Development training at
								Lighthouse Labs, gaining expertise in JavaScript, ReactJS, and
								more. Demonstrated strong troubleshooting skills and dedication
								to delivering top-notch digital solutions.
							</p>
						</div>
						<div className='h-[2px] w-12 bg-green-400' />
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white mx-auto ' />
					</motion.div>
					{/* Appear on right side if small screen  */}
					<motion.div
						variants={variants}
						initial='hidden'
						animate={controls}
						transition={{
							duration: 1.5,
							delay: 0.25,
							type: 'spring',
							bounce: 0.3,
						}}
						className={
							'flex md:hidden absolute -left-[10px] items-center top-[37.5%] '
						}
					>
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white mx-auto ' />
						<div className='h-[2px] w-12 bg-green-400' />
						<div
							className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim  rounded-3xl p-4 border-[2px] border-green-400 absolute left-[46px]  lg:left-[72px] transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-52 z-20'
							tabIndex={0}
						>
							<p className='text-[2.5vw] sm:text-[12px] font-num text-gray-400'>
								2022
							</p>
							<p className='whitespace-nowrap font-title text-[3.5vw] font-semibold sm:text-[16px]  leading-none text-green-400'>
								Full Stack Development Diploma
							</p>
							<p className='font-primary text-[3.5vw] sm:text-[16px]'>
								Lighthouse Labs
							</p>
							<p className='text-[12px] font-primary  transition-all opacity-0 group-hover: group-hover:opacity-100 duration-1000 group-focus:opacity-100'>
								Completed rigorous Full-Stack Web Development training at
								Lighthouse Labs, gaining expertise in JavaScript, ReactJS, and
								more. Demonstrated strong troubleshooting skills and dedication
								to delivering top-notch digital solutions.
							</p>
						</div>
					</motion.div>

					<motion.div
						variants={variants}
						initial='hidden'
						animate={controls}
						transition={{
							duration: 1.5,
							delay: 0.5,
							type: 'spring',
							bounce: 0.3,
						}}
						className={
							'flex absolute -left-[10px] items-center top-[62.5%] sm:bottom-[35%] '
						}
					>
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white  mx-auto ' />
						<div className='h-[2px] w-12 bg-green-400' />
						<div
							className='w-[80vw] sm:w-[320px] flex flex-col gap-2 font-num bg-offprim  rounded-3xl p-4 border-[2px] border-green-400 absolute left-[46px]  lg:left-[72px] transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-52'
							tabIndex={0}
						>
							<p className='text-[2.5vw] sm:text-[12px]  text-gray-400'>
								2021 - 2022
							</p>
							<p className='whitespace-nowrap font-title text-[3.5vw] font-semibold sm:text-[16px]  leading-none text-green-400'>
								Client Engagement Specialist
							</p>
							<p className='font-primary text-[3.5vw] sm:text-[16px]'>
								Kraken Digital Assets Exchange
							</p>
							<p className='text-[12px] font-primary  transition-all opacity-0 group-hover: group-hover:opacity-100 duration-1000 group-focus:opacity-100'>
								Managed multiple customer inquiries simultaneously, efficiently
								addressing a wide range of issues, including account, billing,
								trading, and API concerns. Earned a solid reputation for
								accuracy, empathy, and consistently delivering exceptional
								service.
							</p>
						</div>
					</motion.div>
					{/* left side disappear on smaller screens */}
					<motion.div
						variants={variants}
						initial='hidden'
						animate={controls}
						transition={{
							duration: 1.5,
							delay: 0.75,
							type: 'spring',
							bounce: 0.3,
						}}
						className={
							'hidden md:flex absolute -right-[10px] items-center bottom-[15%]'
						}
					>
						<div
							className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim  rounded-3xl p-4 border-[2px] right-[46px] lg:right-[72px] border-green-400 absolute transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-52 '
							tabIndex={0}
						>
							<p className='text-[2.5vw] sm:text-[12px] font-num  text-gray-400'>
								2017-2019
							</p>
							<p className='whitespace-nowrap font-title text-[3.5vw] font-semibold sm:text-[16px]  leading-none text-green-400  '>
								L2 Cloud Support Technician
							</p>
							<p className='font-primary text-[3.5vw] sm:text-[16px]'>
								Ingram Micro Italy
							</p>
							<p className='text-[12px] font-primary  transition-all opacity-0 group-hover: group-hover:opacity-100 duration-1000 group-focus:opacity-100'>
								Provided diverse client support for Microsoft solutions, backup
								systems, and security solutions. Expertly recommended tailored
								solutions, ensuring high client satisfaction through prompt
								issue resolution.
							</p>
						</div>
						<div className='h-[2px] w-12 bg-green-400' />
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white mx-auto ' />
					</motion.div>
					{/* Appear on right side if small screen  */}
					<motion.div
						variants={variants}
						initial='hidden'
						animate={controls}
						transition={{
							duration: 1.5,
							delay: 0.75,
							type: 'spring',
							bounce: 0.3,
						}}
						className={
							'flex md:hidden absolute -left-[10px] items-center top-[87.5%] '
						}
					>
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white mx-auto ' />
						<div className='h-[2px] w-12 bg-green-400' />
						<div
							className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim rounded-3xl p-4 border-[2px] border-green-400 absolute left-[46px]  lg:left-[72px] transition-all  h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-52 z-20'
							tabIndex={0}
						>
							<p className='text-[2.5vw] sm:text-[12px] font-num  text-gray-400'>
								2017-2019
							</p>
							<p className='whitespace-nowrap font-title text-[3.5vw] font-semibold sm:text-[16px] leading-none text-green-400  '>
								L2 Cloud Support Technician
							</p>
							<p className='font-primary text-[3.5vw] sm:text-[16px]'>
								Ingram Micro Italy
							</p>
							<p className='text-[12px] font-primary  transition-all opacity-0 group-hover: group-hover:opacity-100 duration-1000 group-focus:opacity-100'>
								Provided diverse client support for Microsoft solutions, backup
								systems, and security solutions. Expertly recommended tailored
								solutions, ensuring high client satisfaction through prompt
								issue resolution.
							</p>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
};

export default Work;
