import RestaurantMenu from "./restaurant-menu";

it(`Restaurant Menu component should render correctly`, () => {
  const component = new RestaurantMenu();
  expect(component.getElement()).toMatchSnapshot();
});
