const access_key = 'tjhU1W53pUTud8SOKjhtl8Mmdr9rr1fTjSRUXIpQFA0';

const random_photo_url = `https://api.unsplash.com//photos/random?client_id=${access_key}&count=20`;

const gallery = document.querySelector('.gallery');

let allImages; // this will store all the images
let currentImage;

const getImages = () => {
    fetch(random_photo_url)
    .then(res => res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages);
    })
}

const makeImages = (data) => {
    data.forEach((item, index) => {
			let img = document.createElement('img')
			img.src = item.urls.regular
			img.className = 'gallery-img'

			gallery.appendChild(img)

			// popup image

			img.addEventListener('click', () => {
				currentImage = index
				showPopup(item)
			})
		})
}

const showPopup = (item) => {
	let popup = document.querySelector('.image-popup')
	const downloadBtn = document.querySelector('.download-btn')
	const closeBtn = document.querySelector('.close-btn')
	const image = document.querySelector('.large-img')

	popup.classList.remove('hide')
	downloadBtn.href = item.links.html
	image.src = item.urls.regular

	closeBtn.addEventListener('click', () => {
		popup.classList.add('hide')
	})
}

getImages() 