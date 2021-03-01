import {getDeclOfNum} from './util.js';
import {createAuthor, createOffer} from './data.js';

const avatar = createAuthor();
const offer = createOffer();
console.log (offer)

const objMapCanvas = document.querySelector('#map-canvas');
const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');


const kind = offer.type;
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

const popupFeatures = popupTemplate.querySelector('.popup__features');
console.log(popupFeatures);

const features = offer.features;
console.log(features);

const fragment = document.createDocumentFragment();

features.forEach((value) => {
  console.log(value)
  const list = document.createElement('li');
  console.log(list);
  list.classList.add('popup__feature');

  list.classList.add('popup__feature--' + value);
  fragment.appendChild(list);
});
popupFeatures.innerHTML = '';
popupFeatures.appendChild(fragment); //Не могу понять почему 2 списка с фичами

const popupPhotos = popupTemplate.querySelector('.popup__photos');
console.log(popupPhotos)
const popupPhoto = popupTemplate.querySelector('.popup__photo');
//console.log(popupPhoto)

const srcPhotos = offer.photos;
console.log(srcPhotos);

srcPhotos.forEach((value) => {
  popupPhotos.cloneNode(true);
  //console.log(popupImg)
  //console.log(value);
  //console.log(srcPhoto);
  popupPhotos.querySelector('.popup__photo').src = value ;
  console.log(popupPhotos)
  popupPhotos.appendChild(fragment);// Не смог победить фотки 
});


const createCart = (object, avatar) =>{
  const popupElement = popupTemplate.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = object.title;
  popupElement.querySelector('.popup__text--address').textContent = object.address;
  popupElement.querySelector('.popup__text--price').textContent = object.price + ' ₽/ночь';
  popupElement.querySelector('.popup__type').textContent = getKind(kind);
  popupElement.querySelector('.popup__text--capacity').textContent = object.rooms + ' ' +
    (getDeclOfNum(offer.rooms, ['комната', 'комнаты', 'комнат']))  + ', '+ object.guests + ' ' +
    (getDeclOfNum(object.guests, ['гость', 'гостя', 'гостей']));
  popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + object.checkin + ', ' + 'выезд до ' + object.checkout ;
  popupElement.querySelector('.popup__features').appendChild(popupFeatures);
  popupElement.querySelector('.popup__description').textContent = object.description;
  popupElement.querySelector('.popup__photo').appendChild(popupPhotos);
  popupElement.querySelector('.popup__avatar').src = avatar;

  return popupElement;
}

const cart = createCart(offer, avatar);

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



