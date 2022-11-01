import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryHtml = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryHtml);
gallery.addEventListener('click', onClick);
let instance;
function onClick(event) {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const src = event.target.dataset.source;
    const desc = event.target.alt;
    instance = basicLightbox.create(`<img src="${src}" alt="${desc}">`, {
      onShow: onShowModal,
      onClose: onCloseModal,
    });
    instance.show();
  }
}
function onShowModal() {
  document.addEventListener('keydown', onEscape);
}
function onCloseModal() {
  document.removeEventListener('keydown', onEscape);
}
function onEscape(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
