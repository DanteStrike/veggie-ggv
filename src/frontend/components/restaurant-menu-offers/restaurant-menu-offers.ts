import AbstractComponent from "../abstract-component/abstract-component";
import {IRestaurantMenuOffers, RestaurantMenuOfferType} from "../../types";

class RestaurantMenuOffers extends AbstractComponent implements IRestaurantMenuOffers {
  constructor(
    private readonly offers: RestaurantMenuOfferType[],
    private readonly classMod: string | null = null
  ) {
    super();
  }

  private getClassMod(): string {
    return this.classMod ? `restaurant-menu__offers-menu--${this.classMod}` : ``;
  }

  protected getTemplate(): string {
    return `
      <ul class="offers-menu restaurant-menu__offers-menu ${this.getClassMod()}">
        ${this.offers.map((offer) => `
          <li class="offers-menu__item clearfix">
            <div class="offers-menu__wrap">
              <p class="offers-menu__offer">
                <span class="offers-menu__offer-title">${offer.title}</span>
                <span class="offers-menu__offer-products">${offer.products.join(`, `)}</span>
              </p>
            </div>
            <span class="offers-menu__offer-price">${offer.price}$</span>
          </li>
        `).join(``)}
      </ul>`;
  }
}

export default RestaurantMenuOffers;
