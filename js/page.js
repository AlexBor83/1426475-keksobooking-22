
const form = document.querySelector('.ad-form');
const pageElements = document.querySelectorAll('.ad-form__element');
const mapFilter = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter');



const deactivationPage = () => {
  form.classList.add('ad-form--disabled');
  document.querySelector('.ad-form-header').disabled=true;
  pageElements.forEach((Element) => {
    Element.disabled=true;
  });

  mapFilter.classList.add('map__filters--disabled');
  mapFilters.forEach((filter) => {
    filter.disabled=true;
  });
};

//Страница неактивна

deactivationPage();

const activationPage = () => {
  form.classList.remove('ad-form--disabled');
  document.querySelector('.ad-form-header').disabled= false;
  pageElements.forEach((Element) => {
    Element.disabled= false;
  });

  mapFilter.classList.remove('map__filters--disabled');
  mapFilters.forEach((filter) => {
    filter.disabled=false;
  });
};

export {activationPage};
