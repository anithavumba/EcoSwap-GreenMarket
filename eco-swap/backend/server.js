const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// In-memory data store (replace with a database in production)
const items = [];

// Endpoint to fetch all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Endpoint to submit a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json({ message: 'Item submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
