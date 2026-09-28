import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: '/img/gallery/preview-01.jpg',
    original: '/img/gallery/original-01.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: '/img/gallery/preview-02.jpg',
    original: '/img/gallery/original-02.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: '/img/gallery/preview-03.jpg',
    original: '/img/gallery/original-03.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: '/img/gallery/preview-04.jpg',
    original: '/img/gallery/original-04.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: '/img/gallery/preview-05.jpg',
    original: '/img/gallery/original-05.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: '/img/gallery/preview-06.jpg',
    original: '/img/gallery/original-06.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: '/img/gallery/preview-07.jpg',
    original: '/img/gallery/original-07.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: '/img/gallery/preview-08.jpg',
    original: '/img/gallery/original-08.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: '/img/gallery/preview-09.jpg',
    original: '/img/gallery/original-09.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
