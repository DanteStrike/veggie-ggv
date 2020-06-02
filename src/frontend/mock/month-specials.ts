import {getRandomNum} from "../utils";


type Currency = '$' | '₽';

interface IMonthSpecial {
  title: string;
  description: string;
  price: {
    value: number;
    currency: Currency;
  }
}

const getMonthSpecial = (): IMonthSpecial => ({
  title: [`Greens fava`, `Greens fava`, `Pea horseradish`, `Soko radicchio`, `Tigernut`, `Yarrow sweet`][getRandomNum(0, 5)],
  description: [`Lorem ipsum dolor sit Pellentesque vel enim a`, `Lorem ipsum dolor sit`, `Pellentesque vel enim a`][getRandomNum(0, 2)],
  price: {
    value: getRandomNum(5, 100),
    currency: ["$", "₽"][getRandomNum(0, 1)] as Currency
  }
});

interface IMonthSpecialsConfig {
  amount: {
    min: number;
    max: number
  }
}

const monthSpecialsConfig: IMonthSpecialsConfig = {
  amount: {
    min: 4,
    max: 8
  }
};

const monthSpecials: IMonthSpecial[] = new Array(getRandomNum(monthSpecialsConfig.amount.min, monthSpecialsConfig.amount.max))
  .fill(``)
  .map(() => getMonthSpecial());


export {monthSpecials};
