const URL_SEND = 'https://22.javascript.pages.academy/keksobooking';
const URL_GET = 'https://22.javascript.pages.academy/keksobooking/data';

const send = (data, onSuccess, onError) =>{

  fetch (URL_SEND, {
    method: 'POST',
    body: data,
  },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch((err) => {
      onError(err);
    });
};

const get = (onSuccessGet, onErrorGet) =>{

  fetch (URL_GET)
    .then ((response) => response.json())
    .then((serverDatas) => {
      onSuccessGet(serverDatas);
    })
    .catch((err) => {
      onErrorGet(err);
    });
};


export{send, get};
