const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentList = bigPicture.querySelector('.social__comments');
const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const COMMENTS_PER_PORTION = 5;
let commentsShown = 0;
let comments = [];

const createComment = (commentData) => {
  const { avatar, name, message } = commentData;

  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');
  commentElement.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  commentList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentList.appendChild(fragment);
  commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  commentsShown = 0;
};

function onEscKeyDown (evt) {
  if (evt.key === 'Escape') {
    hideBigPicture();
  }
}

const onCancelButtonClick = () => hideBigPicture();

const onCommentsLoaderClick = () => renderComments();

const renderPicturesDetails = (pictureData) => {
  const {url, likes, description} = pictureData;

  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (pictureData) => {

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');

  document.addEventListener('keydown', onEscKeyDown);

  renderPicturesDetails(pictureData);
  comments = pictureData.comments.slice();
  if (comments.length > 0) {
    renderComments();
  }
};

cancelButton.addEventListener('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export { showBigPicture };

// const bigPicture = document.querySelector('.big-picture');
// const commentCount = document.querySelector('.social__comment-count');
// const commentList = document.querySelector('.social__comments');
// const commentsLoader = document.querySelector('.comments-loader');
// const body = document.querySelector('body');
// const cancelButton = document.querySelector('.big-picture__cancel');

// const COMMENTS_PER_PORTION = 5;
// let commentsShown = 0;
// let comments = [];

// const createComment = ({ avatar, name, message }) => {
//   const comment = document.createElement('li');
//   comment.innerHTML =
//     '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
//   comment.classList.add('social__comment');

//   comment.querySelector('.social__picture').src = avatar;
//   comment.querySelector('.social__picture').alt = name;
//   comment.querySelector('.social__text').textContent = message;

//   return comment;
// };

// const renderComments = () => {
//   commentsShown += COMMENTS_PER_PORTION;

//   if (commentsShown >= comments.length) {
//     commentsLoader.classList.add('hidden');
//     commentsShown = comments.length;
//   } else {
//     commentsLoader.classList.remove('hidden');
//   }

//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < commentsShown; i++) {
//     const commentElement = createComment(comments[i]);
//     fragment.append(commentElement);
//   }

//   commentList.innerHTML = '';
//   commentList.append(fragment);
//   commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
// };

// const hideBigPicture = () => {
//   bigPicture.classList.add('hidden');
//   body.classList.remove('modal-open');
//   document.removeEventListener('keydown', onEscKeyDown);
//   commentsShown = 0;
// };

// function onEscKeyDown(evt) {
//   if (evt.key === 'Escape') {
//     evt.preventDefault();
//     hideBigPicture();
//   }
// }

// const onCancelButtonClick = () => {
//   hideBigPicture();
// };

// const onCommentsLoaderClick = () => renderComments();

// const renderPictureDetails = ({ url, likes, description }) => {
//   bigPicture.querySelector('.big-picture__img img').src = url;
//   bigPicture.querySelector('.big-picture__img img').alt = description;
//   bigPicture.querySelector('.likes-count').textContent = likes;
//   bigPicture.querySelector('.social__caption').textContent = description;
// };

// const showBigPicture = (data) => {
//   bigPicture.classList.remove('hidden');
//   body.classList.add('modal-open');
//   commentsLoader.classList.add('hidden');
//   document.addEventListener('keydown', onEscKeyDown);

//   renderPictureDetails(data);
//   comments = data.comments;
//   if (comments.length > 0) {
//     renderComments();
//   }
// };

// cancelButton.addEventListener('click', onCancelButtonClick);
// commentsLoader.addEventListener('click', onCommentsLoaderClick);

// export { showBigPicture };
