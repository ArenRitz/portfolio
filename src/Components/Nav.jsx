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

			<div className='hidden lg:flex gap-8 text-[1.1vw] xl:text-[17px]  mr-[2vw]'>
				<a className='z-20 relative group'>
					<span className='font-num text-green-400'>01.&nbsp;</span>
					<span className='font-title text-white'>ABOUT</span>
                <div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all'/>
                </a>

				<a className='z-20 relative group'>
					<span className='font-num text-green-400'>02.&nbsp;</span>
					<span className='font-title text-white'>EXPERIENCE</span>
                    <div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all'/>
				</a>
				<a className='z-20 relative group'>
					<span className='font-num text-green-400'>03.&nbsp;</span>
					<span className='font-title text-white'>WORK</span>
                    <div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all'/>
				</a>

				<a className='z-20 relative group'>
					<span className='font-num text-green-400'>04.&nbsp;</span>
					<span className='font-title text-white'>CONTACT</span>
                    <div className='h-[1px] absolute bottom-0 left-0 right-0 mx-auto w-0 group-hover:w-full bg-green-400 transition-all'/>
				</a>
			</div>
		</nav>
	);
};

export default Nav;
