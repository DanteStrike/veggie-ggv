(function () {
  'use strict';

  const LIVE_TIME_ERROR_MESSAGE = 1500;

  const onDefaultError = function (errorMessage, messageLifetime, callback) {
    //  Убираем сообщение через указанный интервал времени
    const removeErrorMessage = function () {
      let currentNodeError = document.querySelector('.ErrorMessage');

      if (currentNodeError) {
        currentNodeError.parentNode.removeChild(currentNodeError);
      }
    };

    let nodeError = document.createElement('div');

    if (!messageLifetime || messageLifetime === 'default') {
      messageLifetime = LIVE_TIME_ERROR_MESSAGE;
    }

    nodeError.classList.add('ErrorMessage');

    //  Дефолтные настройки
    nodeError.style.position = 'fixed';
    nodeError.style.zIndex = '100';
    nodeError.style.left = 0;
    nodeError.style.right = 0;
    nodeError.style.margin = '0 auto';
    nodeError.style.textAlign = 'center';
    nodeError.style.fontSize = '20px';
    nodeError.style.backgroundColor = 'red';
    nodeError.textContent = errorMessage;

    //  Гибкая кастомизация сообщения ошибки
    if (typeof callback === 'function') {
      callback(nodeError, errorMessage);
    }

    document.body.insertAdjacentElement('afterbegin', nodeError);

    setTimeout(removeErrorMessage, messageLifetime);
  };

  window.utility = {
    onDefaultError: onDefaultError
  };
})();
