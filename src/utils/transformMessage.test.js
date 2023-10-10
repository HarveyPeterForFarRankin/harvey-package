import { toUpper } from './transformMessage';

describe('toUpper', () => {
  it('transform to uppercase', () => {
    expect(toUpper('testing')).toEqual('TESTING');
  });
});
