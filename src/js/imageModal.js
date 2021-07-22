
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

export default function onImageClick (evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    } else {
        basicLightbox.create(`<img src="${evt.target.dataset.source}" alt="picture">`).show();
    }
}
