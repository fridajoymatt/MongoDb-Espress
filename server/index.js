// app.js (ou index.js)

const express = require('express');
const { connectDB } = require('./db'); // Mettez le chemin correct vers votre fichier db.js

const app = express();
const port = 3000;

// Connecter à la base de données
connectDB();

// Vos routes et autres configurations Express ici

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});