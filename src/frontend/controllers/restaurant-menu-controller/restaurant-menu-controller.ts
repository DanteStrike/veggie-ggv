import {IRestaurantMenuController, RestaurantMenuOfferType} from "../../types";
import {render} from "../../utils";
import RestaurantMenu from "../../components/restaurant-menu/restaurant-menu";
import {Position, RestaurantMenuOffersGroup} from "../../enum";
import RestaurantMenuOffers from "../../components/restaurant-menu-offers/restaurant-menu-offers";
import RestaurantMenuNavigation from "../../components/restaurant-menu-navigation/restaurant-menu-navigation";

class RestaurantMenuController implements IRestaurantMenuController{
  private static readonly maxOffersInColumn = 7;
  private currentFilter: RestaurantMenuOffersGroup = RestaurantMenuOffersGroup.STARTERS;
  private readonly menuView: RestaurantMenu;
  private readonly navigationView: RestaurantMenuNavigation;
  private filteredOffers: RestaurantMenuOfferType[] = [];
  private leftOffersView: RestaurantMenuOffers;
  private rightOffersView: RestaurantMenuOffers;

  constructor(
    private readonly container: Element,
    private readonly offers: RestaurantMenuOfferType[]
  ) {
    this.menuView = new RestaurantMenu();

    const onFilterChangeBinded = this.onFilterChange.bind(this);
    this.navigationView = new RestaurantMenuNavigation(this.currentFilter, onFilterChangeBinded);

    this.leftOffersView = new RestaurantMenuOffers([], `left`);
    this.rightOffersView = new RestaurantMenuOffers([], `right`);

    this.separateOffersByColumns();
  }

  init(): void {
    render(this.container, this.menuView.getElement(), Position.BEFOREEND);
    render(this.menuView.getNavigationContainer(), this.navigationView.getElement(), Position.AFTERBEGIN);
    this.renderNewOffers();
  }

  private separateOffersByColumns(): void {
    this.filterOffers();

    let leftColumnOffers: RestaurantMenuOfferType[] = [];
    let rightColumnOffers: RestaurantMenuOfferType[] = [];

    switch (true) {
      case (this.filteredOffers.length <= RestaurantMenuController.maxOffersInColumn):
        leftColumnOffers = this.filteredOffers.slice(0, RestaurantMenuController.maxOffersInColumn);
        break;

      case (this.filteredOffers.length > RestaurantMenuController.maxOffersInColumn):
        leftColumnOffers = this.filteredOffers.slice(0, RestaurantMenuController.maxOffersInColumn);
        rightColumnOffers = this.filteredOffers.slice(RestaurantMenuController.maxOffersInColumn, this.filteredOffers.length);
    }

    this.leftOffersView = new RestaurantMenuOffers(leftColumnOffers, `left`);
    this.rightOffersView = new RestaurantMenuOffers(rightColumnOffers, `right`);
  }

  private updateOffersWithAnimation(): void {
    this.menuView.hideOffers(() => {
      this.updateOffers();
      this.menuView.showOffers();
    });
  }

  private updateOffers(): void {
    this.removeOldOffers();
    this.separateOffersByColumns();
    this.renderNewOffers();
  }

  private removeOldOffers(): void {
    this.leftOffersView.removeElement();
    this.rightOffersView.removeElement();
  }

  private renderNewOffers(): void {
    render(this.menuView.getOffersContainer(), this.leftOffersView.getElement(), Position.AFTERBEGIN);
    render(this.menuView.getOffersContainer(), this.rightOffersView.getElement(), Position.BEFOREEND);
  }

  private filterOffers(): void {
    switch (this.currentFilter) {
      case RestaurantMenuOffersGroup.STARTERS:
        this.filteredOffers = this.offers.filter((offer) => offer.group === RestaurantMenuOffersGroup.STARTERS);
        break;

      case RestaurantMenuOffersGroup.MAIN_DISHES:
        this.filteredOffers = this.offers.filter((offer) => offer.group === RestaurantMenuOffersGroup.MAIN_DISHES);
        break;

      case RestaurantMenuOffersGroup.DESSERTS:
        this.filteredOffers = this.offers.filter((offer) => offer.group === RestaurantMenuOffersGroup.DESSERTS);
        break;

      case RestaurantMenuOffersGroup.DRINKS:
        this.filteredOffers = this.offers.filter((offer) => offer.group === RestaurantMenuOffersGroup.DRINKS);
        break;

      default:
        this.filteredOffers = [];
        break;
    }
  }

  private onFilterChange(newFilter: RestaurantMenuOffersGroup): void {
    this.currentFilter = newFilter;
    this.updateOffersWithAnimation();
  }
}

export default RestaurantMenuController;
