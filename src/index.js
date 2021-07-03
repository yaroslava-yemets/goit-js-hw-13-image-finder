import './sass/main.scss';
import ImagesApiService from './apiService.js';
import imagesListTpl from './templates/imagesListTpl.hbs';

import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";



const refs = {
    form: document.querySelector('#search-form'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    gallery: document.querySelector('.gallery'),
    scrollBtn: document.querySelector('.btn'),
};

const imagesApiService = new ImagesApiService(); 


refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch (evt) {
    evt.preventDefault();

    imagesApiService.query = evt.currentTarget.elements.query.value;

    if(imagesApiService.query === '') {
        return error({
            text: "Sorry, but for start of search you have to enter the word",
            delay: 3000,
            mouseReset: true,
        });
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