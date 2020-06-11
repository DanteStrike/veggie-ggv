export const getRandomNum = (min: number = 0, max: number = 1): number => Math.floor(Math.random() * (max - min) + min);
export const getRandomElement = <T>(array: T[]): T => array[getRandomNum(0, array.length - 1)];

