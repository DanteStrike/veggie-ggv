import MonthSpecialsController from "./month-specials-controller";

describe(`Month specials controller should work correctly`, () => {
  it(`Controller should render month specials component in container beforeend`, () => {
    const container = document.createElement(`section`);
    const header = document.createElement(`h1`);
    container.append(header);
    expect(container.children[0]).toEqual(header);

    const monthSpecialsMock = [{
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
    const monthSpecialsController = new MonthSpecialsController(container, monthSpecialsMock);
    monthSpecialsController.init();

    expect(container.children[0]).toEqual(header);
    expect(container.children[1]).not.toBeNull();
    expect(container.children[1].className).toEqual(`month-specials__offers-list`);
  });
});
