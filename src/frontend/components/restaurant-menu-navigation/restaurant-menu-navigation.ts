import AbstractComponent from "../abstract-component/abstract-component";
import {IRestaurantMenuNavigation} from "../../types";

class RestaurantMenuNavigation extends AbstractComponent implements IRestaurantMenuNavigation {
  constructor(
  ) {
    super();
  }

  protected getTemplate(): string {
    return `
      <ul class='nav__list nav__list--restaurant-menu'>
        <li class='nav__item'>
          <button class='button restaurant-menu__button nav__link nav__link--current' data-id='starters'>Starters</button>
        </li>
        <li class='nav__item'>
          <button class='button restaurant-menu__button nav__link' data-id='mainDishes'>Main Dishes</button>
        </li>
        <li class='nav__item'>
          <button class='button restaurant-menu__button nav__link' data-id='desserts'>Desserts</button>
        </li>
        <li class='nav__item'>
          <button class='button restaurant-menu__button nav__link' data-id='drinks'>Drinks</button>
        </li>
      </ul>`;
  }
}

export default RestaurantMenuNavigation;
