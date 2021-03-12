
const form = document.querySelector('.ad-form');
form.classList.add('ad-form--disabled');
document.querySelector('.ad-form-header').disabled=true;

const pageElements = document.querySelectorAll('.ad-form__element');
pageElements.forEach((Element) => {
  Element.disabled=true;
});

const mapFilter = document.querySelector('.map__filters');
mapFilter.classList.add('map__filters--disabled');

const mapFilters = document.querySelectorAll('.map__filter');
mapFilters.forEach((filter) => {
  filter.disabled=true;
});

