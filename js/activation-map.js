/* global L:readonly */

import {createArray} from './data.js';
import {createCart} from './generate-form.js';
import {activationPage} from './page.js';

const popups = createArray(10);
console.log(popups)
console.dir(popups[0].offer.address)

const addressForm = document.querySelector('#address');
addressForm.disabled=true;

//Активация карты
const activationMap = () =>{
  //Активация страницы
  activationPage ();

  //Создание карты и маркера
  const map = L.map('map-canvas')
    .on('load', () => {
      console.log('Карта активирована')
    })
    .setView({
      lat: 35.6895,
      lng: 139.69171,
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [48, 65],
    iconAnchor: [24, 65],
  });

  const mainMarker = L.marker(
    {
      lat: 35.6895,
      lng: 139.69171,
    },
    {
      draggable: true,
      icon: mainIcon,
    },
  );
  mainMarker.addTo(map);
  addressForm.value = '35.6895, 139.69171';

  mainMarker.on('move', (evt) =>{
    const points = evt.target.getLatLng();
    const lat = points.lat.toFixed(5);
    const lng = points.lng.toFixed(5);

    addressForm.value = `${lat}, ${lng}`;

    console.log(Object.values(evt.target.getLatLng()));

  });

  popups.forEach((popup) =>{
    const normalIcon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [30, 20],
      iconAnchor: [15, 20],
    });

    L.marker(
      {
        lat: popup.offer.location.x,
        lng: popup.offer.location.y,
      },
      {
        icon: normalIcon,
      },
    )
      .addTo(map)
      .bindPopup(createCart(popup));
  });
};

activationMap()














// L.marker(
//   {
//     lat: 35.6895,
//     lng: 139.69171,
//   },

//   {icon: icon})
//   .addTo(map);

// const addres = new Array(1).fill(popupsAddress[9])
// console.dir(addres)

// L.marker([addres]).addTo(map);





