const express = require('express');
const path = require('path');
const calculator = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint for calculations
app.post('/api/calculate', (req, res) => {
    const { operation, a, b } = req.body;

    try {
        const result = calculator.calculate(operation, a, b);
        res.json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Fallback for any other request (SPA-like behavior)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Calculator server running at http://localhost:${PORT}`);
});
