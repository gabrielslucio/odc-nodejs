const projects = [
  {
    Id: 1,
    Name: "ODC Agentic Portfolio",
    Description: "Projeto para testar integração com Agentic Apps",
    Status: "Active",
    OwnerId: 1,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  },
  {
    Id: 2,
    Name: "Migration Platform",
    Description: "System migration initiative",
    Status: "On Hold",
    OwnerId: 2,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  },
  {
    Id: 3,
    Name: "AI Recommendation Engine",
    Description: "AI engine for project insights",
    Status: "Active",
    OwnerId: 3,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  },
  {
    Id: 4,
    Name: "Mobile App Revamp",
    Description: "Redesign mobile application UX",
    Status: "Active",
    OwnerId: 4,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  },
  {
    Id: 5,
    Name: "Cloud Infrastructure Setup",
    Description: "Deploy infrastructure to AWS",
    Status: "Completed",
    OwnerId: 2,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  },
  {
    Id: 6,
    Name: "Security Audit",
    Description: "System-wide security review",
    Status: "Active",
    OwnerId: 5,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  },
  {
    Id: 7,
    Name: "Data Warehouse Implementation",
    Description: "Centralized data platform",
    Status: "On Hold",
    OwnerId: 3,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  },
  {
    Id: 8,
    Name: "CRM Integration",
    Description: "Integrate CRM with existing system",
    Status: "Active",
    OwnerId: 1,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  },
  {
    Id: 9,
    Name: "DevOps Pipeline",
    Description: "CI/CD pipeline automation",
    Status: "Active",
    OwnerId: 4,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  },
  {
    Id: 10,
    Name: "Reporting Dashboard",
    Description: "Business analytics dashboard",
    Status: "Completed",
    OwnerId: 2,
    CreatedAt: new Date().toISOString(),
    UpdatedAt: new Date().toISOString()
  }
];

const tasks = [
  // Project 1
  { Id: 1, ProjectId: 1, Title: "Setup DB", Status: "Done", DueDate: "2026-05-20" },
  { Id: 2, ProjectId: 1, Title: "Create API", Status: "Done", DueDate: "2026-05-22" },
  { Id: 3, ProjectId: 1, Title: "Integrate Agent", Status: "Doing", DueDate: "2026-05-15" },
  { Id: 4, ProjectId: 1, Title: "Write Docs", Status: "Todo", DueDate: "2026-05-10" },

  // Project 2
  { Id: 5, ProjectId: 2, Title: "Analyze legacy system", Status: "Doing", DueDate: "2026-06-05" },
  { Id: 6, ProjectId: 2, Title: "Plan migration", Status: "Todo", DueDate: "2026-06-15" },

  // Project 3
  { Id: 7, ProjectId: 3, Title: "Design model", Status: "Done", DueDate: "2026-05-01" },
  { Id: 8, ProjectId: 3, Title: "Train AI", Status: "Doing", DueDate: "2026-06-01" },

  // Project 4
  { Id: 9, ProjectId: 4, Title: "UX Research", Status: "Done", DueDate: "2026-04-25" },
  { Id: 10, ProjectId: 4, Title: "Wireframes", Status: "Todo", DueDate: "2026-06-10" },

  // Project 5
  { Id: 11, ProjectId: 5, Title: "Setup AWS", Status: "Done", DueDate: "2026-03-15" },

  // Project 6
  { Id: 12, ProjectId: 6, Title: "Run vulnerability scan", Status: "Doing", DueDate: "2026-05-30" },

  // Project 7
  { Id: 13, ProjectId: 7, Title: "Design schema", Status: "Todo", DueDate: "2026-07-01" },

  // Project 8
  { Id: 14, ProjectId: 8, Title: "API integration", Status: "Doing", DueDate: "2026-06-05" },

  // Project 9
  { Id: 15, ProjectId: 9, Title: "Setup pipelines", Status: "Todo", DueDate: "2026-06-20" },

  // Project 10
  { Id: 16, ProjectId: 10, Title: "Build dashboard", Status: "Done", DueDate: "2026-04-10" }
];

module.exports = {
  projects,
  tasks
};
