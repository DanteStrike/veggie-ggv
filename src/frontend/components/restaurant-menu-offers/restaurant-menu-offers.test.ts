import {restaurantMenuOffersMock} from "../../mock/restaurant-menu-offers";
import RestaurantMenuOffers from "./restaurant-menu-offers";

it(`Restaurant Menu Offers component should render correctly`, () => {
  const component = new RestaurantMenuOffers(restaurantMenuOffersMock, `mod`);
  expect(component.getElement()).toMatchSnapshot();
});
