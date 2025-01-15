import React from 'react';
import html from '../assets/icons/html-5.png';
import css from '../assets/icons/css.png';
import sass from '../assets/icons/sass.png';
import tailwind from '../assets/icons/tailwind.png';
import bootstrap from '../assets/icons/bootstrap.png';
import js from '../assets/icons/javascript.png';
import jquery from '../assets/icons/jquery.png';
import react from '../assets/icons/React.png';
import anime from '../assets/icons/anime.png';
import ts from '../assets/icons/typescript.png';
import archive from '../assets/icons/Archive.png';
import nodejs from '../assets/icons/Nodejs.png';

const Skills = () => {
	const skills = [
		{logo: html, name: "HTML"},
		{logo: css,	name: "CSS"},
		{logo: sass, name: "Sass"},
		{logo: tailwind, name: "Tailwind"},
		{logo: bootstrap, name: "Bootstrap"},
		{logo: js,	name: "JavaScript"},
		{logo: ts, name: "TypeScript"},
		{logo: jquery, name: "jQuery"},
		{logo: react, name: "React"},
		{logo: anime, name: "Anime.js"},
		{logo: archive, name: "Gulp / Webpack / Vite"},
		{logo: nodejs, name: "NodeJS"}
	]

	return (
		<section 
			id='skills' 
			className='py-10 bg-gray-800 relative'
		>
			<div className='text-center mt-8 text-gray-100'>

				<h3 className='text-4xl font-semibold'>Мои <span className='text-cyan-600'>навыки</span></h3>

				<div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
					{
						skills.map((skill, i) => (
							<div 
								key={i} 
								className='border-2 border-cyan-600 relative min-w-40 max-w-66 bg-gray-400 p-10 rounded-xl'
							>
								<div className='flex items-center rounded-full justify-center'>
									<div className='text-6xl'>
										<img src={skill.logo} alt="logo" className='w-20 h-20'/>
									</div>
								</div>
								<p className="text-xl mt-3 text-black">{skill.name}</p>
							</div>
						))
					}
				</div>

			</div>
		</section>
	)
}

export default Skills