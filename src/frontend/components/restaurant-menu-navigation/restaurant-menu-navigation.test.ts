import RestaurantMenuNavigation from "./restaurant-menu-navigation";

it(`Restaurant Menu Navigation component should render correctly`, () => {
  const component = new RestaurantMenuNavigation();
  expect(component.getElement()).toMatchSnapshot();
});
