import {RestaurantMenuOffersGroup} from "../enum";

export type MonthSpecialType = {
  title: string;
  description: string;
  img: string;
  price: number;
}

export type RestaurantMenuOfferType = {
  id: number;
  group: RestaurantMenuOffersGroup;
  title: string;
  products: string[];
  price: number
}

interface IRestaurantMenuButtonDataset extends DOMStringMap {
  group: RestaurantMenuOffersGroup;
}

export interface IRestaurantMenuButton extends HTMLButtonElement {
  dataset: IRestaurantMenuButtonDataset
}
