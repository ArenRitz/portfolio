import React from 'react';
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';

const ProjectItem = ({ projectInfo }) => {
	const stack = projectInfo.stack.map((item) => {
		return (
			<p
				key={item}
				className='text-black w-fit h-fit px-2 rounded-md bg-green-400 text-[2.5vw] sm:text-[12px]  font-primary'
			>
				{item}
			</p>
		);
	});

	return (
		<>
			<div className='w-90% sm:max-w-[420px] sm:max-h-[488px] bg-offprim  rounded-3xl flex flex-col  group relative transition-all border-[1px] border-transparent hover:border-[1px] hover:border-green-400'>

				<img src={projectInfo.img} alt='' className='transition-all grayscale group-hover:grayscale-0 w-full h-[50%] rounded-t-3xl' />
				<div className='flex flex-col py-4 px-4 gap-4 justify-between h-full'>
				<p before={'>> '} className='font-title text-[5vw] sm:text-[24px] leading-none text-green-400 before:content-[attr(before)] before:text-white font-semibold'>
					{projectInfo.name}
				</p>

				<p className='font-primary text-[4vw] sm:text-[16px]'>{projectInfo.desc}</p>

				<div className='flex flex-wrap gap-[8px] h-8 '>{stack}</div>
				{projectInfo.hosted ? (
					<div className='flex gap-4 justify-center '>
						<a
							href={projectInfo.hosted}
							target='_blank'
							rel='noreferrer'
							className='text-[5vw] mt-2  sm:text-[30px] hover:text-green-400 transition-all'
						>
							<BiLinkExternal />
						</a>
						<a
							href={projectInfo.github}
							target='_blank'
							rel='noreferrer'
							className='text-[5vw] mt-2  sm:text-[30px] hover:text-green-400 transition-all'
						>
							<BiLogoGithub />
						</a>
					</div>
				) : (
					<div className='flex mt-2 gap-4 justify-center '>
						<a
							href={projectInfo.github}
							target='_blank'
							rel='noreferrer'
							className='text-[5vw] sm:text-[30px] transition-all hover:text-green-400  '
						>
							<BiLogoGithub className='' />
						</a>
					</div>
				)}
				</div>
			</div>
		</>
	);
};

export default ProjectItem;
