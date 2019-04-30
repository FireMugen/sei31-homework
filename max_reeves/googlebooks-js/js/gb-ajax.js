

const getBook = function () {
	const name = document.getElementById('name').value;
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${name}`);
	xhr.send(); // Asynchronous

	xhr.onreadystatechange = function () {
		if (xhr.readyState !== 4) {
			return;
		}
		const img = document.createElement('img');
		const data = JSON.parse( xhr.responseText );
		img.innerHTML = data.items[0].volumeInfo.imageLinks.smallThumbnail;
		// console.log(data);
		document.body.appendChild(img);
	}

};

document.getElementById('book').addEventListener('click', getBook);
