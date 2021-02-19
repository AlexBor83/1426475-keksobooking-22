
//Получение случайного целого числа в заданном интервале, включительно
const getRandomNumber = (a, b) => {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  if (min < 0 || max < 0) {
    throw Error('Диапазон может быть только положительный, включая ноль');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomArbitrary = (a, b) => {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  if (min < 0 || max < 0) {
    throw Error('Диапазон может быть только положительный, включая ноль');
  }

  return Math.random() * (max - min) + min; //Максимум и минимум включаются
};

//Случайный элемент массива
const getElementArray = (array) => {
  const indexArray = getRandomNumber(0, array.length - 1);
  return array[indexArray];
};


export {getRandomNumber, getRandomArbitrary, getElementArray};

