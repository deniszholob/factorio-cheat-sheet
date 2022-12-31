import { CeilingPipe } from './ceiling.pipe';

describe('CeilingPipe', () => {
  let pipe: CeilingPipe;

  beforeEach(() => {
    pipe = new CeilingPipe();
  });

  it('should round up a decimal to the nearest whole number', () => {
    expect(pipe.transform(1.1)).toEqual(2);
    expect(pipe.transform(1.5)).toEqual(2);
    expect(pipe.transform(1.9)).toEqual(2);
  });

  it('should return 0 if no value is provided', () => {
    expect(pipe.transform()).toEqual(0);
  });

  it('should return the same value for whole numbers', () => {
    expect(pipe.transform(1)).toEqual(1);
    expect(pipe.transform(2)).toEqual(2);
  });
});
