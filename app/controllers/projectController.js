const projectService = require('../services/projectService');


exports.getAllProjects = (req, res) => {
  const projects = projectService.getAllProjects();
  res.json(projects);
};


exports.getProjectOverview = (req, res) => {
  const projectId = Number(req.params.id);

  const project = projectService.getProjectOverview(projectId);
  
  res.json(project);
};