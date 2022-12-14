import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () { });

gallery.options.captionsData = 'alt';
gallery.options.captionDelay = 250;

function createGalleryItemsMarkup(items) {
    return items.map(({description, original, preview}) => {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`;
}).join('');  
}
