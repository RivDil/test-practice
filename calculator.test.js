const calculator = require('./calculator')

test('substract', () => {
    expect(calculator.substract(5,8)).toBe(-3);
});
test('add', () => {
    expect(calculator.add(80,15)).toBe(95);
});
test('divide', () => {
    expect(calculator.divide(25,2)).toBe(12.5);
});
test('multiply', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});