import {updatePin} from './activation-map.js';

const form = document.querySelector('.map__filters');
const houseType =  form.querySelector('#housing-type');
const housePrice = form.querySelector('#housing-price');
const housRoom = form.querySelector('#housing-rooms');
const housGuest = form.querySelector('#housing-guests');


const cheackType = (obj) => {
  if (houseType.value === 'any') {
    return true;
  }
  return houseType.value === obj.offer.type;
};

const cheackPrice = (obj) => {
  if (housePrice.value === 'any') {
    return true;
  }
  return housePrice.value === obj.offer.price;
};

const cheackRoom = (obj) => {
  if (housRoom.value === 'any') {
    return true;
  }
  return housRoom.value === obj.offer.rooms;
};

const cheackGuest = (obj) => {
  if (housGuest.value === 'any') {
    return true;
  }
  return housGuest.value === obj.offer.guests;
}

const cheackFeatures = (obj) => {
  const cheacks = Array.from(form.querySelectorAll('input[name="features"]:checked'));

  return cheacks.every ((element) => {
    obj.offer.features.includes(element.value);
  });
}

const applyAll = (arr) => {
  const filters = [];

  for (let i = 0; i< arr.length; i++) {
    const item = arr[i];

    if (cheackType(item) && cheackPrice(item) && cheackRoom(item) && cheackGuest(item) && cheackFeatures(item)) {
      filters.push(item);
    }

    if (filters.length >= 10) {
      break;
    }
  }

  return filters;
};

form.addEventListener('change', ()=> {
  updatePin();
});

export {applyAll}

