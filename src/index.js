import './sass/main.scss';
import ImagesApiService from './apiService.js';
import imagesListTpl from './templates/imagesListTpl.hbs';



const refs = {
    form: document.querySelector('#search-form'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    gallery: document.querySelector('.gallery'),
};

const imagesApiService = new ImagesApiService(); 

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch (evt) {
    evt.preventDefault();

    imagesApiService.query = evt.currentTarget.elements.query.value;
    imagesApiService.resetPage();
        imagesApiService.fetchImages().then(images => console.log(images));
};

function onLoadMore () {
    imagesApiService.fetchImages().then(images => console.log(images));
}

