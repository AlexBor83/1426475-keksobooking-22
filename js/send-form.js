const main = document.querySelector('main');
const form = document.querySelector('.ad-form');
const formTemplateSuccess = document.querySelector('#success').content;
const formTemplateError = document.querySelector('#error').content;

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch ('https://2.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  },
  )
    .then (() => {
      main.appendChild(formTemplateSuccess);
      console.dir(formData);
    })
    .catch((err) => {
      console.error(err);
      main.appendChild(formTemplateError);
    });
});



/*<!-- Сообщение об успешном создании объявления -->
  <template id="success">
    <div class="success">
      <p class="success__message">Ваше объявление<br>успешно размещено!</p>
    </div>
  </template>

  <!-- Сообщение об ошибке создания объявления -->
  <template id="error">
    <div class="error">
      <p class="error__message">Ошибка размещения объявления</p>
      <button type="button" class="error__button">Попробовать снова</button>
    </div>*/
