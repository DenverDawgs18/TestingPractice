const capitalize = require('./testing')

test('capitalizes paul to Paul', () => {
    expect(capitalize("paul")).toBe("Paul")
});

