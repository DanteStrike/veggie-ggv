import {Position} from "../../enum";

export const render = (container: HTMLElement, element: HTMLElement, position: Position = Position.BEFOREEND): void => {
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

export const unmount = (element: HTMLElement | null): void => {
  if (element) {
    element.remove();
  }
};
