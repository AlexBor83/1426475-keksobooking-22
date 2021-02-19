
import {getRandomNumber, getRandomArbitrary, getElementArray} from './util.js';


const types = ['palace', 'flat', 'house', 'bungalow'];
const checkins = ['12:00', '13:00', '14:00'];
const checkouts = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

//author, объект — описывает автора.
const createAuthor = () => {
  const avatarNumber ='0' + getRandomNumber(1, 8);
  const randomAvatar = 'img/avatars/user'+avatarNumber+'.png';

  return randomAvatar;
};

//offer, объект — содержит информацию об объявлении. Состоит из полей:
const createOffer = () => {

  //location, объект — местоположение в виде географических координат. Состоит из двух полей: ++
  //x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
  //y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
  const createLocation = () => {
    const latitudeRandom = getRandomArbitrary(35.7, 35.65).toFixed(5);
    const longitudeRandom = getRandomArbitrary(139.7, 139.8).toFixed(5);

    return {
      x: latitudeRandom,
      y: longitudeRandom,
    };
  };

  const randomLocation = createLocation();

  return {
    title: 'лучшее жилье',
    address: Object.values(randomLocation).join(', '),
    price: Math.trunc(getRandomArbitrary(0, 1)*1000),
    type: getElementArray(types),
    rooms: getRandomArbitrary(0, 1).toFixed(1) * 10,
    guests: getRandomArbitrary(0, 1).toFixed(1) * 10,
    checkin: getElementArray(checkins),
    checkout: getElementArray(checkouts),
    description: 'комната',
    features: features.slice(getRandomNumber(1, 6)),
    photos:  new Array(getRandomNumber(1, photos.length)).fill('').map(() =>
      photos[getRandomNumber(0, photos.length - 1)]),
    location: randomLocation,
  };
};

const createObject = () => {
  return {
    author: createAuthor(),
    offer: createOffer(),
  };
};

const createArray = (elementArray) => {

  const objects = new Array(elementArray).fill('').map(() => createObject());

  return objects;
};

createArray(10);

console.log(createArray(10));
