import * as random from './random';

describe(`Utils random should work correctly`, () => {
  it(`getRandomNum test`, () => {
    expect(random.getRandomNum(0, 0)).toBe(0);
    expect(random.getRandomNum(1, 1)).toBe(1);
    for (let i = 1; i <= 10; i++) {
      const result = random.getRandomNum(1, i);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(i);
      expect(result === Math.floor(result)).toEqual(true);
    }
  });

  it(`getRandomElement test`, () => {
    const getRandomNumSpy = jest
      .spyOn(random, `getRandomNum`)
      // @ts-ignore
      .mockReturnValueOnce(5);

    const mockArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const result = random.getRandomElement<number>(mockArray);
    expect(getRandomNumSpy).toHaveBeenCalledTimes(1);
    expect(getRandomNumSpy).lastCalledWith(0, 9);
    expect(result).toBe(5);
  });
});
