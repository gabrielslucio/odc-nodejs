const projectService = require('../services/projectService');

exports.getProjectOverview = (req, res) => {
  const projectId = Number(req.params.id);

  const project = projectService.getProjectOverview(projectId);
  
  res.json(project);
};