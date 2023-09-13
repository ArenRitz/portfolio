import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import cx from 'classnames';

const Work = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const timeLineInView = cx({
		'opacity-1': isInView,
		'opacity-0': !isInView,
		'translate-y-0': isInView,
		'translate-y-20': !isInView,
	});

	return (
		<>
			<div
				className={
					' mx-auto mt-16 ease-in transition-all delay-0 duration-[1000ms] ' +
					timeLineInView
				}
				ref={ref}
			>
				<div className='w-[4px] py-[350px] bg-green-400  ml-[5vw] sm:ml-[10vw] md:mx-auto relative'>
					<div
						className={
							'flex absolute -left-[10px] items-center top-[12.5%] transition-all delay-[0.3s] duration-[2000ms] ' +
							timeLineInView
						}
					>
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white     mx-auto ' />
						<div className='h-[2px] w-12 bg-green-400' />

						<div className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim  font-num  rounded-3xl p-4 border-[2px] border-green-400 absolute left-[46px]  lg:left-[72px] transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-48 z-20'>
							<p className='text-[2.5vw] sm:text-[12px]  text-gray-400'>
								2023 - Present
							</p>
							<p className='whitespace-nowrap font-title text-[4vw] font-semibold sm:text-[16px]  leading-none text-green-400'>
								Localization Quality Assurance
							</p>
							<p>Pole To Win Inc.</p>
							<p className='text-[12px] font-primary  transition-all opacity-0 group-hover: group-hover:opacity-100 duration-1000 group-focus:opacity-100'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								ipsum quas eos. Dolor tempora fugiat doloremque est excepturi
								voluptas labore, totam eius eligendi, maiores omnis laboriosam
								doloribus. Recusandae, quos praesentium.
							</p>
						</div>
					</div>
					{/* left side disappear on smaller screens */}
					<div
						className={
							'hidden md:flex absolute -right-[10px] items-center top-[35%] transition-all delay-[0.6s] duration-[2000ms] ' +
							timeLineInView
						}
					>
						<div className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim  rounded-3xl p-4 border-[2px] right-[46px] lg:right-[72px] border-green-400 absolute transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-48'>
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								ipsum quas eos. Dolor tempora fugiat doloremque est excepturi
								voluptas labore, totam eius eligendi, maiores omnis laboriosam
								doloribus. Recusandae, quos praesentium.{' '}
							</p>
						</div>
						<div className='h-[2px] w-12 bg-green-400' />
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white mx-auto ' />
					</div>
					{/* Appear on right side if small screen  */}
					<div
						className={
							'flex md:hidden absolute -left-[10px] items-center top-[37.5%] transition-all delay-[0.6s] duration-[2000ms] ' +
							timeLineInView
						}
					>
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white mx-auto ' />
						<div className='h-[2px] w-12 bg-green-400' />
						<div className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim  rounded-3xl p-4 border-[2px] border-green-400 absolute left-[46px]  lg:left-[72px] transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-48 z-20'>
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								ipsum quas eos. Dolor tempora fugiat doloremque est excepturi
								voluptas labore, totam eius eligendi, maiores omnis laboriosam
								doloribus. Recusandae, quos praesentium.{' '}
							</p>
						</div>
					</div>

					<div
						className={
							'flex absolute -left-[10px] items-center top-[62.5%] sm:bottom-[35%] transition-all delay-[0.9s] duration-[2000ms] ' +
							timeLineInView
						}
					>
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white  mx-auto ' />
						<div className='h-[2px] w-12 bg-green-400' />
						<div className='w-[80vw] sm:w-[320px] flex flex-col gap-2 font-num bg-offprim  rounded-3xl p-4 border-[2px] border-green-400 absolute left-[46px]  lg:left-[72px] transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-48'>
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								ipsum quas eos. Dolor tempora fugiat doloremque est excepturi
								voluptas labore, totam eius eligendi, maiores omnis laboriosam
								doloribus. Recusandae, quos praesentium.{' '}
							</p>
						</div>
					</div>
					{/* left side disappear on smaller screens */}
					<div
						className={
							'hidden md:flex absolute -right-[10px] items-center bottom-[15%] transition-all delay-[1.2s] duration-[2000ms] ' +
							timeLineInView
						}
					>
						<div className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim  rounded-3xl p-4 border-[2px] right-[46px] lg:right-[72px] border-green-400 absolute transition-all h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-48 '>
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								ipsum quas eos. Dolor tempora fugiat doloremque est excepturi
								voluptas labore, totam eius eligendi, maiores omnis laboriosam
								doloribus. Recusandae, quos praesentium.{' '}
							</p>
						</div>
						<div className='h-[2px] w-12 bg-green-400' />
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white mx-auto ' />
					</div>
					{/* Appear on right side if small screen  */}
					<div
						className={
							'flex md:hidden absolute -left-[10px] items-center top-[87.5%] transition-all delay-[1.2s] duration-[2000ms] ' +
							timeLineInView
						}
					>
						<div className='w-6 h-6 rounded-full bg-green-400 border-[2px] border-white mx-auto ' />
						<div className='h-[2px] w-12 bg-green-400' />
						<div className='w-[80vw] sm:w-[320px] flex flex-col gap-2 bg-offprim rounded-3xl p-4 border-[2px] border-green-400 absolute left-[46px]  lg:left-[72px] transition-all  h-28 hover:h-52 duration-1000 group overflow-hidden focus:h-48 z-20'>
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								ipsum quas eos. Dolor tempora fugiat doloremque est excepturi
								voluptas labore, totam eius eligendi, maiores omnis laboriosam
								doloribus. Recusandae, quos praesentium.{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Work;
