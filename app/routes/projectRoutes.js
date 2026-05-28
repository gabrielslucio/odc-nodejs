const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// GET /projects/:id/overview
router.get('/:id/overview', projectController.getProjectOverview);

module.exports = router;

