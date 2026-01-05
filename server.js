const app = require('./api/index.js'); // Mengambil logic API kamu
const express = require('express');
const path = require('path');

const PORT = 3000;

// 1. Sajikan file statis (HTML, CSS, JS di folder public)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Handle Routing SPA (Agar refresh di /series/ atau /chapter/ tidak 404)
app.get(['/series/*', '/chapter/*', '/ongoing', '/completed'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`FmcComic running on http://localhost:${PORT}`);
});
