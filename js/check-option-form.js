
const typeObject = document.querySelector('#type');
const priceObject = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


typeObject.addEventListener('change', () => {
  let price = 0;

  if (typeObject.value === 'bungalow') {
    price = 0;
  } else if (typeObject.value === 'flat') {
    price = 1000;
  } else if (typeObject.value === 'house') {
    price = 5000;
  } else if (typeObject.value === 'palace') {
    price = 10000;}

  priceObject.min = price;
  priceObject.placeholder = price;
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});
