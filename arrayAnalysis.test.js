import analysis from './arrayAnalysis';

describe('Array Analysis Function', () => {
  const array = [1, 9, 7, 6, 356, 1238];
  const array1 = [];

  test('should return an object', () => {
    expect(typeof analysis(array)).toBe('object');
  });

  test('should return an object', () => {
    expect(analysis(array)).toMatchObject({
      average: expect.any(Number),
      min: expect.any(Number),
      max: expect.any(Number),
      length: expect.any(Number),
    });
  });

  test('should return the correct average value', () => {
    expect(analysis(array)).toMatchObject({ average: 269.5 });
  });

  test('should return the correct max value', () => {
    expect(analysis(array)).toMatchObject({ max: 1238 });
  });

  test('should return the correct min value', () => {
    expect(analysis(array)).toMatchObject({ min: 1 });
  });

  test('should return the correct length value', () => {
    expect(analysis(array)).toMatchObject({ length: 6 });
  });

  test('should return false if array is empty', () => {
    expect(analysis(array1)).toBeFalsy();
  });
});

// expect({ a: 1 }).toHaveProperty('a')
// expect({ a: 1 }).toHaveProperty('a', 1)
// expect({ a: { b: 1 } }).toHaveProperty('a.b')
// expect({ a: 1, b: 2 }).toMatchObject({ a: 1 })
// expect({ a: 1, b: 2 }).toMatchObject({
// a: expect.any(Number),
// b: expect.any(Number)
// })
// expect([{ a: 1 }, { b: 2 }]).toEqual([
// expect.objectContaining({ a: expect.any(Number) }),
// expect.anything()
// ])