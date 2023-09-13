import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useInView, motion, useAnimation } from 'framer-motion';
import cx from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Contact = () => {
	const form = useRef();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		if (e.target.name === 'user_name') {

			setName(e.target.value);
		} else if (e.target.name === 'user_email') {
			
			setEmail(e.target.value);
		} else if (e.target.name === 'message') {
			setMessage(e.target.value);
		}
	};




	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE,
				import.meta.env.VITE_EMAILJS_TEMPLATE,
				form.current,
				import.meta.env.VITE_EMAILJS_KEY
			)
			.then(
				(result) => {
					form.reset
					
					console.log(result.text);
					setEmail('')
					setName('')
					setMessage('')
					toast.success(<><p>Your message has been sent!</p> <p>I will get back to you shortly!</p> </>, {
						position: 'bottom-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored',
					});

				},
				(error) => {
					toast.error('Message Failed to Send! \n Please try again later!', {
						position: 'bottom-center',
						autoClose: 3000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored',
					});
				}
			);
	};

	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('inView');
		}
	}, [isInView, controls]);

	return (
		<div ref={ref} className={'w-full  mt-16 pb-[30vh]'}>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className='w-full sm:w-[80%] lg:w-[50%] sm:max-w-[759px] m-auto border-l-2 border-green-400 py-8'
			>
				<div className='ml-4 sm:ml-12 mx-auto max-w-[710px]'>
					<form ref={form} onSubmit={sendEmail}>
						<div className='grid gap-6 mb-6 md:grid-cols-2'>
							<motion.div
								variants={variants}
								initial='hidden'
								animate={controls}
								transition={{ duration: 1.5, type: 'spring', bounce: 0.3 }}
							>
								<label
									for='user_name'
									className='block mb-4 font-primary text-[5vw] sm:text-[24px] text-green-400 before:content-[attr(before)] before:text-white '
									before={'>> '}
								>
									Name
								</label>
								<input
									type='text'
									name='user_name'
									id='user_name'
									className='bg-offprim  border border-gray-300 text-white text-sm rounded-lg  focus:ring-green-400 focus:border-green-400 focus:outline-none block w-full p-2.5 '
									placeholder='John Doe'
									required
									onChange={handleChange}
									value={name}
								/>
							</motion.div>
							<motion.div
								variants={variants}
								initial='hidden'
								animate={controls}
								transition={{
									duration: 1.5,
									delay: 0.2,
									type: 'spring',
									bounce: 0.3,
								}}
							>
								<label
									for='user_email'
									className='block mb-4 font-primary text-[5vw] sm:text-[24px] text-green-400 before:content-[attr(before)] before:text-white '
									before={'>> '}
								>
									Email
								</label>
								<input
									type='email'
									id='user_email'
									name='user_email'
									className='bg-offprim  border border-gray-300 text-white text-sm rounded-lg  focus:ring-green-400 focus:border-green-400 focus:outline-none block w-full p-2.5 '
									placeholder='John@Doe.com'
									required
									onChange={handleChange}
									value={email}
								/>
							</motion.div>
						</div>
						<motion.div
							variants={variants}
							initial='hidden'
							animate={controls}
							transition={{
								duration: 1.5,
								delay: 0.4,
								type: 'spring',
								bounce: 0.3,
							}}
							className={'mb-8 mt-12'}
						>
							<label
								for='message'
								className='block mb-4 font-primary text-[5vw] sm:text-[24px] text-green-400 before:content-[attr(before)] before:text-white '
								before={'>> '}
							>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								className='bg-offprim border border-gray-300 text-white text-sm rounded-lg focus:ring-green-400 focus:border-green-400 focus:outline-none block w-full p-2.5 min-h-[200px]'
								placeholder='Type your message here'
								required
								onChange={handleChange}
								value={message}
							/>
						</motion.div>
						<div className='flex justify-end'>
							<button
								type='submit'
								className='transition-all duration-200 font-primary w-fit py-2 px-6 mt-6 sm:mt-8 border-[1px] sm:border-2 text-[4vw] sm:text-[16px] rounded-xl border-green-400 text-green-400 hover:bg-green-400 hover:text-black '
							>
								SEND
							</button>
						</div>
					</form>
				</div>
				<ToastContainer />
			</motion.div>
		</div>
	);
};

export default Contact;
