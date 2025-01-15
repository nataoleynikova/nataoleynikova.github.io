import React, { useEffect, useState } from 'react';

const Navbar = () => {
	const menuLinks = [
		{name: "обо мне", link: "#about"},
		{name: "мои навыки", link: "#skills"},
		{name: "мои проекты", link: "#projects"},
		{name: "контакты", link: "#contacts"},
	];

	const [sticky, setSticky] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 0 ? setSticky(true) : setSticky(false);
		});
	});

	return (
		<nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'md:bg-white/60 text-gray-900' : 'text-white'}`}>
			<div className='flex items-center justify-between'>
				<div></div>

				<div className={`${sticky ? 'md:bg-white/0 bg-white' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 bg-white rounded-bl-full`}>
					<ul className='flex gap-1 py-2'>
						{menuLinks.map((menu, i) => (
							<li key={i} className='px-6 pb-1 hover:text-cyan-600'>
								<a href={menu.link}>{menu.name}</a>
							</li>
						))}
					</ul>
				</div>

				<div 
					onClick={() => setOpen(!open)}
					className={`z-[999] ${open ? 'text-gray-900' : 'text-gray-100'} text-3xl md:hidden m-5`}
				>
					<ion-icon name='menu'></ion-icon>
				</div>

				<div className={`md:hidden text-gray-900 absolute w-1/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? 'right-0' : 'right-[-100%]'}`}>
					<ul className='flex flex-col h-full gap-10 py-2 justify-center'>
						{menuLinks.map((menu, i) => (
							<li key={i} className='px-6 hover:text-cyan-600'>
								<a href={menu.link}>{menu.name}</a>
							</li>
						))}
					</ul>
				</div>

			</div>
		</nav>
	)
}

export default Navbar