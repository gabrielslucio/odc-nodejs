const express = require('express');
const cors = require('cors');

const projectRoutes = require('./routes/projectRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ LIGA AS ROUTES AQUI
app.use('/projects', projectRoutes);

// Debug route to check if app is working
app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found', path: req.path, method: req.method });
});

module.exports = app;
