const { projects, tasks } = require('../data/projects');

exports.getAllProjects = () => {
  return projects;
};

exports.getProjectOverview = (projectId) => {
  const project = projects.find(p => p.Id === projectId);

  if (!project) {
    return { Error: "Project not found" };
  }

  const projectTasks = tasks.filter(t => t.ProjectId === projectId);

  return {
    ...project,
    Tasks: projectTasks
  };
};
