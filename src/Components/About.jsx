import React from 'react';

const About = () => {
	return (
		<div className='w-full mt-[20vh] '>
			<div className='w-full lg:w-[50%] lg:max-w-[759px] m-auto border-l-2 border-green-400' >
				<div className='ml-4 lg:ml-12 mx-auto max-w-[710px]'>
					<p
						before='01. '
						className='text-[6vw] lg:text-[2.5vw] xl:text-[39px] font-title font-bold before:content-[attr(before)] before:font-num before:text-green-400'
					>
						ABOUT ME
					</p>
					<p className='mt-6 font-primary text-[4vw] lg:text-[1.2vw] xl:text-[16px] '>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						molestie at est ac fermentum. Donec a erat eu tellus congue pharetra
						et vitae ipsum. Curabitur non nibh vel nulla posuere rutrum. Proin
						egestas rhoncus dui sit amet elementum. Sed volutpat, massa eget
						cursus sollicitudin, mauris nunc pharetra lorem, nec tempus odio leo
						vel metus. Sed ex lectus, eleifend in viverra eu, placerat sed
						ligula. Sed interdum dui nisi, ac rutrum lorem pharetra in. Quisque
						vel leo nec arcu ultricies blandit. Phasellus neque risus, tristique
						et augue ac, ultricies finibus diam. Pellentesque quis posuere erat.
						Duis non nisi sit amet turpis ultricies efficitur. Donec auctor
						congue tellus nec tincidunt. Quisque porttitor vehicula libero, a
						porta enim tristique quis. Donec tempor cursus ante, nec mollis leo
						dignissim vitae. Aliquam erat volutpat.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
