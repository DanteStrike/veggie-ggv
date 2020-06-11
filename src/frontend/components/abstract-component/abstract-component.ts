import {createElement} from '../../utils';
import {IAbstractComponent} from "../../types";

abstract class AbstractComponent implements IAbstractComponent {
  private element: Element | null;

  protected constructor() {
    this.element = null;
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }

  protected abstract getTemplate(): string;
}


export default AbstractComponent;
