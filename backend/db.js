const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite DB
const db = new sqlite3.Database(':memory:');

// Create tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS Address (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    address TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id)
  )`);
});

module.exports = db;
