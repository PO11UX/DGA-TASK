import { DateFormatterPipe } from '../pipes/date-formatter.pipe';

describe('DateFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new DateFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
