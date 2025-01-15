import React from 'react';
import me_card from '../assets/images/me_card.jpeg';

const Card = () => {
	const socials = [
		{icon: 'paper-plane', link: 'https://t.me/Ms_Lapin'},
		{icon: 'logo-whatsapp', link: 'https://wa.me/+79183855713'},
		{icon: 'logo-github', link: 'https://github.com/nataoleynikova'}
	];

	return (
		<section
			id='home'
			className='min-h-screen flex py-10 md:flex-row flex-col items-center'
		>
			<div className='flex-1 flex items-center justify-center h-full'>
				<img src={me_card} alt="my photo" className='md:w-3/4 h-full object-cover'/>
			</div>

			<div className='flex-1 md:text-left text-center sm:mt-10'>
				<h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white'>
					<span className='text-cyan-600 md:text-6xl text-5xl font-semibold'>Привет!<br/></span> Меня зовут Олейникова Наталья
				</h1>
				
				<h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 text-gray-500'>Я — начинающий Frontend-разработчик</h4>

				<div className='flex mt-8 text-2xl items-center md:justify-start justify-center gap-5'>
					{socials.map((social, i) => (
						<div key={i} className='text-gray-600 hover:text-white cursor-pointer'>
							<a href={social.link} target='_blank'>
								<ion-icon name={social.icon}></ion-icon>
							</a>
						</div>
					))}
				</div>

			</div>

		</section>
	)
}

export default Card