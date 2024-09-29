const express = require('express');
const router = express.Router();
const db = require('../db');

// Add a new user and address
router.post('/', (req, res) => {
  const { name, address } = req.body;
  
  // Insert the user into the User table
  db.run(`INSERT INTO User (name) VALUES (?)`, [name], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const userId = this.lastID;

    // Insert the address into the Address table
    db.run(`INSERT INTO Address (userId, address) VALUES (?, ?)`, [userId, address], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({ userId, addressId: this.lastID });
    });
  });
});

module.exports = router;
