const requestURL = 'https://ktolman65.github.io/wdd230/finalProject/data/temples.json';

const templeCards = document.querySelector('.templeCards');


fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const temple = jsonObject['temples'];
		for (let i = 0; i < temple.length; i++) {

			let card = document.createElement('section');
			let name = document.createElement('h2');
			let image = document.createElement('img');
			let status = document.createElement('p');
			let address = document.createElement('p');
			let phone = document.createElement('p');
			let services = document.createElement('p');
			let servicesData = document.createElement('ul');
			let history = document.createElement('p');
			let historyData = document.createElement('ul');

			let likeBtn = document.createElement('button');
    	likeBtn.classList.add('btn', 'like')
			

			name.textContent = `${temple[i].name}`;
			status.textContent = `Temple Status: ${temple[i].status}`;
			address.textContent = `Address: ${temple[i].address}, ${temple[i].city}`;
			phone.textContent = `Phone: ${temple[i].phone}`;
			services.textContent = `Services:`;
			servicesData.innerHTML = `<li>${temples.clothing}</li><li>${temples.housing}</li><li>${temples.distribution}</li>`;
			history.textContent = `Milestones:`;
			historyData.innerHTML = `<li>Announced - ${temples.announced}</li><li>Dedicated - ${temples.dedicated}</li>`;
			likeBtn.textContent = `Like`;
		
			image.setAttribute('src', temple[i].imageurl);
			image.setAttribute('alt', `Picture of the ${temple[i].name}`);
			image.setAttribute('title', `Picture of the ${temple[i].name}`);

			card.appendChild(name);
			card.appendChild(image);
     	card.appendChild(status);
			card.appendChild(like-btn);
			card.appendChild(address);
			card.appendChild(phone);
			card.appendChild(services);
			card.appendChild(services-data);
			card.appendChild(history);
			card.appendChild(history-data);
		
			document.querySelector('div.cards').appendChild(card);

			likeBtn.addEventListener('click', () => {likeBtn.classList.toggle('liked')}, false);
    }
	});

function likedButton() {
  let likedBtn = document.querySelector('liked');
  localStorage.setItem('liked');
}