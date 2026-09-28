import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryAsset = file =>
  `${import.meta.env.BASE_URL}img/gallery/${file}`;

const images = [
  {
    preview: galleryAsset('preview-01.jpg'),
    original: galleryAsset('original-01.jpg'),
    description: 'Hokkaido Flower',
  },
  {
    preview: galleryAsset('preview-02.jpg'),
    original: galleryAsset('original-02.jpg'),
    description: 'Container Haulage Freight',
  },
  {
    preview: galleryAsset('preview-03.jpg'),
    original: galleryAsset('original-03.jpg'),
    description: 'Aerial Beach View',
  },
  {
    preview: galleryAsset('preview-04.jpg'),
    original: galleryAsset('original-04.jpg'),
    description: 'Flower Blooms',
  },
  {
    preview: galleryAsset('preview-05.jpg'),
    original: galleryAsset('original-05.jpg'),
    description: 'Alpine Mountains',
  },
  {
    preview: galleryAsset('preview-06.jpg'),
    original: galleryAsset('original-06.jpg'),
    description: 'Mountain Lake Sailing',
  },
  {
    preview: galleryAsset('preview-07.jpg'),
    original: galleryAsset('original-07.jpg'),
    description: 'Alpine Spring Meadows',
  },
  {
    preview: galleryAsset('preview-08.jpg'),
    original: galleryAsset('original-08.jpg'),
    description: 'Nature Landscape',
  },
  {
    preview: galleryAsset('preview-09.jpg'),
    original: galleryAsset('original-09.jpg'),
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
