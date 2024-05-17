const express = require('express');
const path = require('path');
const app = express();

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

// Routen für die HTML-Seiten
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'kontakt.html'));
});

app.get('/ueber-uns', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ueber-uns.html'));
});

app.get('/impressum', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'impressum.html'));
});

app.get('/datenschutz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'datenschutz.html'));
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
