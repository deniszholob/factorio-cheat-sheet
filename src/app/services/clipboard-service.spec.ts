import { ClipboardService } from './clipboard.service';

describe('ClipboardService', () => {
  let service: ClipboardService;

  beforeEach(() => {
    service = new ClipboardService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should copy a message to the clipboard using execCommand', () => {
    const msg = 'Hello World';
    const spy = jest
      .spyOn(document, 'execCommand')
      .mockImplementation(() => true);
    service.copyMessageExec(msg);
    expect(spy).toHaveBeenCalledWith('copy');
  });

  it('should copy a message to the clipboard using navigator.clipboard', () => {
    const msg = 'Hello World';
    const spy = jest.spyOn(navigator.clipboard, 'writeText').mockImplementation(
      () =>
        new Promise(() => {
          return;
        })
    );
    service.copyMessageNavigator(msg);
    expect(spy).toHaveBeenCalledWith(msg);
  });
});
