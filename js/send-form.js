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

const onPopupSuccessEscKeydown = (evt) => {

  if (isEscEvent(evt)) {
    evt.preventDefault();
    formSuccess.classList.add('hidden');
  }
};

const onPopupErrorEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorMassage();
  }
};

main.appendChild(formTemplateError);
main.appendChild(formTemplateSuccess);
formSuccess.classList.add('hidden');
formError.classList.add('hidden');

const openSuccessMassage = () => {
  formSuccess.classList.remove('hidden');
  main.addEventListener ('click', () => {
    closeSuccessMassage();
  });
  document.addEventListener('keydown', onPopupSuccessEscKeydown);
}

const closeSuccessMassage = () => {
  formSuccess.classList.add('hidden');
  document.removeEventListener('keydown', onPopupSuccessEscKeydown);
};

const openErrorMassage = () => {
  formError.classList.remove('hidden');
  formErrorButton.addEventListener('click', () => {
    closeErrorMassage();
  });
  document.addEventListener('keydown', onPopupErrorEscKeydown);
};

const closeErrorMassage = () => {
  formError.classList.add('hidden');
  document.removeEventListener('keydown', onPopupErrorEscKeydown);
};



const clearInputs = () => {
  inputs.forEach((item) =>{
    item.value = '';
  });
};

const onSuccess = () => {
  openSuccessMassage();
  clearInputs();
  mainMarker.setLatLng(TOKIO_LAT_LNG);
};

const onError = () => {
  openErrorMassage();
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  send(formData, onSuccess, onError);
});
