/* global L:readonly */

import {createArray} from './data.js';
import {createCart} from './generate-form.js';
import {activationPage} from './page.js';
import {showAlert} from './util.js';

// const popups = createArray(10);
// console.log(popups)

const addressForm = document.querySelector('#address');
addressForm.readOnly=true;

//Активация карты
const activationMap = () =>{
  //Активация страницы
  activationPage ();

  let popups;

  fetch (' https://22.javascript.pages.academy/keksobooking/data')
    .then ((response) => response.json())
    .then ((serverDatas) => {
      console.log(serverDatas);
      createCart(serverDatas[0]);
      console.log(createCart(serverDatas[0]));
      popups = serverDatas;
      console.dir(popups)

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
      });

      popups.forEach((popup) =>{
        const normalIcon = L.icon({
          iconUrl: '../img/pin.svg',
          iconSize: [30, 20],
          iconAnchor: [15, 20],
        });

        L.marker(
          {
            lat: popup.location.lat,
            lng: popup.location.lng,
          },
          {
            icon: normalIcon,
          },
        )
          .addTo(map)
          .bindPopup(createCart(popup));
      });

    })
    .catch((err) => {
      showAlert('Ошибка в полученbи данных, попробуйте снова');
      console.error(err);
    });


};

activationMap();
export{activationMap}














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





