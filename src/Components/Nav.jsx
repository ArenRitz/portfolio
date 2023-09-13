import React, { useRef, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useInView } from 'framer-motion';
import cx from 'classnames';
import { motion, useAnimation, useScroll } from 'framer-motion';

const navVariants = {
	hidden: {
		opacity: 0,
		y: -40,
	},
	inView: {
		opacity: 1,
		y: 0,
	},
};

const Nav = ({ aboutView, projectsView, workView, contactView }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { scrollY } = useScroll();
	const navControls = useAnimation();
	const navButton = useRef(null);

	const [width, setWidth] = useState(window.innerWidth);

	const [menuOpen, setMenuOpen] = useState(false);
	const [scroll, setScroll] = useState(0);
	const [navOpen, setNavOpen] = useState(true);

	const handleMenuOpen = () => {
		navButton.current.focus();
		if (menuOpen) {
			document.activeElement.blur();
		}
		setMenuOpen(!menuOpen);
	};

	const navInView = cx({
		'opacity-1': isInView,
		'opacity-0': !isInView,
		'translate-y-0': isInView,
		'-translate-y-20': !isInView,
	});

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
			if (width < 1024) {
				console.log('small');
				navControls.start('inView');
				navControls.start({ background: '#00000' });
			} else {
				if (scroll === 0) {
					navControls.start({ background: '#181818' });
				}
			}
		};

		const handleNavScroll = () => {
			setScroll(scrollY.current);

			if (scrollY.current > 10) {
				navControls.start({ background: '#00000' });
			}

			if (scrollY.getPrevious() > scrollY.current) {
				if (scrollY.current === 0) {
					if (width >= 1024) {
						navControls.start({ background: '#181818' });
					}
				} else {
					navControls.start({ background: '#00000' });
				}
				navControls.start('inView');
				console.log('showing');
			} else if (
				scrollY.current > 100 &&
				scrollY.getPrevious() < scrollY.current
			) {
				if (width >= 1024) {
					console.log('hiding ' + scroll);
					navControls.start({ background: '#00000' });
					navControls.start('hidden');
				}
			}
		};

		window.addEventListener('resize', handleResize);
		const unsubY = scrollY.on('change', handleNavScroll);

		return () => {
			unsubY();
			window.removeEventListener('resize', handleResize);
		};
	}, [scrollY, width, scroll]);

	return (
		<motion.nav
			variants={navVariants}
			animate={navControls}
			transition={{ duration: 0.25 }}
			ref={ref}
			className=' z-50 h-16 w-full fixed flex justify-between items-center bg-black lg:bg-[#181818] '
		>
			<p
				className={
					'cursor-pointer  text-[30px] lg:text-[2vw] font-primary leading-none text-green-400 ml-[2vw] items-center duration-[1000ms] transition-all ' +
					navInView
				}
			>
				{'</>'}
			</p>

			<button
				ref={navButton}
				tabIndex={0}
				className={'lg:hidden mr-[2vw]  p-2 group/nav ' + navInView}
				onClick={handleMenuOpen}
			>
				<GiHamburgerMenu className=' text-[30px] text-green-400 ' />
				<div className='flex flex-col items-center py-20 gap-8 absolute w-[50vw] -right-[19px] top-[55px] h-[calc(100vh-55px)] bg-black  shadow-xl shadow-white/20 z-50 transition-all duration-500 translate-x-[50vh] opacity-0 group-focus/nav:opacity-100  group-focus/nav:translate-x-0'>
					<a
						onClick={() => aboutView()}
						className={
							'cursor-pointer z-20 relative group duration-[1000ms] transition-all w-fit ' +
							navInView
						}
					>
						<span className='font-num text-green-400 text-[16px] md:text-[24px]'>
							01.&nbsp;
						</span>
						<span className='font-title text-white text-[16px] md:text-[24px]'>
							ABOUT
						</span>
						<div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all' />
					</a>

					<a
						onClick={() => projectsView()}
						className={
							'z-20 relative group duration-[900ms] delay-[100ms] transition-all w-fit ' +
							navInView
						}
					>
						<span className='font-num text-green-400 text-[16px] md:text-[24px]'>
							02.&nbsp;
						</span>
						<span className='font-title text-white text-[16px] md:text-[24px]'>
							EXPERIENCE
						</span>
						<div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all' />
					</a>
					<a
						onClick={() => workView()}
						className={
							'z-20 relative group duration-[800ms] delay-[200ms] transition-all w-fit ' +
							navInView
						}
					>
						<span className='font-num text-green-400 text-[16px] md:text-[24px]'>
							03.&nbsp;
						</span>
						<span className='font-title text-white text-[16px] md:text-[24px]'>
							WORK
						</span>
						<div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all' />
					</a>

					<a
						onClick={() => contactView()}
						className={
							'z-20 relative group duration-700 delay-[300ms] transition-all w-fit ' +
							navInView
						}
					>
						<span className='font-num text-green-400 text-[16px] md:text-[24px]'>
							04.&nbsp;
						</span>
						<span className='font-title text-white text-[16px] md:text-[24px]'>
							CONTACT
						</span>
						<div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all' />
					</a>
				</div>
			</button>

			<div
				className={
					'hidden lg:flex gap-8 text-[1.1vw] xl:text-[17px]  mr-[2vw] '
				}
			>
				<a
					onClick={() => aboutView()}
					className={
						'cursor-pointer z-20 relative group duration-[1000ms] transition-all ' +
						navInView
					}
				>
					<span className='font-num text-green-400'>01.&nbsp;</span>
					<span className='font-title text-white'>ABOUT</span>
					<div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all' />
				</a>

				<a
					onClick={() => projectsView()}
					className={
						'cursor-pointer z-20 relative group duration-[900ms] delay-[100ms] transition-all ' +
						navInView
					}
				>
					<span className='font-num text-green-400'>02.&nbsp;</span>
					<span className='font-title text-white'>EXPERIENCE</span>
					<div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all' />
				</a>
				<a
					onClick={() => workView()}
					className={
						'cursor-pointer  z-20 relative group duration-[800ms] delay-[200ms] transition-all ' +
						navInView
					}
				>
					<span className='font-num text-green-400'>03.&nbsp;</span>
					<span className='font-title text-white'>WORK</span>
					<div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all' />
				</a>

				<a
					onClick={() => contactView()}
					className={
						'cursor-pointer z-20 relative group duration-700 delay-[300ms] transition-all ' +
						navInView
					}
				>
					<span className='font-num text-green-400'>04.&nbsp;</span>
					<span className='font-title text-white'>CONTACT</span>
					<div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all' />
				</a>
			</div>
		</motion.nav>
	);
};

export default Nav;
