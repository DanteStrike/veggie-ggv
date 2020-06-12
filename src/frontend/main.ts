import {monthSpecialsMock} from "./mock/month-specials";
import MonthSpecialsController from "./controllers/month-specials-controller/month-specials-controller";
import RestaurantMenuController from "./controllers/restaurant-menu-controller/restaurant-menu-controller";
import {restaurantMenuOffersMock} from "./mock/restaurant-menu-offers";

const monthSpecialContainer = document.querySelector(`.month-specials .container`);
const monthSpecialsController = new MonthSpecialsController(monthSpecialContainer!, monthSpecialsMock);
monthSpecialsController.render();

const restaurantMenuContainer = document.querySelector(`.restaurant-menu`);
const restaurantMenuController = new RestaurantMenuController(restaurantMenuContainer!, restaurantMenuOffersMock);
restaurantMenuController.render();
