import MonthSpecialsView from "./month-specials-view";

it(`Month specials component should render correctly`, () => {
  const monthSpecials = [{
    title: `T1`,
    description: `D1`,
    img: `I1`,
    price: 1
  }, {
    title: `T2`,
    description: `D2`,
    img: `I2`,
    price: 2
  }];
  const monthSpecialsView = new MonthSpecialsView(monthSpecials);
  expect(monthSpecialsView.getElement()).toMatchSnapshot();
});
