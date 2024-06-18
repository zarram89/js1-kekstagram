function getRandomPositiveInteger(a, b = 1) {
  if (a === undefined) {
    throw new Error("Первый параметр должен быть число")
  }

  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

getRandomPositiveInteger(1, 0);
checkStringLength('', 140);
