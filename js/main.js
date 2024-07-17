const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPSIONS = [
  'Семиразовое питание. Нет, не лопну.',
  'Учу йоге. Дорого.',
  'А ты — завел себе своего человека?',
  'Вон кресло свободное, там и спи!',
  'Мышка. И....кошка.',
  'Лучший в мире примус!',
  'Качественное подсолнечное масло'
];

;

const MIN_AVATAR_COUNT = 1;
const MAX_AVATAR_COUNT = 6;

const MIN_POST_COUNT = 1
const MAX_POST_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const COMMENT_COUNT = 4;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

//Функция-генератор для получения уникальных идентификаторов.

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateId = createIdGenerator();

//Функция-генератор для получения случайных идентификаторов из указанного диапазона, и так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomPositiveInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};


function checkStringLength (string, length) {
  return string.length <= length;
}

const createMessage = () => getRandomArrayElement(MESSAGES);

const createMessages = () => {
  return Array.from({length: getRandomPositiveInteger(1, 2)}, createMessage)
};

const createComments = () => {
  return {
    id: generateId(),
    avatar: `img/avatar-${getRandomPositiveInteger(MIN_AVATAR_COUNT, MAX_AVATAR_COUNT)}`,
    message: createMessages(),
    name: getRandomArrayElement(NAMES),
  };
}

const generatePictureId = createRandomIdFromRangeGenerator(MIN_POST_COUNT, MAX_POST_COUNT);

const createPicture = () => {
  const uniqPictureId = generatePictureId();
  return {
    id: uniqPictureId,
    url: `photos/${uniqPictureId}.jpg`,
    description: getRandomArrayElement(DESCRIPSIONS),
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomPositiveInteger(1, COMMENT_COUNT)}, createComments),
  };
}

const createPictures = () => {
  return Array.from({length: MAX_POST_COUNT}, createPicture);
}

console.log(createPictures());
