import MonthSpecialsView from "../components/month-specials-view/month-specials-view";
import {Position} from "../enum";
import {render} from "../utils";
import {IMonthSpecialsController, MonthSpecialType} from "../types";

class MonthSpecialsController implements IMonthSpecialsController {
  constructor (
    private readonly container: Element,
    private readonly monthSpecials: MonthSpecialType[]
  ) {}

  init(): void {
    render(this.container, new MonthSpecialsView(this.monthSpecials).getElement(), Position.BEFOREEND)
  }
}

export default MonthSpecialsController;
