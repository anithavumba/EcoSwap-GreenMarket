const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// In-memory data store (replace with a database in production)
const items = [];

// WebSocket connections array
const webSocketConnections = [];

// Endpoint to fetch all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Endpoint to submit a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);

  // Send the new item to all connected WebSocket clients
  webSocketConnections.forEach((client) => {
    client.send(JSON.stringify(newItem));
  });

  res.json({ message: 'Item submitted successfully' });
});

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('WebSocket connection established');
  
  // Add the new WebSocket connection to the array
  webSocketConnections.push(ws);

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Handle incoming WebSocket messages
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
    
    // Remove the closed WebSocket connection from the array
    const index = webSocketConnections.indexOf(ws);
    if (index > -1) {
      webSocketConnections.splice(index, 1);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
