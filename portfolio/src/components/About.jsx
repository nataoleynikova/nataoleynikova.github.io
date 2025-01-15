import React from 'react';
// import hh_ru_logo from '../assets/images/hh_ru_logo.png'

const About = () => {

	return (
		<section 
			id='about'
			className='py-10 px-20 text-white text-center mt-8'
		>
			<h3 className='text-4xl font-semibold'>Обо <span className='text-cyan-600'>мне</span></h3>
			<p className='text-gray-300 my-7 text-lg leading-7'>
				Самостоятельно обучаюсь и развиваюсь в сфере frontend-разработки.<br />
				Умею работать в команде, чту дедлайны и ТЗ.
			</p>
			<div className='flex gap-10 justify-center mt-8'>
				<a href="./src/assets/my_cv.pdf" download>
					<button className='btn-primary'>Скачать резюме</button>
				</a>
				<a href="https://noginsk.hh.ru/resume/ad73503dff099627140039ed1f684658313537" target='_blank'>
					<button className='btn-primary'>Перейти на HeadHunter</button>
				</a>
			</div>
		</section>
	)
}

export default About