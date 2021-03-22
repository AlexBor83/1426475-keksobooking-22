import {isEscEvent} from './util.js';


const main = document.querySelector('main');
const form = document.querySelector('.ad-form');
const inputs = form.querySelectorAll('input');
const formTemplateSuccess = document.querySelector('#success').content;
const formSuccess = formTemplateSuccess.querySelector('.success')
const formTemplateError = document.querySelector('#error').content;
const formError = formTemplateError.querySelector('.error');
const formErrorButton = formTemplateError.querySelector('.error__button');

const clearInputs = () => {
  inputs.forEach((item) =>{
    item.value = '';
  });
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch ('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  },
  )
    .then (() => {
      main.appendChild(formTemplateSuccess);

      main.addEventListener ('click', () => {
        formSuccess.classList.add('hidden');
      });

      document.addEventListener('keydown', (evt) => {
        if (isEscEvent(evt)) {
          evt.preventDefault();
          formSuccess.classList.add('hidden');;
        }
      });
      clearInputs();

      formSuccess.classList.remove('hidden');

      // нет переходав в исходное состояние по п. 2.5 метка адреса возвращается в исходное положение;

    })
    .catch((err) => {
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
    });
});




