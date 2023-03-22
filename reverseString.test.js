const reverseString = require('./reverseString')

test('Capitalize first letter', () => {
    expect(reverseString('hey everyone')).toBe('enoyreve yeh');
});
test('Capitalize first letter', () => {
    expect(reverseString('romans were from italy')).toBe('ylati morf erew snamor');
});