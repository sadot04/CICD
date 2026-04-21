const calculator = require('./calculator');

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log(`
Usage: node cli.js <operation> <num1> <num2>
Example: node cli.js add 5 10
Operations: add, subtract, multiply, divide
    `);
    process.exit(0);
}

const [operation, a, b] = args;

try {
    const result = calculator.calculate(operation, a, b);
    console.log(`Result: ${result}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
