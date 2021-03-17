
const typeObject = document.querySelector('#type');
const priceObject = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const quantityRoom = document.querySelector('#room_number');
const quantityGuest = document.querySelector('#capacity');
const MAX_PRICE = 1000000;

priceObject.addEventListener('input', ()=>{
  const valuePrice = priceObject.value;

  if (valuePrice > MAX_PRICE) {
    priceObject.setCustomValidity('Максимальная стоимость 1000000 руб.');

  } else {
    priceObject.setCustomValidity('');
  }
  priceObject.reportValidity();
});

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

quantityRoom.addEventListener('change', () => {
  quantityGuest.value = quantityGuest.options[2].value;
  const options = Array.from(quantityGuest.options);
  options.forEach((option) => {
    option.disabled = true;
  });
  quantityGuest.options[2].disabled = false;


  if (quantityRoom.value === '2') {
    quantityGuest.options[1].disabled = false;
  } else if (quantityRoom.value === '3') {
    quantityGuest.options[1].disabled = false;
    quantityGuest.options[0].disabled = false;
  } else if (quantityRoom.value === '100') {
    quantityGuest.options[2].disabled = true;
    quantityGuest.options[3].disabled = false;
    quantityGuest.value = quantityGuest.options[3].value;
  }
});





