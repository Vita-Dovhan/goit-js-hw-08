
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const containerEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(element => {
    return `<div class="gallery__item">
    <a class="gallery__item" href="${element.original}">
    <img class="gallery__image"
    src="${element.preview}"
     alt="${element.description}" 
     title = "${element.description}" 
    captionDelay = 250ms>
    </a>
    </div>`;
  })
  .join('');
containerEl.insertAdjacentHTML('afterbegin', markup);

const gallery = new SimpleLightbox('.gallery__item a');
gallery.on('show.simplelightbox', function () {

});

console.log(galleryItems);