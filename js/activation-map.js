/* global L:readonly */

import {createCart} from './generate-form.js';
import {activationPage} from './page.js';
import {showAlert} from './util.js';
import {get} from './server.js';
import {applyAll} from './filter.js';


const addressForm = document.querySelector('#address');

addressForm.readOnly=true;

//Создание карты
const map = L.map('map-canvas');

//Создание главного маркера
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

//Создание маркера
const pinsGroup = L.layerGroup();

const normalIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [30, 20],
  iconAnchor: [15, 20],
});

const renderPin = (obj) => {
  L.marker(
    {
      lat: obj.location.lat,
      lng: obj.location.lng,
    },
    {
      icon: normalIcon,
    },
  )
    .addTo(pinsGroup)
    .bindPopup(createCart(obj));
};

let data =[];

const updatePin = () => {
  pinsGroup.clearLayers();
  const filterDatas = applyAll(data);
  filterDatas.forEach(renderPin);
};

const onSuccessGet = (serverDatas) => {
  data = serverDatas;
  updatePin();
};


const onErrorGet = () => {
  showAlert('Ошибка в получении данных, попробуйте снова');
};

//Активация карты 

const activationMap = () =>{
  
  map.on('load', () => {
    activationPage ();
  })
  
  //Центр карты
  map.setView({
    lat: 35.6895,
    lng: 139.69171,
  }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainMarker.addTo(map);

  pinsGroup.addTo(map);

  addressForm.value = `${mainMarker.getLatLng().lat}, ${mainMarker.getLatLng().lng}`;

  mainMarker.on('move', (evt) =>{
    const point = evt.target.getLatLng();
    const lat = point.lat.toFixed(5);
    const lng = point.lng.toFixed(5);

    addressForm.value = `${lat}, ${lng}`;
  });

  get (onSuccessGet, onErrorGet);
};

activationMap();
export{activationMap, mainMarker, updatePin};

