import { showBigPicture } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const container = document.querySelector('.pictures');

const createPicture = (pictureData) => {
  const {url, description, likes, comments} = pictureData;

  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent =  comments.length;
  pictureElement.querySelector('.picture__likes').textContent =  likes;

  const onPictureElementClick = (evt) => {
    evt.preventDefault();
    showBigPicture(pictureData);
  };

  pictureElement.addEventListener('click', onPictureElementClick);

  return pictureElement;
};

const renderPictures = (picturesData) => {
  document.querySelectorAll('.picture').forEach((element) => element.remove());

  const fragment = document.createDocumentFragment();

  picturesData.forEach((pictureData) => {
    const pictureElement = createPicture(pictureData);
    fragment.appendChild(pictureElement);
  });

  container.appendChild(fragment);
};

export {renderPictures};

// import { showBigPicture } from './big-picture.js';

// const pictureTemplate = document
//   .querySelector('#picture')
//   .content.querySelector('.picture');
// const container = document.querySelector('.pictures');

// const createPicture = (data) => {
//   const { comments, description, likes, url } = data;
//   const picture = pictureTemplate.cloneNode(true);

//   picture.querySelector('.picture__img').src = url;
//   picture.querySelector('.picture__img').alt = description;
//   picture.querySelector('.picture__comments').textContent = comments.length;
//   picture.querySelector('.picture__likes').textContent = likes;

//   picture.addEventListener('click', () => {
//     showBigPicture(data);
//   });

//   return picture;
// };

// const renderPictures = (pictures) => {
//   const fragment = document.createDocumentFragment();
//   pictures.forEach((picture) => {
//     const pictureElement = createPicture(picture);
//     fragment.append(pictureElement);
//   });

//   container.append(fragment);
// };

// export { renderPictures };
