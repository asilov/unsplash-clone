const access_key = 'tjhU1W53pUTud8SOKjhtl8Mmdr9rr1fTjSRUXIpQFA0';

const random_photo_url = `https://api.unsplash.com//photos/random?client_id=${access_key}&count=30`;

const gallery = document.querySelector('.gallery');

let allImages; // this will store all the images

const getImages = () => {
    fetch(random_photo_url)
    .then(res => res.json())
    .then(data => console.log(data))
}