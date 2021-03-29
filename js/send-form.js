import {isEscEvent} from './util.js';
import {send} from './server.js';
import {mainMarker} from './activation-map.js';
import {resetFilterMap} from './filter.js';
import {checktypeObjectPrice} from './check-option-form.js';

const TOKIO_LAT_LNG = [35.6895, 139.69171];
const main = document.querySelector('main');
const form = main.querySelector('.ad-form');
const formTemplateSuccess = document.querySelector('#success').content;
const formSuccess = formTemplateSuccess.querySelector('.success');
const formTemplateError = document.querySelector('#error').content;
const formError = formTemplateError.querySelector('.error');
const formResetButton = form.querySelector('.ad-form__reset');

const onPopupSuccessEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessMassage();
  }
};

const onPopupErrorEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorMassage();
  }
};

main.appendChild(formTemplateError);
formError.addEventListener('click', () => {
  closeErrorMassage();
});

main.appendChild(formTemplateSuccess);
formSuccess.addEventListener('click', () => {
  closeSuccessMassage();
});

formSuccess.classList.add('hidden');
formError.classList.add('hidden');

const openSuccessMassage = () => {
  formSuccess.classList.remove('hidden');

  document.addEventListener('keydown', onPopupSuccessEscKeydown);
};

const closeSuccessMassage = () => {
  formSuccess.classList.add('hidden');
  document.removeEventListener('keydown', onPopupSuccessEscKeydown);
};

const openErrorMassage = () => {
  formError.classList.remove('hidden');
  document.addEventListener('keydown', onPopupErrorEscKeydown);
};

const closeErrorMassage = () => {
  formError.classList.add('hidden');
  document.removeEventListener('keydown', onPopupErrorEscKeydown);
};

const resetform = () => {
  form.reset();
  mainMarker.setLatLng(TOKIO_LAT_LNG);
};

const onSuccess = () => {
  openSuccessMassage();
  resetFilterMap();
  resetform();
  checktypeObjectPrice();

};

const onError = () => {
  openErrorMassage();
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  send(formData, onSuccess, onError);
});

formResetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetFilterMap();
  resetform();
  checktypeObjectPrice();
});
