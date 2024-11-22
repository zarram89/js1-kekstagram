import { getPictures } from './data.js';
import { renderPictures } from './picture.js';
import './form.js';

const pictureContainer = document.querySelector('.pictures');

renderPictures(getPictures(), pictureContainer);
