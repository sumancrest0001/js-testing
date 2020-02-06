const calculator = require('./calculator');

describe('basic calculator', () => {
  const a = 5;
  const b = 4;
  const c = 'c';
  const d = '6';

  test('should return an addition of two element', () => {
    expect(calculator.add(a, b)).toEqual(9)
  })

  test('should return subtraction of two element', () => {
    expect(calculator.sub(a, b)).toEqual(1)
  })

  test('should return multiplication of two element', () => {
    expect(calculator.mul(a, b)).toEqual(20)
  })

  test('should return division of two element', () => {
    expect(calculator.div(a, b)).toBeCloseTo(1.25)
  })

  test('should perform an operation if type coercion', () => {
    expect(calculator.div(a, d)).toBeCloseTo(0.833334)
  })

  test('should perform an operation if type coercion', () => {
    expect(calculator.div(a, 0)).toBe(Infinity)
  })


  test('should return a string if number is added with string', () => {
    expect(calculator.add(a, d)).toEqual('56')
  })
})
