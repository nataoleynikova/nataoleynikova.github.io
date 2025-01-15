import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import shelby from '../assets/images/shelby.png';
import agency from '../assets/images/agency.png';
import revered from '../assets/images/revered.png';
import klerk from '../assets/images/klerk.png';
import animation from '../assets/images/animation.gif';

const Projects = () => {
	const projects = [
		{
			img: shelby, 
			name: 'Сайт энергетической компании',
			github_link: 'https://github.com/nataoleynikova/shelbysite',
			live_link: 'https://shelbysite-9544c.web.app/'
		},
		{
			img: agency,
			name: 'Сайт турагентства',
			github_link: 'https://github.com/nataoleynikova/travel_agency',
			live_link: 'https://nataoleynikova.github.io/travel-agency/html/'
		},
		{
			img: revered,
			name: 'Интерфейс страницы для компании REVERED {PRO}',
			github_link: 'https://github.com/nataoleynikova/revered_pro',
			live_link: 'https://nataoleynikova.github.io/revered_pro/dist/index.html'
		},
		{
			img: klerk,
			name: 'Интерфейс страницы для компании Клерк.Ру',
			github_link: 'https://github.com/nataoleynikova/klerk.ru',
			live_link: 'https://nataoleynikova.github.io/klerk.ru/'
		},
		{
			img: animation,
			name: 'Анимация',
			github_link: 'https://github.com/nataoleynikova/animation',
			live_link: 'https://nataoleynikova.github.io/animation/starfall/'
		},
	]

	return (
		<section 
			id='projects'
			className='py-10 px-20 text-white text-center mt-8'
		>
			<h3 className='text-4xl font-semibold'>Мои <span className='text-cyan-600'>проекты</span></h3>

			<div className='flex max-w-6xl p-5 mx-auto mt-6 items-center relative'>
				<div className='w-full'>
					<Swiper 
						slidesPerView={1.2}
						spaceBetween={20}
						breakpoints={{
							768: {
								slidesPerView: 2,
							},
						}}
						loop={true}
						autoplay={{delay: 10000}}
						pagination={{clickable: true}}
						modules={[Pagination, Autoplay]}
					>
						{projects.map((project_info, i) => (
							<SwiperSlide key={i}>
								<div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
									<img src={project_info.img} alt="project image" className='rounded-lg'/>
									<h3 className='text-xl my-4'>{project_info.name}</h3>
									<div className='flex gap-3'>
										<a 
											href={project_info.github_link} 
											target='_blank'
											className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'
										>
											Github
										</a>
										<a 
											href={project_info.live_link} 
											target='_blank'
											className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'
										>
											Ссылка на сайт
										</a>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

				</div>
			</div>
		</section>
	)
}

export default Projects