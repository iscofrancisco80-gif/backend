const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route: Home
app.get('/', (req, res) => {
    res.send('Welcome to My Backend Server!');
});

// Route: API Example
app.get('/api/user', (req, res) => {
    res.json({ name: "John Doe", email: "john@example.com" });
});

// Route: Contact Form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: "Invalid email address" });
    }

    res.json({ 
        message: `Thank you ${name}, we received your message!`, 
        data: { name, email, message } 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
