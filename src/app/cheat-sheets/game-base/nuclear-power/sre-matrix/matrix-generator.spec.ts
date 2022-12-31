import { createSREMatrix, sumMatrix } from './matrix-generator';

describe('createSREMatrix', () => {
  it('should create a square matrix of the correct size', () => {
    expect(createSREMatrix(2)).toEqual([
      [2, 2],
      [2, 2],
    ]);
    expect(createSREMatrix(3)).toEqual([
      [2, 2, 2],
      [2, 3, 2],
      [2, 2, 2],
    ]);
  });

  it('should create a rectangular matrix of the correct size', () => {
    expect(createSREMatrix(2, 3)).toEqual([
      [2, 3, 2],
      [3, 4, 3],
    ]);
    expect(createSREMatrix(3, 4)).toEqual([
      [3, 4, 4, 3],
      [4, 5, 5, 4],
      [3, 4, 4, 3],
    ]);
  });

  it('should handle edge cases correctly', () => {
    expect(createSREMatrix(1)).toEqual([[1]]);
    expect(createSREMatrix(1, 1)).toEqual([[1]]);
  });
});

describe('sumMatrix', () => {
  it('should return the sum of a single value', () => {
    expect(sumMatrix(1)).toBe(1);
  });

  it('should return the sum of a 1-dimensional array', () => {
    expect(sumMatrix([1, 2, 3])).toBe(6);
  });

  it('should return the sum of a 2-dimensional array', () => {
    expect(
      sumMatrix([
        [1, 2],
        [3, 4],
      ])
    ).toBe(10);
  });

  it('should return the sum of a 3-dimensional array', () => {
    expect(
      sumMatrix([
        [
          [1, 2],
          [3, 4],
        ],
        [
          [5, 6],
          [7, 8],
        ],
      ])
    ).toBe(36);
  });

  it('should return the sum of a 4-dimensional array', () => {
    expect(
      sumMatrix([
        [
          [
            [1, 2],
            [3, 4],
          ],
          [
            [5, 6],
            [7, 8],
          ],
        ],
        [
          [
            [9, 10],
            [11, 12],
          ],
          [
            [13, 14],
            [15, 16],
          ],
        ],
      ])
    ).toBe(136);
  });
});
