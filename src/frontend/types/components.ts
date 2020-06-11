export interface IAbstractComponent {
  getElement: () => Element;
  removeElement: () => void;
}
export interface IMonthSpecialsView extends IAbstractComponent {}
