import * as AOS from 'aos';

import {monthSpecialsMock} from "./mock/month-specials";
import MonthSpecialsController from "./controllers/month-specials-controller/month-specials-controller";
import RestaurantMenuController from "./controllers/restaurant-menu-controller/restaurant-menu-controller";
import {restaurantMenuOffersMock} from "./mock/restaurant-menu-offers";
import {querySelectorSafe} from "./utils";

const monthSpecialContainer = querySelectorSafe(document, `.month-specials .container`);
const monthSpecialsController = new MonthSpecialsController(monthSpecialContainer, monthSpecialsMock);
monthSpecialsController.init();

const restaurantMenuContainer = querySelectorSafe(document, `.restaurant-menu`);
const restaurantMenuController = new RestaurantMenuController(restaurantMenuContainer, restaurantMenuOffersMock);
restaurantMenuController.init();

AOS.init({
  offset: -10
});


