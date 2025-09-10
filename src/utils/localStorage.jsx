const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Compile and analyze sales data for Q2.",
        "taskDate": "2025-08-20",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Weekly sync-up with project team.",
        "taskDate": "2025-08-22",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Follow-up",
        "taskDescription": "Call client regarding contract renewal.",
        "taskDate": "2025-08-25",
        "category": "Communication"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug Fixing",
        "taskDescription": "Resolve critical bugs reported in issue tracker.",
        "taskDate": "2025-08-21",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests from junior developers.",
        "taskDate": "2025-08-22",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Documentation Update",
        "taskDescription": "Update API documentation for new features.",
        "taskDate": "2025-08-24",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Backend Optimization",
        "taskDescription": "Optimize database queries for faster response.",
        "taskDate": "2025-08-26",
        "category": "Performance"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Market Research",
        "taskDescription": "Research competitor pricing strategies.",
        "taskDate": "2025-08-20",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create slides for upcoming client pitch.",
        "taskDate": "2025-08-23",
        "category": "Presentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Training Session",
        "taskDescription": "Conduct internal training on new software tools.",
        "taskDate": "2025-08-25",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Policy Drafting",
        "taskDescription": "Draft new policy for remote work.",
        "taskDate": "2025-08-27",
        "category": "Administration"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Aditya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Perform stock inventory verification.",
        "taskDate": "2025-08-21",
        "category": "Operations"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Vendor Communication",
        "taskDescription": "Negotiate with vendor for supply discounts.",
        "taskDate": "2025-08-22",
        "category": "Procurement"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Compliance Audit",
        "taskDescription": "Assist in internal compliance audit.",
        "taskDate": "2025-08-25",
        "category": "Audit"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Kabir",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Design and schedule social media posts.",
        "taskDate": "2025-08-20",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "SEO Optimization",
        "taskDescription": "Improve website SEO ranking with new strategies.",
        "taskDate": "2025-08-23",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Email Newsletter",
        "taskDescription": "Prepare monthly newsletter for subscribers.",
        "taskDate": "2025-08-24",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Ad Campaign Review",
        "taskDescription": "Analyze ROI of last month's ad campaigns.",
        "taskDate": "2025-08-26",
        "category": "Analytics"
      }
    ]
  }
];



const admin = [
  {
    "firstName": "ADMIN",
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

//REVERT HERE
{/*export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))

    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}*/}
export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
