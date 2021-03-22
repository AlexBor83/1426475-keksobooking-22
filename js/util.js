const ALERT_SHOW_TIME = 10000;

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

//Склонене слов в зависимости от числительных
function getDeclOfNum(n, textForms) {
  n = Math.abs(n) % 100; const n1 = n % 10;

  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 == 1) { return textForms[0]; }
  return textForms[2];
}

const showAlert = (message) => {

  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};


export {getRandomNumber, getRandomArbitrary, getElementArray, getDeclOfNum, showAlert, isEscEvent};

