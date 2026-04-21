const calculator = require('./calculator');

describe('Calculator Logic', () => {
    test('adds 5 + 10 to equal 15', () => {
        expect(calculator.calculate('add', 5, 10)).toBe(15);
    });

    test('subtracts 20 - 5 to equal 15', () => {
        expect(calculator.calculate('subtract', 20, 5)).toBe(15);
    });

    test('multiplies 5 * 3 to equal 15', () => {
        expect(calculator.calculate('multiply', 5, 3)).toBe(15);
    });

    test('divides 30 / 2 to equal 15', () => {
        expect(calculator.calculate('divide', 30, 2)).toBe(15);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calculator.calculate('divide', 10, 0)).toThrow('Cannot divide by zero');
    });

    test('throws error for unknown operation', () => {
        expect(() => calculator.calculate('mod', 10, 2)).toThrow('Unknown operation: mod');
    });

    test('handles string input correctly', () => {
        expect(calculator.calculate('add', '5', '10')).toBe(15);
    });

    test('throws error for invalid number input', () => {
        expect(() => calculator.calculate('add', 'abc', 10)).toThrow('Invalid numbers provided');
    });
});
