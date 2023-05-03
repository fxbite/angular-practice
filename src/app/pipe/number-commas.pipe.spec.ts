import { NumberCommasPipe } from './number-commas.pipe';

describe('NumberCommasPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberCommasPipe();
    expect(pipe).toBeTruthy();
  });
});
