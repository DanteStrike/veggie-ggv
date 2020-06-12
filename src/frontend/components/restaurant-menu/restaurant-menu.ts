import AbstractComponent from "../abstract-component/abstract-component";
import {IRestaurantMenu} from "../../types";

class RestaurantMenu extends AbstractComponent implements IRestaurantMenu {
  constructor(
  ) {
    super();
  }

  getNavigationContainer(): Element {
    return this.getElement().querySelector(`.nav`)!;
  }

  getOffersContainer(): Element {
    return this.getElement().querySelector(`.restaurant-menu__offers`)!;
  }

  protected getTemplate(): string {
    return `
        <div class="container">
            <h2 class="title restaurant-menu__title">Menu</h2>
            <nav class="nav restaurant-menu__nav"></nav>
            <div class='restaurant-menu__offers clearfix'></div>
        </div>`;
  }
}

export default RestaurantMenu;
