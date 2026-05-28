exports.getProjectOverview = (projectId) => {

  const tasks = [
    { id: 1, title: "Setup DB", status: "Done", dueDate: "2026-05-20" },
    { id: 2, title: "Create API", status: "Done", dueDate: "2026-05-22" },
    { id: 3, title: "Integrate Agent", status: "Doing", dueDate: "2026-05-15" },
    { id: 4, title: "Write Docs", status: "Todo", dueDate: "2026-05-10" },
    { id: 5, title: "Deploy", status: "Todo", dueDate: "2026-06-10" }
  ];

  return {
    ProjectId: projectId,
    ProjectName: "Smart Portfolio Project",
    Status: "Active",
    Tasks: tasks
  };
};

