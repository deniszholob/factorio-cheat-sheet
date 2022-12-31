import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  let pipe: TimePipe;

  beforeEach(() => {
    pipe = new TimePipe();
  });

  it('should transform time strings into a human-readable format', () => {
    expect(pipe.transform('00:01:00')).toEqual('1m 0s');
    expect(pipe.transform('01:00:00')).toEqual('1h 0m 0s');
    expect(pipe.transform('00:00:01')).toEqual('1s');
    expect(pipe.transform('01:01:01')).toEqual('1h 1m 1s');
  });

  it('should handle time strings with leading zeros', () => {
    expect(pipe.transform('01:00:01')).toEqual('1h 0m 1s');
    expect(pipe.transform('00:01:01')).toEqual('1m 1s');
  });

  it('should handle time strings with no leading zeros', () => {
    expect(pipe.transform('1:0:1')).toEqual('1h 0m 1s');
    expect(pipe.transform('0:1:1')).toEqual('1m 1s');
  });

  it('should handle empty values', () => {
    expect(pipe.transform('')).toEqual('');
  });
});
