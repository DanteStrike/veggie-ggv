// 'use strict';
//
// //=require utility.js
// //=require backend.js
//
// //=require ../common.blocks/nav.js
// //=require ../common.blocks/offers-menu.js
// //=require ../common.blocks/restaurant-menu.js
//
// const headerMenuToggle = document.querySelector('#nav__toggle');
// const headerMenu = document.querySelector('.nav__list');
//
// const onHeaderMenuToggleClick = (evt) => {
//   evt.target.classList.toggle('nav__toggle--toggled');
//   headerMenu.classList.toggle('nav__list--toggled');
// };
//
// headerMenuToggle.addEventListener('click', onHeaderMenuToggleClick);

import { sayHello } from './greed';

console.log(sayHello('TypeScript'));
