import {getRandomElement, getRandomNum} from "../utils";
import {MonthSpecialType} from "../types";

const titles: string[] = [
  `Greens fava`,
  `Pea horseradish`,
  `Soko radicchio`,
  `Tigernut`,
  `Yarrow sweet`];
const descriptions: string[] = [
  `Lorem ipsum dolor sit Pellentesque vel enim a`,
  `Lorem ipsum dolor sit`,
  `Pellentesque vel enim a`];
const imgs = [
  `month-specials-offers-1.jpg`,
  `month-specials-offers-2.jpg`,
  `month-specials-offers-3.jpg`,
  `month-specials-offers-4.jpg`,
  `month-specials-offers-5.jpg`,
  `month-specials-offers-6.jpg`];
const price: {min: number, max: number} = {
  min: 5,
  max: 100
};
const getMonthSpecial = (): MonthSpecialType => ({
  title: getRandomElement<string>(titles),
  description: getRandomElement<string>(descriptions),
  img: getRandomElement<string>(imgs),
  price: getRandomNum(price.min, price.max)
});


const monthSpecialsAmount: number = 6;
const monthSpecialsMock: MonthSpecialType[] = new Array(monthSpecialsAmount)
  .fill(``)
  .map(() => getMonthSpecial());

export {monthSpecialsMock};
