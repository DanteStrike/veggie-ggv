(function () {
  'use strict';

  const MAX_IN_ONE = 7;
  const DEFAUL_MARGIN_RIGHT = -1522;
  const RESTAURANT_MENU = document.querySelector('.restaurant-menu');
  const RESTAURANT_MENU_NAV_BUTTONS_ID = {
    'starters': 0,
    'mainDishes': 1,
    'desserts': 2,
    'drinks': 3
  };

  let restaurantMenuNav = RESTAURANT_MENU.querySelector('.restaurant-menu__nav');
  let restaurantMenuOffers = document.querySelector('.restaurant-menu__offers')

  const correctOffersArray = function(arr, n) {
    n = MAX_IN_ONE;
    return arr.reduce( function(accArray, currentValue, currentIndex) {
      if (currentIndex % n === 0) {
        accArray.push([]);
      }
      accArray[accArray.length - 1][currentIndex % n] = currentValue;
      return accArray;
    }, []);
  }

  //  Коллбек-фция при успешной загрузке
  const onOffersLoad = function (loadedOffers) {

    // IE11 FIX
    if (typeof loadedOffers === 'string') {
      loadedOffers = JSON.parse(loadedOffers);
    }

    let offers = {};

    for (const key in loadedOffers) {
      offers[key] = correctOffersArray(loadedOffers[key]);
      if (offers[key].length === 1) {

        let newOffersList = window.offersMenu.render(offers[key][0]);

        newOffersList.classList.add('restaurant-menu__offers-menu');
        newOffersList.classList.add('restaurant-menu__offers-menu--solo');
        restaurantMenuOffers.appendChild(newOffersList);

      } else {

        offers[key].forEach(element => {
          let newOffersList = window.offersMenu.render(element);

          newOffersList.classList.add('restaurant-menu__offers-menu');
          restaurantMenuOffers.appendChild(newOffersList);
        });
      }
    }
  };

  //  Коллбек-фция при неудачной загрузке
  const onOffersError = function (errorType) {
    window.utility.onDefaultError(errorType, 'default', function (node, message) {
      node.style.bottom = 0;
      node.textContent = 'Во время загрузки данных возникли проблемы. ' + message;
    });
  };

  const onRestaurantMenuNavClick = function(evt) {
    let target = evt.target;

    if (target.classList.contains('restaurant-menu__button')) {
      let newMarginLeft = RESTAURANT_MENU_NAV_BUTTONS_ID[target.dataset.id] * DEFAUL_MARGIN_RIGHT;
      restaurantMenuOffers.style.marginLeft = newMarginLeft + 'px';
      window.nav.changeCurrentButton(evt);
    }
  };



  //  Инициализация и сборка узлов
  window.backend.load(onOffersLoad, onOffersError);

  restaurantMenuNav.addEventListener('click', onRestaurantMenuNavClick);
})();
