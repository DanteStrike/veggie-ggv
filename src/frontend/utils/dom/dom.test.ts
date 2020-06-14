import {createElement, querySelectorSafe, render, unmount} from "./dom";
import {Position} from "../../enum";


describe(`Utils dom should work correctly`, () => {
  describe(`Render should work correctly`, () => {
    let containerMock;
    let elementMock;

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

    it(`Unmount null shouldnt crush`, () => {
      unmount(null);
    })
  });

  describe(`CreateElement should work correctly`, () => {
    it(`Create element from template`, () => {
      const templateMock = `<section class="mock-section"><h2 class="mock-header">mock TITLE</h2><p class="mock-description">Lero</p></section>`;

      const elementFromTemplate = createElement(templateMock);
      expect(elementFromTemplate).not.toBeNull();
      expect(elementFromTemplate!.tagName).toEqual(`SECTION`);
      expect(elementFromTemplate!.className).toEqual(`mock-section`);
      expect(elementFromTemplate!.innerHTML).toEqual(`<h2 class="mock-header">mock TITLE</h2><p class="mock-description">Lero</p>`);
    });

    it(`invalid template (template === "")`, () => {
      expect(() => createElement(``)).toThrowError(`Template invalid: cant be empty`);
    });

    it(`invalid template (template === fragment, template has not base node)`, () => {
      expect(() => createElement(`<div></div><div></div>`)).toThrowError(`Template invalid: cant be fragment. Template has not base node`);
    });
  });

  describe(`querySelectorSafe should work correctly`, () => {
    const mockContainer = document.createElement(`section`);
    const mockElementOne = document.createElement(`div`);
    const mockElementTwo = document.createElement(`p`);
    mockContainer.append(mockElementOne);
    mockContainer.append(mockElementTwo);

    it(`QS with not a null check`, () => {
      expect(querySelectorSafe(mockContainer, `div`)).toEqual(mockElementOne);
      expect(querySelectorSafe(mockContainer, `p`)).toEqual(mockElementTwo);
    });

    it(`Null situation`, () => {
      expect(() => querySelectorSafe(mockContainer, `null`)).toThrowError(`Error: querySelector cant find element`);
    });
  });
});
