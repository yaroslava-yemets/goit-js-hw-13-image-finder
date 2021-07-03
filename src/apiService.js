const BASE_URL = 'https://pixabay.com/api/';  
const API_KEY = '22334944-1a4c27752b28577a34c92f730';

export default class ImagesApiService {
    constructor() {
        this.searchQuery ='';
        this.page = 1;
    }

    fetchImages () {
        console.log(this);

        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
        .then(response => response.json())
        .then(({hits}) => {
            this.incrementPage();
            return hits;
        });
    }

    incrementPage () {
        this.page +=1;
    }

    resetPage () {
        this.page =1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}