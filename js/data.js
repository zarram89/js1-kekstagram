import {
  getRandomPositiveInteger,
  getRandomArrayElement
} from './util.js';

const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
  'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto',
  'Затусили с друзьями на море #laptevsea #north #northeastpassage',
  'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
  'Отдыхаем... #chill #relax #group #photo',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка! #wow #car #carwow #drive',
  '#fun #party #cool #young',
  'Господи, это такая милота, я сейчас умру от нежности, у меня закшалил мимимиметр',
  'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка',
  'Норм',
];

const NAMES = [
  'Николай',
  'Аким',
  'Ким',
  'Харитон',
  'Тимур',
  'Степан'
];

const MessagesRange= {
  MIN: 1,
  MAX: 2,
};

const AvatarsRange= {
  MIN: 1,
  MAX: 6,
};

const LikesRange= {
  MIN: 15,
  MAX: 200,
};

const CommentsRange = {
  MIN: 0,
  MAX: 30,
};

const SIMILAR_PICTURE_COUNT = 25;

const createMessage = () =>
  Array.from({length: getRandomPositiveInteger(MessagesRange.MIN, MessagesRange.MAX)}, () =>
    getRandomArrayElement(COMMENT_LINES))
    .join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(AvatarsRange.MIN, AvatarsRange.MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LikesRange.MIN, LikesRange.MAX),
  comments: Array.from({length: getRandomPositiveInteger(CommentsRange.MIN, CommentsRange.MAX)},
    (_value, commentIndex) => createComment(commentIndex + 1)),
});

const getPictures = () =>
  Array.from({length: SIMILAR_PICTURE_COUNT},
    (_value, pictureIndex) => createPicture(pictureIndex + 1));

export {getPictures};

