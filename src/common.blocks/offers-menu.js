(function () {
  'use strict';

  // ie11 template tag FIX
  function templateContent(template) {
    if("content" in document.createElement("template")) {
        return document.importNode(template.content, true);
    } else {
        var fragment = document.createDocumentFragment();
        var children = template.childNodes;
        for (let i = 0; i < children.length; i++) {
            fragment.appendChild(children[i].cloneNode(true));
        }
        return fragment;
    }
  }

  const OFFERS_MENU_TEMPLATE = document.querySelector('.offers-menu-template');
  const OFFERS_MENU_TEMPLATE_CONTENT = templateContent(OFFERS_MENU_TEMPLATE);
  const OFFERS_MENU = OFFERS_MENU_TEMPLATE_CONTENT.querySelector('.offers-menu');
  const OFFERS_MENU_ITEM = OFFERS_MENU_TEMPLATE_CONTENT.querySelector('.offers-menu__item');

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
