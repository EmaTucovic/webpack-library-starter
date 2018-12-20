
import * as array from "./../src/array";

test('test get last', () => {
    expect(array.getLast([1, 2, 3])).toBe(3);
  });