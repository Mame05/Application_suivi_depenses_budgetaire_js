// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Définir le dossier statique pour les fichiers HTML, CSS et JS
app.use(express.static(path.join(__dirname, '.')));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
