// db.js

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://admin:2qlSaMdPXAWfunWL@cluster0.c7qujj0.mongodb.net/'; // Remplacez par votre URL MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let database;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connecté à la base de données MongoDB');
    database = client.db('datadb'); // Remplacez par le nom de votre base de données
  } catch (error) {
    console.error('Erreur de connexion à la base de données', error);
  }
}

function getDB() {
  return database;
}

module.exports = { connectDB, getDB };
