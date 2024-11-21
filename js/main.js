import { getPictures } from './data.js';
import { renderPictures } from './picture.js';

const pictureContainer = document.querySelector('.pictures');

renderPictures(getPictures(), pictureContainer);
