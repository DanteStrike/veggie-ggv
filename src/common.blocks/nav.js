'use strict';

(function () {
  const changeCurrentButton = function (evt) {
    let oldCurrentLink = evt.currentTarget.querySelector('.nav__link--current');
    let newCurrentLink = evt.target;

    oldCurrentLink.classList.remove('nav__link--current');
    newCurrentLink.classList.add('nav__link--current');
  }

  window.nav = {
    changeCurrentButton: changeCurrentButton
  };
})();
