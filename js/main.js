"use strict";

//Получение случайного целого числа в заданном интервале, включительно
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  if (min < 0 || max < 0) {
    throw Error('Диапазон может быть только положительный, включая ноль');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//console.log (getRandomNumber(5, 10));

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomArbitrary(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  if (min < 0 || max < 0) {
    throw Error('Диапазон может быть только положительный, включая ноль');
  }

  return Math.random() * (max - min) + min; //Максимум и минимум включаются
}

function getRandom() {
  return Math.abs(Math.random());
}

const avatarNumber ='0' + getRandomNumber(1, 8)

const types = ['palace', 'flat', 'house', 'bungalow'];

const checkins = ['12:00', '13:00', '14:00'];

const checkouts = ['12:00', '13:00', '14:00'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditionerwifi',
  'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


//author, объект — описывает автора. Содержит одно поле:

const author = {
  //avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.
  avatar: 'img/avatars/user'+avatarNumber+'.png',
};

//console.log(author)



//offer, объект — содержит информацию об объявлении. Состоит из полей:

const createOffer = () => {
  //title, строка — заголовок предложения. Придумайте самостоятельно.+
  const titleRoom = 'лучшее жилье';

  //price, число — стоимость. Любое положительное число.++
  const randomPrice = Math.trunc(getRandom()*1000);

  //type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.++
  const indexType = getRandomNumber(0, types.length - 1);

  //rooms, число — количество комнат. Любое положительное число++.
  const randomRoom = getRandom().toFixed(1) * 10; //Сделал не любое а в приделах разумного число комнат не может быть дробным

  //guests, число — количество гостей, которое можно разместить. Любое положительное число.++
  const randomGuest = getRandom().toFixed(1) * 10; //Сделал не любое а в приделах разумного число людей не может быть дробным

  // checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  const indexCheckin = getRandomNumber(0, checkins.length - 1);

  // checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  const indexcheckout = getRandomNumber(0, checkouts.length - 1);

  // features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner.
  //Значения не должны повторяться - yt gjkexbkjcmcl.
  const randomFeatures = new Array(getRandomNumber(1, features.length)).fill('').map(() =>
    features[getRandomNumber(0, features.length - 1)]);

  // description, строка — описание помещения. Придумайте самостоятельно.++
  const descriptionRoom = 'комната';

  //photos, массив строк — массив случайной длины:
  const randomPhoto = new Array(getRandomNumber(1, photos.length)).fill('').map(() =>
    photos[getRandomNumber(0, photos.length - 1)]);

  //location, объект — местоположение в виде географических координат. Состоит из двух полей: ++
  //x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
  //y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

  const getLocation = {
    latitude: getRandomArbitrary(35.7, 35.65).toFixed(5), // Добавил toFixed(5) еще чтоб было 5 знаков после заптой как в диапозоне

    longitude: getRandomArbitrary(139.7, 139.8).toFixed(5),  // Добавил toFixed(5) еще чтоб было 5 знаков после заптой как в диапозоне
  };

  //address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
  const randomaddress = getLocation;

  return {
    title: titleRoom,
    address: randomaddress,
    price: randomPrice,
    type: types[indexType],
    rooms: randomRoom,
    guests: randomGuest,
    checkin: checkins[indexCheckin],
    checkout: checkouts[indexcheckout],
    description: descriptionRoom,
    features: randomFeatures,
    photos: randomPhoto,
    location: getLocation,
  };
};

const offer = createOffer()

//console.log(offer);





