import AbstractComponent from "../abstract-component/abstract-component";
import {IRestaurantMenu} from "../../types";
import {querySelectorSafe} from "../../utils";

class RestaurantMenu extends AbstractComponent implements IRestaurantMenu {
  private readonly navigationContainer: HTMLElement;
  private readonly offersContainer: HTMLElement;
  private onHideOffersTransitioned: () => void = () => {};
  private onShowOffersTransitioned: () => void = () => {};

  constructor(
  ) {
    super();

    this.navigationContainer = querySelectorSafe(this.getElement(), `.nav`) as HTMLElement;
    this.offersContainer = querySelectorSafe(this.getElement(), `.restaurant-menu__offers`) as HTMLElement;

    this.initHandlers();
  }

  getNavigationContainer(): Element {
    return this.navigationContainer;
  }

  getOffersContainer(): Element {
    return this.offersContainer;
  }

  private initHandlers(): void {
    this.offersContainer.addEventListener(`transitionend`, () => this.onOffersTransitionEnd())
  }

  public hideOffers(cb: () => void = () => {}): void {
    this.offersContainer.style.opacity = `0`;
    this.onHideOffersTransitioned = cb;
  }

  public showOffers(cb: () => void = () => {}): void {
    this.offersContainer.style.opacity = `1`;
    this.onShowOffersTransitioned = cb;
  }

  private onOffersTransitionEnd(): void {
    if (this.offersContainer.style.opacity === `0`) {
      this.onHideOffersTransitioned();
    }

    if (this.offersContainer.style.opacity === `1`) {
      this.onShowOffersTransitioned();
    }
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
