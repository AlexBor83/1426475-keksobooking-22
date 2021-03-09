import {getDeclOfNum} from './util.js';
import {createArray} from './data.js';

const data = createArray (10);
const objectData = data[0];
//console.log(objectData)


const objMapCanvas = document.querySelector('#map-canvas');
const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
popupTemplate.querySelector('.popup__features').innerHTML = '';
const templatePhoto = popupTemplate.querySelector('.popup__photo');
popupTemplate.querySelector('.popup__photos')

const kind = objectData.offer.type;
const  getKind = (kind) => {
  switch (kind) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
  }
};

const createFeatures = (features) => {
  const fragment = document.createDocumentFragment();

  features.forEach((value) => {
    const liElement = document.createElement('li');
    liElement.classList.add('popup__feature');
    liElement.classList.add('popup__feature--' + value);
    fragment.appendChild(liElement);
  });

  return fragment;
}

const createPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const element = templatePhoto.cloneNode(true);
    element.src = photo;
    fragment.appendChild(element);
  });

  return fragment;
}

const createCart = (object) =>{
  const popupElement = popupTemplate.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = object.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = object.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = object.offer.price + ' ₽/ночь';
  popupElement.querySelector('.popup__type').textContent = getKind(kind);
  popupElement.querySelector('.popup__text--capacity').textContent = object.offer.rooms + ' ' +
    (getDeclOfNum(object.offer.rooms, ['комната', 'комнаты', 'комнат']))  + ', '+ object.offer.guests + ' ' +
    (getDeclOfNum(object.offer.guests, ['гость', 'гостя', 'гостей']));
  popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + object.offer.checkin + ', ' + 'выезд до ' + object.checkout ;
  popupElement.querySelector('.popup__features').appendChild(createFeatures(object.offer.features));
  popupElement.querySelector('.popup__description').textContent = object.offer.description;
  popupElement.querySelector('.popup__photos').appendChild(createPhotos(object.offer.photos));
  popupElement.querySelector('.popup__avatar').src = object.author.avatar;

  return popupElement;
}

const cart = createCart(objectData);

const generateForm = (obj) => {

  objMapCanvas.appendChild(obj);
};

generateForm (cart);


/*
<template id="card">
    <article class="popup">
      <img src="img/avatars/user01.png" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <h3 class="popup__title">Уютное гнездышко для молодоженов</h3>
      <p class="popup__text popup__text--address">102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3</p>
      <p class="popup__text popup__text--price">5200 <span>₽/ночь</span></p>
      <h4 class="popup__type">Квартира</h4>
      <p class="popup__text popup__text--capacity">2 комнаты для 3 гостей</p>
      <p class="popup__text popup__text--time">Заезд после 14:00, выезд до 10:00</p>
      <ul class="popup__features">
        <li class="popup__feature popup__feature--wifi"></li>
        <li class="popup__feature popup__feature--dishwasher"></li>
        <li class="popup__feature popup__feature--parking"></li>
        <li class="popup__feature popup__feature--washer"></li>
        <li class="popup__feature popup__feature--elevator"></li>
        <li class="popup__feature popup__feature--conditioner"></li>
      </ul>
      <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
      <div class="popup__photos">
        <img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья">
      </div>
    </article>
  </template>

*/



