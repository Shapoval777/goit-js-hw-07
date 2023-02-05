
import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGallery(galleryItems);
function createGallery(items) {
    return items.map(({original, preview, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`
    }).join('');
}
galleryContainer.innerHTML = itemsMarkup;
new SimpleLightbox('.gallery .gallery__link', {'captionsData': 'alt', 'captionDelay': 250});

console.log(galleryItems);
