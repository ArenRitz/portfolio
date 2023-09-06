import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
	return (
		<nav className=' z-10 h-16 w-full absolute flex justify-between items-center'>
			<p className=' text-[6vw] lg:text-[2vw] font-title font-bold leading-none text-green-400 ml-[2vw]'>
				{'</>'}
			</p>

			<button className='lg:hidden mr-[2vw]  p-2'>
				<GiHamburgerMenu className=' text-[6vw] text-green-400' />
			</button>

			<div className='hidden  lg:flex gap-8 text-[1.2vw]   mr-[2vw]'>
				<a className='z-20 hover:underline text-green-400  border-green-400'>
					<span className='font-num '>01.&nbsp;</span>
					<span className='font-title text-white'>ABOUT</span>
				</a>

				<a className='z-20 hover:underline text-green-400  border-green-400'>
					<span className='font-num'>02.&nbsp;</span>
					<span className='font-title text-white'>EXPERIENCE</span>
				</a>
				<a className='z-20 hover:underline text-green-400  border-green-400'>
					<span className='font-num'>03.&nbsp;</span>
					<span className='font-title text-white'>WORK</span>
				</a>

				<a className='z-20 hover:underline text-green-400  border-green-400'>
					<span className='font-num'>04.&nbsp;</span>
					<span className='font-title text-white'>CONTACT</span>
				</a>
			</div>
		</nav>
	);
};

export default Nav;
