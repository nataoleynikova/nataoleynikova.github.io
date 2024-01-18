document.addEventListener("DOMContentLoaded", () => {
	
	let button = document.querySelector(".play-button");
	button.addEventListener('click', () => {
		anime({
			targets: document.querySelectorAll(".dot"),
		
			loop: false,
			easing: "linear",
			opacity: [
				{ value: 1, duration: 100, delay: anime.stagger(2) },
				{ value: 0, duration: function(){return anime.random(500,1500);}}
			],
			width: { 
				value: 2, duration: 500, delay: anime.stagger(2) 
			},
			height: { 
				value: 2, duration: 500, delay: anime.stagger(2) 
			},
			
			translateX: {
				value: function() {
					return anime.random(-30, 30);
				},
				duration: 4000,
				delay: anime.stagger(2)
			},
	
			translateY: {
				value: function() {
					return anime.random(-30, 30);
				},
				duration: 4000,
				delay: anime.stagger(2)
			},
		});
	})
	
	let coffee = document.querySelector(".coffee");
	let foam = document.querySelector('.foam');
	
	let a = 1;
	let l = 450;
	
	for (let i = 0; i <= l; i += 1) {
		let angle = 0.1 * i;
		let x = (a * angle) * Math.cos(angle);
		let y = (a * angle) * Math.sin(angle);
	
		let n = 3;
		
		for (let j = 0; j < n; j++) {
			let dot = document.createElement("div");
			dot.classList.add("dot");
			coffee.insertBefore(dot, foam);
	
			let size = anime.random(5, 10);
		
			dot.style.width = size + "px";
			dot.style.height = size + "px";
		
			dot.style.left = x + anime.random(50, 50) + "%";
			dot.style.top = y + anime.random(50, 50) + "%";
		};
	};
})