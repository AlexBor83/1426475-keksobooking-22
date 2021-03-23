import {isEscEvent} from './util.js';
import {send} from './server.js';
import {mainMarker} from './activation-map.js'

const TOKIO_LAT_LNG = [35.6895, 139.69171];
const main = document.querySelector('main');
const form = document.querySelector('.ad-form');
const inputs = form.querySelectorAll('input');
const formTemplateSuccess = document.querySelector('#success').content;
const formSuccess = formTemplateSuccess.querySelector('.success');
const formTemplateError = document.querySelector('#error').content;
const formError = formTemplateError.querySelector('.error');
const formErrorButton = formTemplateError.querySelector('.error__button');

const clearInputs = () => {
  inputs.forEach((item) =>{
    item.value = '';
  });
};

const onSuccess = () => {
  main.appendChild(formTemplateSuccess);
  main.addEventListener ('click', () => {
    formSuccess.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      formSuccess.classList.add('hidden');
    }
  });
  clearInputs();

  mainMarker.setLatLng(TOKIO_LAT_LNG);

  formSuccess.classList.remove('hidden');

};

const onError = () => {
  main.appendChild(formTemplateError);
  formErrorButton.addEventListener('click', () => {
    formError.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      formError.classList.add('hidden');
    }
  });

  formError.classList.remove('hidden');
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  send(formData, onSuccess, onError);
});
