import React from 'react'

const Footer = () => {
	const contacts = [
		{name: 'telegram', link:'https://t.me/Ms_Lapin'},
		{name: 'whatsapp', link:'https://wa.me/+79183855713'},
		{name: 'github', link:'https://github.com/nataoleynikova'},
		{name: 'email', link:'mailto:olejnikova-n@yandex.ru'},
	];

	// !!! что-то написать перед ссылками типа такого: https://mattfarley.ca/
	
	return (
		<section 
			id='footer'
			className='bg-gray-800 p-10 text-white text-center'
		>
			<div>одухотворенное блабла как здесь в футере <a href='https://mattfarley.ca'>(тык)</a></div>

			<div className='flex m-10 text-xl text-gray-300 justify-center gap-12'>
				{contacts.map((contact, i) => (
					<div key={i} className='cursor-pointer hover:text-white'>
						<a href={contact.link} target='_blank'>
							<p>{contact.name}</p>
						</a>
					</div>
				))}
			</div>

			<div className='text-l'>
				Handcrafted by me :)
			</div>
		</section>
	)
}

export default Footer