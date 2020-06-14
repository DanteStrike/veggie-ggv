import RestaurantMenu from "./restaurant-menu";

describe(`Restaurant Menu component should work correctly`, () => {
  const component = new RestaurantMenu();

  it(`Should return correct navigation container`, () => {
    const returnedElement = component.getNavigationContainer();
    expect(returnedElement.classList.contains(`nav`)).toBe(true);
  });

  it(`Should return correct offers container`, () => {
    const returnedElement = component.getOffersContainer();
    expect(returnedElement.classList.contains(`restaurant-menu__offers`)).toBe(true);
  });
});
