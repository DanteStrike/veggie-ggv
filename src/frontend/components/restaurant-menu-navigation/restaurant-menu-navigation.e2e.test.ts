import RestaurantMenuNavigation from "./restaurant-menu-navigation";
import {RestaurantMenuOffersGroup} from "../../enum";

describe(`Restaurant Menu Navigation component should work correctly`, () => {
  let onFilterChangeMock = jest.fn();
  let component;

  beforeEach(() => {
    component = new RestaurantMenuNavigation(RestaurantMenuOffersGroup.STARTERS, onFilterChangeMock);
  });

  afterEach(() => {
    onFilterChangeMock.mockReset();
    component.removeElement();
    component = null;
  });

  it(`Should set current button correctly`, () => {
    const currentButtons = component.getElement().querySelectorAll(`.nav__link--current`);
    expect(currentButtons.length).toBe(1);
    expect(currentButtons[0].dataset.group).toEqual(`starters`);
  });

  it(`Should change current button on click`, () => {
    const otherButton = component.getElement().querySelector(`button[data-group="desserts"]`);
    otherButton.click();

    const currentButtons = component.getElement().querySelectorAll(`.nav__link--current`);
    expect(currentButtons.length).toBe(1);
    expect(currentButtons[0].dataset.group).toEqual(`desserts`);
  });

  it(`Should call onFilterChange on menu button click with correct filter type`, () => {
    const otherButton = component.getElement().querySelector(`button[data-group="desserts"]`);
    otherButton.click();
    expect(onFilterChangeMock).toHaveBeenCalledTimes(1);
    expect(onFilterChangeMock).toHaveBeenLastCalledWith(`desserts`);
  });

  it(`Shouldnt call onFilterChange on current button click`, () => {
    const currentButton = component.getElement().querySelector(`.nav__link--current`);
    currentButton.click();
    expect(onFilterChangeMock).toHaveBeenCalledTimes(0);
  });
});
