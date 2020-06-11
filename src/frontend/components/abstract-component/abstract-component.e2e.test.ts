import AbstractComponent from "./abstract-component";
import * as utils from "../../utils";

class MockClass extends AbstractComponent {
  constructor() {
    super();
  }

  protected getTemplate(): string {
    return `<div></div>`
  }
}

describe(`AbstractComponent should work correctly`, () => {
  let mockClass: MockClass;

  beforeEach(() => {
    mockClass = new MockClass();
  });

  it(`AbstractComponent constructor test | private property _element must be null by default`, () => {
    // @ts-ignore
    expect(mockClass.element).toBeNull;
  });

  it(`Public method getElement test`, () => {
    // @ts-ignore
    const getTemplateSpy = jest.spyOn(mockClass, `getTemplate`);
    const createElementSpy = jest.spyOn(utils, `createElement`);

    mockClass.getElement();
    expect(createElementSpy).toHaveBeenCalledTimes(1);
    expect(createElementSpy).toHaveBeenLastCalledWith(`<div></div>`);
    expect(getTemplateSpy).toHaveBeenCalledTimes(1);
  });

  it(`Public method removeElement test`, () => {
    mockClass.getElement();
    mockClass.removeElement();
    // @ts-ignore
    expect(mockClass.element).toBeNull;
  });
});
