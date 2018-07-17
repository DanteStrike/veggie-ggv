'use strict';

(function () {
  const SERVER_URL = 'http://localhost:9000/offers-menu.json';

  const setup = function (onLoad, onError) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;

        case 400:
          onError(xhr.status + ': Неверный запрос');
          break;
        case 404:
          onError(xhr.status + ': Ничего не найдено');
          break;

        default:
          onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    return xhr;
  };

  const load = function (onLoad, onError) {
    let xhr = setup(onLoad, onError);

    xhr.open('GET', SERVER_URL);
    xhr.send();
  };

  const save = function (data, onLoad, onError) {
    let xhr = setup(onLoad, onError);

    xhr.open('POST', SERVER_URL);
    xhr.send(data);
  };

  window.backend = {
    load: load
  };
})();
