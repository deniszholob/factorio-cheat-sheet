import { ReplacePipe } from './replace.pipe';

describe('ReplacePipe', () => {
  let pipe: ReplacePipe;

  beforeEach(() => {
    pipe = new ReplacePipe();
  });

  it('should replace underscores with spaces and capitalize each letter', () => {
    expect(pipe.transform('hello_world')).toEqual('Hello World');
    expect(pipe.transform('this_is_a_test')).toEqual('This Is A Test');
  });

  it('should handle strings with no underscores', () => {
    expect(pipe.transform('hello world')).toEqual('Hello World');
    expect(pipe.transform('This is a test')).toEqual('This Is A Test');
  });

  it('should handle empty values', () => {
    expect(pipe.transform('')).toEqual('');
  });
});
