export interface IAbstractComponent {
  getElement: () => Element;
  removeElement: () => void;
}
export interface IMonthSpecialsView extends IAbstractComponent {}
export interface IRestaurantMenu extends IAbstractComponent {
  getNavigationContainer: () => Element;
  getOffersContainer: () => Element;
}
export interface IRestaurantMenuNavigation extends IAbstractComponent {}
export interface IRestaurantMenuOffers extends IAbstractComponent {}
