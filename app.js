const access_key = 'tjhU1W53pUTud8SOKjhtl8Mmdr9rr1fTjSRUXIpQFA0';

const random_photo_url = `https://api.unsplash.com//photos/random?client_id=${access_key}&count=20`;

const gallery = document.querySelector('.gallery');

let allImages; // this will store all the images

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
        
        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';

        gallery.appendChild(img);
    })
}

getImages()