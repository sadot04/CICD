/**
 * Simple Calculator Module
 * Handles basic arithmetic operations.
 */
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }

    calculate(operation, a, b) {
        const numA = Number(a);
        const numB = Number(b);

        if (isNaN(numA) || isNaN(numB)) {
            throw new Error("Invalid numbers provided");
        }

        switch (operation) {
            case 'add':
            case '+':
                return this.add(numA, numB);
            case 'subtract':
            case '-':
                return this.subtract(numA, numB);
            case 'multiply':
            case '*':
                return this.multiply(numA, numB);
            case 'divide':
            case '/':
                return this.divide(numA, numB);
            default:
                throw new Error("Unknown operation: " + operation);
        }
    }
}

module.exports = new Calculator();
