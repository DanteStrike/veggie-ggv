import MonthSpecialsView from "./month-specials-view";
import {monthSpecialsMock} from "../../mock/month-specials";

it(`Month specials component should render correctly`, () => {
  const monthSpecialsView = new MonthSpecialsView(monthSpecialsMock);
  expect(monthSpecialsView.getElement()).toMatchSnapshot();
});
