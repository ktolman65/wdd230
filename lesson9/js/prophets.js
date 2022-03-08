const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const prophet = jsonObject['prophets'];
		for (let i = 0; i < prophet.length; i++) {

			let card = document.createElement('section');
			let h2 = document.createElement('h2');
			let bd = document.createElement('p');
			let bp = document.createElement('p');
			let image = document.createElement('img');

			h2.textContent = `${prophet[i].name} ${prophet[i].lastname}`;

			bd.textContent = `Date of Birth: ${prophet[i].birthdate}`;

			bp.textContent = `Place of Birth: ${prophet[i].birthplace}`;

			image.setAttribute('src', prophet[i].imageurl);
			image.setAttribute('alt', `Portrait of ${prophet[i].name} ${prophet[i].lastname} - ${prophet[i].order}`); // Latter-day Prophet
			image.setAttribute('title', `Portrait of ${prophet[i].name} ${prophet[i].lastname} - ${prophet[i].order}`); // Latter-day Prophet

			card.appendChild(h2);
     	card.appendChild(bd);
			card.appendChild(bp);
			card.appendChild(image);

			document.querySelector('div.cards').appendChild(card);
		}
	});