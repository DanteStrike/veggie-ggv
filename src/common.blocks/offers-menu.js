'use strict';

(function () {
  const MAX_IN_ONE = 7;

  const OFFERS_MENU_TEMPLATE = document.querySelector('.offers-menu-template');
  const OFFERS_MENU = OFFERS_MENU_TEMPLATE.content.querySelector('.offers-menu');
  const OFFERS_MENU_ITEM = OFFERS_MENU_TEMPLATE.content.querySelector('.offers-menu__item');

  const collectOffer = function(offer) {
    let newOffersMenuItem = OFFERS_MENU_ITEM.cloneNode(true);
    let newOfferTitle = newOffersMenuItem.querySelector('.offers-menu__offer-title');
    let newOfferProducts = newOffersMenuItem.querySelector('.offers-menu__offer-products');
    let newOfferPrice = newOffersMenuItem.querySelector('.offers-menu__offer-price');

    newOfferTitle.textContent = offer.title;
    newOfferProducts.textContent = offer.products;
    newOfferPrice.textContent = offer.price;

    return newOffersMenuItem;
  }

  const render = function(arrayOffers) {
    let list = OFFERS_MENU.cloneNode(false);

    arrayOffers.forEach(element => {
      list.appendChild(collectOffer(element))
    });

    return list;
  }


  window.offersMenu = {
    render: render
  };
})();
