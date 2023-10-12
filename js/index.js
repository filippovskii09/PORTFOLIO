window.addEventListener('DOMContentLoaded', () => {

	// burger button
	const html = document.documentElement,
			burgerButton = document.querySelector('.icon-menu');

	burgerButton.addEventListener('click', () => {
		html.classList.toggle('menu-open')
	})

	// text animaion

	// const text = `Artur`; // Розділений текст з переносом рядка

	// let index = 0;

	// function type(selector, text) {
	// 	const typingText = document.querySelector(selector);
	//     typingText.textContent = text.slice(0, index);
	//     index++;
	//     if (index <= text.length) {
	//         setTimeout(type, 100); // Швидкість набору тексту (мілісекунди)
	//     }
	// }
	// type()

	// fetching data

	const container = document.querySelector('.projects__container');

	fetch("data-base.json")
		.then(response => response.json())
		.then(data => {
			const projects = data.projects;

			const ul = document.createElement("ul");
			ul.classList.add('projects__list')
			projects.forEach(item => {
				console.log(item);
				const li = document.createElement("li");
				li.classList.add('projects__item', 'projects-item')
				li.innerHTML = `
					<p class='projects-item__name'>
						<span>Project ${item.id}</span>
						<span class='projects-item__comment comment'>// ${item.name}</span> 
					</p>
					<div class='projects-item__wrapper'>
						<div class='projects-item__image'>
							<img src=${item.img} alt=${item.altImage}/>
						</div>
						<div class='projects-item__content'>
							<p class='projects-item__text'>${item.text}</p>
							<a class='projects-item__link' href=${item.link}>view-project</a>
						</div>
					</div>
				`
				ul.appendChild(li)
				if (item.text.lengh > 8) {
					const readMoreButton = document.createElement("button");
					readMoreButton.classList.add('projects-item__button')
					readMoreButton.innerText = "Read more";
					let isExpanded = false;

					readMoreButton.addEventListener('click', () => {
						isExpanded = !isExpanded;

						if (isExpanded) {
							li.querySelector('.projects-item__text').textContent = item.text;
							readMoreButton.innerText = "Close";
						}	else {
							li.querySelector('.projects-item__text').textContent = item.text.slice(0, 8);
							readMoreButton.innerText = "Read More";
						}
					})
					li.querySelector('projects-item__content').appendChild(readMoreButton);
				}
			})
			container.appendChild(ul)
		
		})
		.catch(error => {
			console.error(error);
		})
	
})