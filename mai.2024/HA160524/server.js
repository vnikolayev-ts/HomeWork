const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const app = express();
const port = 3000;

// Middleware zur Verarbeitung von URL-kodierten Daten
app.use(bodyParser.urlencoded({ extended: true }));

// GET-Endpunkt für das Registrierungsformular
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// POST-Endpunkt zur Verarbeitung des Formulars
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Passwort als MD5-Hash speichern
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    const userData = `Name: ${name}, E-Mail: ${email}, Passwort: ${hashedPassword}\n`;

    fs.appendFile('users.txt', userData, (err) => {
        if (err) {
            console.error('Fehler beim Schreiben der Datei', err);
            return res.status(500).send('Fehler beim Schreiben der Datei');
        }

        // Zeitstempel in 10 Minuten berechnen
        const confirmationDeadline = new Date(Date.now() + 10 * 60000);
        const confirmationTime = confirmationDeadline.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

        // Personalisierte Bestätigungsnachricht
        const confirmationMessage = `
            <h1>Registrierung erfolgreich!</h1>
            <p>Willkommen <strong>${name}</strong>, bitte bestätigen Sie Ihre E-Mail bis <strong>${confirmationTime}</strong>.</p>
        `;
        res.send(confirmationMessage);
    });
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://127.0.0.1:${port}`);
});
