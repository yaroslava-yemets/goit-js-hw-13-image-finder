import './sass/main.scss';
import ImagesApiService from './apiService.js';



const refs = {
    form: document.querySelector('#search-form'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const imagesApiService = new ImagesApiService(); 

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch (evt) {
    evt.preventDefault();

    imagesApiService.query = evt.currentTarget.elements.query.value;
    imagesApiService.fetchImages();
};

function onLoadMore () {
    imagesApiService.fetchImages();
}

