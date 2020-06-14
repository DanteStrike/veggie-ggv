import AbstractComponent from "../abstract-component/abstract-component";
import {IRestaurantMenuNavigation, IRestaurantMenuButton} from "../../types";
import {RestaurantMenuOffersGroup} from "../../enum";
import {querySelectorSafe} from "../../utils";

class RestaurantMenuNavigation extends AbstractComponent implements IRestaurantMenuNavigation {
  private static readonly currentButtonClassName = `nav__link--current`;

  private currentButton: HTMLButtonElement;

  constructor(
    currentOfferGroup: RestaurantMenuOffersGroup,
    private readonly onFilterChange: (newFilter: RestaurantMenuOffersGroup) => void
  ) {
    super();

    this.currentButton = querySelectorSafe(this.getElement(), `button[data-group="${currentOfferGroup}"]`) as HTMLButtonElement;
    this.currentButton.classList.add(RestaurantMenuNavigation.currentButtonClassName);
    this.initHandlers();
  }

  private initHandlers(): void {
    this.getElement().addEventListener(`click` , (evt: Event) => {this.onMenuClick(evt)})
  }

  private onMenuClick(evt: Event): void {
    const target = evt.target as HTMLElement;

    if (target.tagName !== `BUTTON` || target === this.currentButton) {
      return;
    }

    this.currentButton.classList.remove(RestaurantMenuNavigation.currentButtonClassName);

    const clickedButton: IRestaurantMenuButton = target as IRestaurantMenuButton;
    clickedButton.classList.add(RestaurantMenuNavigation.currentButtonClassName);
    this.currentButton = clickedButton;

    this.onFilterChange(clickedButton.dataset.group);
  }

  protected getTemplate(): string {
    return `
      <ul class='nav__list nav__list--restaurant-menu'>
        <li class='nav__item'>
          <button class='button restaurant-menu__button nav__link' data-group=${RestaurantMenuOffersGroup.STARTERS}>Starters</button>
        </li>
        <li class='nav__item'>
          <button class='button restaurant-menu__button nav__link' data-group=${RestaurantMenuOffersGroup.MAIN_DISHES}>Main Dishes</button>
        </li>
        <li class='nav__item'>
          <button class='button restaurant-menu__button nav__link' data-group=${RestaurantMenuOffersGroup.DESSERTS}>Desserts</button>
        </li>
        <li class='nav__item'>
          <button class='button restaurant-menu__button nav__link' data-group=${RestaurantMenuOffersGroup.DRINKS}>Drinks</button>
        </li>
      </ul>`;
  }
}

export default RestaurantMenuNavigation;
