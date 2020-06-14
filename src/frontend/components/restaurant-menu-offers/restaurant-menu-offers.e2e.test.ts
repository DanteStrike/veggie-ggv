import {restaurantMenuOffersMock} from "../../mock/restaurant-menu-offers";
import RestaurantMenuOffers from "./restaurant-menu-offers";

describe(`Restaurant Menu should work correctly`, () => {
  it(`Class modification test`, () => {
    const componentWithMod = new RestaurantMenuOffers(restaurantMenuOffersMock, `mod`);
    expect(componentWithMod.getElement().classList.contains(`restaurant-menu__offers-menu--mod`)).toBe(true);

    const componentNoMod = new RestaurantMenuOffers(restaurantMenuOffersMock);
    expect(componentNoMod.getElement().classList.contains(`restaurant-menu__offers-menu--`)).toBe(false);
  });
});
