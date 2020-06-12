import {RestaurantMenuOfferType} from "../types";
import {RestaurantMenuOffersGroup} from "../enum";

const startersAmount: number = 14;
const startersMock: RestaurantMenuOfferType[] = new Array(startersAmount)
  .fill(``)
  .map((_, index) => ({
    id: index + 1,
    group: RestaurantMenuOffersGroup.STARTERS,
    title: `smoked ricotta terrine (starters ${index + 1})`,
    products: [`ricotta`, `shallots`, `cheddar`, `capers`],
    price: 12
  }));

const mainDishesAmount: number = 10;
const mainDishesMock: RestaurantMenuOfferType[] = new Array(mainDishesAmount)
  .fill(``)
  .map((_, index) => ({
    id: index + startersMock[startersMock.length - 1].id + 1,
    group: RestaurantMenuOffersGroup.MAIN_DISHES,
    title: `pan fried courgette flowers (main dishes ${index + 1})`,
    products: [`courgette flowers`, `goats cheese`, `red onion`, `pine nuts`],
    price: 24
  }));

const dessertsAmount: number = 8;
const dessertsMock: RestaurantMenuOfferType[] = new Array(dessertsAmount)
  .fill(``)
  .map((_, index) => ({
    id: index + mainDishesMock[mainDishesMock.length - 1].id + 1,
    group: RestaurantMenuOffersGroup.DESSERTS,
    title: `samphire fritters with fennel ceviche (desserts ${index + 1})`,
    products: [`fresh samphire`, `plain flour`, `cornflower`, `eggs`, `fennel`],
    price: 20
  }));

const drinksAmount: number = 5;
const drinksMock: RestaurantMenuOfferType[] = new Array(drinksAmount)
  .fill(``)
  .map((_, index) => ({
    id: index + dessertsMock[dessertsMock.length - 1].id + 1,
    group: RestaurantMenuOffersGroup.DRINKS,
    title: `with fennel ceviche (drinks ${index + 1})`,
    products: [`flour`, `cornflower`, `eggs`, `fennel`],
    price: 10
  }));

export const restaurantMenuOffersMock: RestaurantMenuOfferType[] = [...startersMock, ...mainDishesMock, ...dessertsMock, ...drinksMock];
