import RestaurantMenuNavigation from "./restaurant-menu-navigation";
import {RestaurantMenuOffersGroup} from "../../enum";

it(`Restaurant Menu Navigation component should render correctly`, () => {
  const component = new RestaurantMenuNavigation(RestaurantMenuOffersGroup.STARTERS, () => {});
  expect(component.getElement()).toMatchSnapshot();
});
