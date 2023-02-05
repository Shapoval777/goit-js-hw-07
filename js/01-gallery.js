import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGallery(galleryItems);
galleryContainer.addEventListener('click', openBigPhoto)
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
function openBigPhoto(event) {
    event.preventDefault();
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`
        )
    instance.show();
    galleryContainer.addEventListener('keydown', event => {
        if(event.code === 'Escape') {
            instance.close();
        }
    })
}