window.addEventListener('DOMContentLoaded', () => {
	const html = document.documentElement,
			burgerButton = document.querySelector('.icon-menu');

	burgerButton.addEventListener('click', () => {
		html.classList.toggle('menu-open')
	})

})