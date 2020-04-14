import 'angular-mocks';
import { mock } from 'angular';

describe('checkmark', () => {
  beforeEach(mock.module('core'));

  it('should convert boolean values to unicode checkmark or cross', inject((checkmarkFilter) => {
    expect(checkmarkFilter(true)).toBe('\u2713');
    expect(checkmarkFilter(false)).toBe('\u2718');
  }));
});
