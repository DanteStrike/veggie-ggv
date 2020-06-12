import {IRestaurantMenuController, RestaurantMenuOfferType} from "../../types";
import {render} from "../../utils";
import RestaurantMenu from "../../components/restaurant-menu/restaurant-menu";
import {Position} from "../../enum";
import RestaurantMenuOffers from "../../components/restaurant-menu-offers/restaurant-menu-offers";
import RestaurantMenuNavigation from "../../components/restaurant-menu-navigation/restaurant-menu-navigation";

class RestaurantMenuController implements IRestaurantMenuController{
  private readonly menuView: RestaurantMenu;
  private readonly navigationView: RestaurantMenuNavigation;
  private readonly leftOffersView: RestaurantMenuOffers;
  private readonly rightOffersView: RestaurantMenuOffers;

  constructor(
    private readonly container: Element,
    private readonly offers: RestaurantMenuOfferType[]
  ) {
    this.menuView = new RestaurantMenu();
    this.navigationView = new RestaurantMenuNavigation();

    const offersHalfLength = Math.floor(offers.length / 2);
    const leftColumnOffers = this.offers.slice(0, offersHalfLength);
    const rightColumnOffers = this.offers.slice(offersHalfLength, this.offers.length);

    this.leftOffersView = new RestaurantMenuOffers(leftColumnOffers, `left`);
    this.rightOffersView = new RestaurantMenuOffers(rightColumnOffers, `right`);
  }

  render(): void {
    render(this.container, this.menuView.getElement(), Position.BEFOREEND);
    render(this.menuView.getNavigationContainer(), this.navigationView.getElement(), Position.AFTERBEGIN);
    render(this.menuView.getOffersContainer(), this.leftOffersView.getElement(), Position.AFTERBEGIN);
    render(this.menuView.getOffersContainer(), this.rightOffersView.getElement(), Position.BEFOREEND);
  }
}

export default RestaurantMenuController;
