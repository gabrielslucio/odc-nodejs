const express = require('express');
const cors = require('cors');

const projectRoutes = require('./routes/projectRoutes');
const logger = require('./middleware/logger');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/projects', projectRoutes);

module.exports = app;