// npm install express
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/ip', (req, res) => {
    // Pobiera IP z nagłówków proxy lub gniazda
    const ip = req.headers['x-forwarded-for']?.split(',')[0]
             || req.socket.remoteAddress;
    res.json({ ip });
});

app.listen(3000, () => console.log('http://localhost:3000'));