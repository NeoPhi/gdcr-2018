import { hello } from '../src/index';

describe('index', () => {
  describe('hello', () => {
    it('says hello', () => {
      expect(hello('GDCR')).toBe('Hello GDCR');
    })
  });
});
