import './sass/main.scss';
import ImagesApiService from './apiService.js';
import imagesListTpl from './templates/imagesListTpl.hbs';



const refs = {
    form: document.querySelector('#search-form'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    gallery: document.querySelector('.gallery'),
    scrollBtn: document.querySelector('.btn'),
};

const imagesApiService = new ImagesApiService(); 

// const element = document.getElementById('.my-element-selector');
refs.scrollBtn.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch (evt) {
    evt.preventDefault();

    imagesApiService.query = evt.currentTarget.elements.query.value;

    if(imagesApiService.query === '') {
        return alert('Please enter the word for starting the search');
    };

    imagesApiService.resetPage();
    imagesApiService.fetchImages().then(images => {
        clearGalleryContainer();
        insertImagesMarkup(images);
    });
};

function onLoadMore () {
    imagesApiService.fetchImages().then(insertImagesMarkup);
};

function insertImagesMarkup (images) {
    refs.gallery.insertAdjacentHTML('beforeend', imagesListTpl(images));
};

function clearGalleryContainer () {
    refs.gallery.innerHTML = '';
};