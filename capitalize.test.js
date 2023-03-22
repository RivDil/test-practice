const capitalize = require('./capitalize')

test('Capitalize first letter', () => {
    expect(capitalize('hey everyone')).toBe('Hey everyone');
});
test('Capitalize first letter', () => {
    expect(capitalize('romans were from italy')).toBe('Romans were from italy');
});