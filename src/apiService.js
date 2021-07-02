
// export default function fetchImages(searchQuery) {
    
//     const API_KEY = '22334944-1a4c27752b28577a34c92f730';

    // // return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=номер_страницы&per_page=12&key=${API_KEY}`)
    // return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`)
    //  .then(response => { 
    //     if(!response.ok) {
    //         throw Error(`Sorry, but such country doesn't exist`);
    //     }
    //     return response.json()});
// }

export default class ImagesApiService {
    constructor() {
        this.searchQuery ='';
        this.page = 1;
    }

    fetchImages () {
        console.log(this);
        const BASE_URL = 'https://pixabay.com/api/';  
        const API_KEY = '22334944-1a4c27752b28577a34c92f730';

        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
        .then(response => { 
        if(!response.ok) {
            throw Error(`Sorry, but such country doesn't exist`);
        }
        return response.json()})
        .then(image => {
            this.page += 1;
        });
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}