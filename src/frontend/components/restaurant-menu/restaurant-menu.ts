import AbstractComponent from "../abstract-component/abstract-component";
import {IRestaurantMenu} from "../../types";
import {querySelectorSafe} from "../../utils";

class RestaurantMenu extends AbstractComponent implements IRestaurantMenu {
  private readonly navigationContainer: Element;
  private readonly offersContainer: Element;

  constructor(
  ) {
    super();

    this.navigationContainer = querySelectorSafe(this.getElement(), `.nav`);
    this.offersContainer = querySelectorSafe(this.getElement(), `.restaurant-menu__offers`);
  }

  getNavigationContainer(): Element {
    return this.navigationContainer;
  }

  getOffersContainer(): Element {
    return this.offersContainer;
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
