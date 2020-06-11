import AbstractComponent from "../abstract-component/abstract-component";
import {IMonthSpecialsView, MonthSpecialType} from "../../types";

class MonthSpecialsView extends AbstractComponent implements IMonthSpecialsView {
  constructor(
    private readonly monthSpecials: MonthSpecialType[]
  ) {
    super();
  }

  protected getTemplate(): string {
    return `<ul class="month-specials__offers-list">
                ${this.monthSpecials.map((monthSpecial) => `<li class="month-specials__offers-item clearfix">
                <div class="month-specials__offer-img">
                  <img width="248" height="248" src="assets/img/${monthSpecial.img}" alt="${monthSpecial.title}">
                </div>
                <div class="month-specials__offer-wrap">
                  <h3 class="month-specials__offer-title">${monthSpecial.title}</h3>
                  <p class="month-specials__offer-description">${monthSpecial.description}</p>
                  <span class="month-specials__offer-price">${monthSpecial.price}$</span>
                </div>
              </li>`).join(``)}
            </ul>`;
  }
}

export default MonthSpecialsView;
