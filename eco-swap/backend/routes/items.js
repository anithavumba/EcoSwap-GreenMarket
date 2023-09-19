const express = require('express');
const router = express.Router();

// In-memory data store (replace with a database in production)
const items = [];

// Endpoint to fetch all items
router.get('/', (req, res) => {
  res.json(items);
});

// Endpoint to submit a new item
router.post('/', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json({ message: 'Item submitted successfully' });
});

module.exports = router;
