import {Position} from "../../enum";

export const render = (container: Element, element: Element, position: Position = Position.BEFOREEND): void => {
  switch (position) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
    default:
      break;
  }
};

export const unmount = (element: Element | null): void => {
  if (element) {
    element.remove();
  }
};

export const createElement = (template: string): Element => {
  if (template === ``) {
    throw new Error(`Template invalid: cant be empty`);
  }

  const newElementContainer: HTMLDivElement = document.createElement(`div`);
  newElementContainer.innerHTML = template;

  const isValidElement: boolean = newElementContainer.firstElementChild === newElementContainer.lastElementChild;
  if (!isValidElement) {
    throw new Error(`Template invalid: cant be fragment. Template has not base node`);
  }

  return newElementContainer.firstElementChild!;
};

export const querySelectorSafe = (node: ParentNode, selector: string): Element => {
  const foundedElement = node.querySelector(selector);

  if (!foundedElement) {
    throw new Error(`Error: querySelector cant find element`);
  }

  return foundedElement;
};
