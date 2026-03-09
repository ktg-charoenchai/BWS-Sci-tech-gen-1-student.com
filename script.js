const wrapper = document.querySelector('section');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const wrapperNoRect = noBtn.getBoundingClientRect();

noBtn.addEventListener("click", () =>{

	const random_width_position = 
	Math.floor(Math.random()*
		(wrapperRect.width - wrapperNoRect.width)
	) +1;

	const random_height_position = 
	Math.floor(Math.random()*
		(wrapperRect.height - wrapperNoRect.height)
	) +1;

	noBtn.style.left = random_width_position + 'px';
	noBtn.style.top = random_height_position + 'px';
})

const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

yesBtn.addEventListener("click", () => wrapper.classList.add("active"))
closeBtn.addEventListener("click", () => wrapper.classList.remove("active"))
