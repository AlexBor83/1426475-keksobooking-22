import {getDeclOfNum} from './util.js';

const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
popupTemplate.querySelector('.popup__features').innerHTML = '';

const templatePhoto = popupTemplate.querySelector('.popup__photo');
popupTemplate.querySelector('.popup__photos').innerHTML = '';


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
};

const createPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const element = templatePhoto.cloneNode(true);
    element.src = photo;
    fragment.appendChild(element);
  });

  return fragment;
};

const createCart = (object) =>{
  const popupElement = popupTemplate.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = object.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = object.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = object.offer.price + ' ₽/ночь';
  popupElement.querySelector('.popup__type').textContent = getKind(object.offer.type);
  popupElement.querySelector('.popup__text--capacity').textContent = object.offer.rooms + ' ' +
    (getDeclOfNum(object.offer.rooms, ['комната', 'комнаты', 'комнат']))  + ', '+ object.offer.guests + ' ' +
    (getDeclOfNum(object.offer.guests, ['гость', 'гостя', 'гостей']));
  popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + object.offer.checkin + ', ' + 'выезд до ' + object.offer.checkout ;
  popupElement.querySelector('.popup__features').appendChild(createFeatures(object.offer.features));
  popupElement.querySelector('.popup__description').textContent = object.offer.description;
  popupElement.querySelector('.popup__photos').appendChild(createPhotos(object.offer.photos));
  popupElement.querySelector('.popup__avatar').src = object.author.avatar;

  return popupElement;
};

export {createCart};





