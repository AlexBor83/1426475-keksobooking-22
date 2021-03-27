/* global _:readonly */
import {updatePin} from './activation-map.js';

const RERENDER_DELAY = 500;
const form = document.querySelector('.map__filters');
const houseType =  form.querySelector('#housing-type');
const housePrice = form.querySelector('#housing-price');
const houseRoom = form.querySelector('#housing-rooms');
const houseGuest = form.querySelector('#housing-guests');


const  getPrice = (element) => {
  if (element >= 10000 && element <= 50000) {
    return 'middle';
  } else if (element <10000) {
    return 'low';
  } else {
    return 'high';
  }
};

const checkType = (obj) => {
  if (houseType.value === 'any') {
    return true;
  }
  return houseType.value === obj.offer.type;
};

const checkPrice = (obj) => {
  if (housePrice.value === 'any') {
    return true;
  }
  return housePrice.value ===getPrice(obj.offer.price);
};

const checkRoom = (obj) => {
  if (houseRoom.value === 'any') {
    return true;
  }
  return houseRoom.value === String(obj.offer.rooms);
};

const checkGuest = (obj) => {
  if (houseGuest.value === 'any') {
    return true;
  }
  return houseGuest.value === String(obj.offer.guests);
};

const checkFeatures = (obj) => {
  const checks = Array.from(form.querySelectorAll('input[name="features"]:checked'));

  return checks.every ((element) => {

    return obj.offer.features.includes(element.value);
  });
};

const resetFilter = () => {
  form.reset();
  const checksfeatures = Array.from(form.querySelectorAll('input[name="features"]'));
  checksfeatures.forEach((item) => {
    item.checked = false;
  });
};

const applyAll = (arr) => {
  const filters = [];

  for (let i = 0; i< arr.length; i++) {
    const item = arr[i];

    if (checkType(item) && checkPrice(item) && checkRoom(item) && checkGuest(item) && checkFeatures(item)) {
      filters.push(item);
    }

    if (filters.length >= 10) {
      break;
    }
  }

  return filters;
};

const debounceUpdatePin = _.debounce(() => updatePin(), RERENDER_DELAY);

form.addEventListener('change', ()=> {
  debounceUpdatePin();
});

export {applyAll, resetFilter};

