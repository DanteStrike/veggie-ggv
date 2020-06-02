import {render, unmount} from "./dom";
import {Position} from "../../enum";


describe(`Utils dom should work correctly`, () => {
  describe(`Render should work correctly`, () => {
    let containerMock: HTMLElement;
    let elementMock: HTMLElement;

    beforeEach(() => {
      containerMock = document.createElement(`section`);
      containerMock.innerHTML = `<article></article><article></article>`;
      elementMock = document.createElement(`div`);
    });

    it(`Render element before end (default)`, () => {
      render(containerMock, elementMock);
      expect(containerMock.childElementCount).toBe(3);
      expect(containerMock.children[2]).toEqual(elementMock)
    });

    it(`Render element after begin`, () => {
      render(containerMock, elementMock, Position.AFTERBEGIN);
      expect(containerMock.childElementCount).toBe(3);
      expect(containerMock.children[0]).toEqual(elementMock)
    });

    it(`Render element before end`, () => {
      render(containerMock, elementMock, Position.BEFOREEND);
      expect(containerMock.childElementCount).toBe(3);
      expect(containerMock.children[2]).toEqual(elementMock)
    });
  });

  describe(`Unmount should work correctly`, () => {
    it(`Unmount element from node`, () => {
      const containerMock = document.createElement(`section`);
      containerMock.innerHTML = `<article></article><div></div><article></article>`;

      const unmountedElement = containerMock.querySelector(`div`);
      unmount(unmountedElement);
      expect(containerMock.contains(unmountedElement)).toBe(false);
    });
  })
});
