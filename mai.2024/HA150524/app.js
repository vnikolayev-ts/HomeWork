const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Arrays für Hobbys und Einkaufsliste
const hobbys = ['Lesen', 'Radfahren', 'Schwimmen'];
const einkaufsliste = ['Milch', 'Brot', 'Eier'];

// GET-Endpunkt für Hobbys
app.get('/hobbys', (req, res) => {
  res.json(hobbys);
});

// GET-Endpunkt für Einkaufsliste
app.get('/einkaufsliste', (req, res) => {
  res.json(einkaufsliste);
});

// POST-Endpunkt zum Hinzufügen von Hobbys
app.post('/hobbys', (req, res) => {
  const neuesHobby = req.body.hobby;
  if (neuesHobby) {
    hobbys.push(neuesHobby);
    res.status(201).json({ message: 'Hobby hinzugefügt', hobbys });
  } else {
    res.status(400).json({ message: 'Hobby fehlt im Body' });
  }
});

// POST-Endpunkt zum Hinzufügen von Einkaufsliste-Elementen
app.post('/einkaufsliste', (req, res) => {
  const neuesElement = req.body.item;
  if (neuesElement) {
    einkaufsliste.push(neuesElement);
    res.status(201).json({ message: 'Element zur Einkaufsliste hinzugefügt', einkaufsliste });
  } else {
    res.status(400).json({ message: 'Element fehlt im Body' });
  }
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
