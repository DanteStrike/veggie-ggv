import {getRandomNum} from './random';

describe(`Utils random should work correctly`, () => {
  it(`getRandomNum test`, () => {
    expect(getRandomNum(0, 0)).toBe(0);
    expect(getRandomNum(1, 1)).toBe(1);
    for (let i = 1; i <= 100; i++) {
      expect(getRandomNum(1, 5)).toBeGreaterThanOrEqual(0);
      expect(getRandomNum(1, 5)).toBeLessThanOrEqual(5);
    }
  });
});
