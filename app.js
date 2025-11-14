// Application Data
const appData = {
  "users": [
    {
      "id": 1,
      "name": "Alex Rodriguez",
      "email": "alex@devdates.com",
      "role": "Full Stack Developer",
      "department": "Engineering",
      "skills": ["JavaScript", "React", "Node.js", "MongoDB"],
      "experience": "3 years",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      "bio": "Passionate full-stack developer with expertise in modern web technologies",
      "availability": "Available",
      "projects": ["E-commerce Platform", "Task Manager App"],
      "faceRecognitionEnabled": true,
      "onlineStatus": "online",
      "lastSeen": "now",
      "location": "New York, NY"
    },
    {
      "id": 2,
      "name": "Sarah Chen",
      "email": "sarah@devdates.com",
      "role": "Frontend Developer",
      "department": "Design",
      "skills": ["React", "Vue.js", "CSS", "UI/UX"],
      "experience": "2 years",
      "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      "bio": "Creative frontend developer focused on user experience and modern interfaces",
      "availability": "Busy",
      "projects": ["Dashboard Analytics", "Mobile App UI"],
      "faceRecognitionEnabled": true,
      "onlineStatus": "online",
      "lastSeen": "5 minutes ago",
      "location": "San Francisco, CA"
    },
    {
      "id": 3,
      "name": "Mike Johnson",
      "email": "mike@devdates.com",
      "role": "Backend Developer",
      "department": "Engineering",
      "skills": ["Python", "Django", "PostgreSQL", "AWS"],
      "experience": "5 years",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      "bio": "Senior backend developer specializing in scalable systems and cloud architecture",
      "availability": "Available",
      "projects": ["API Gateway", "Microservices Architecture"],
      "faceRecognitionEnabled": false,
      "onlineStatus": "away",
      "lastSeen": "2 hours ago",
      "location": "Seattle, WA"
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "E-commerce Platform",
      "description": "Modern e-commerce solution with React frontend and Node.js backend",
      "status": "In Progress",
      "progress": 65,
      "priority": "High",
      "techStack": ["React", "Node.js", "MongoDB", "Stripe"],
      "teamMembers": ["Alex Rodriguez", "Sarah Chen"],
      "deadline": "2025-10-15",
      "budget": "$45,000",
      "client": "RetailCorp Inc.",
      "tasks": {
        "todo": ["Payment integration", "Order tracking", "Mobile optimization"],
        "inProgress": ["Product search", "User authentication", "Shopping cart"],
        "review": ["Product catalog", "User registration", "Database design"],
        "done": ["Project setup", "Initial wireframes", "API planning"]
      },
      "recentActivity": "Alex completed user authentication module",
      "createdDate": "2025-08-15"
    },
    {
      "id": 2,
      "name": "Task Manager App",
      "description": "Collaborative task management tool for development teams",
      "status": "Planning",
      "progress": 25,
      "priority": "Medium",
      "techStack": ["Vue.js", "Express", "PostgreSQL"],
      "teamMembers": ["Alex Rodriguez", "Mike Johnson"],
      "deadline": "2025-11-20",
      "budget": "$32,000",
      "client": "Internal Project",
      "tasks": {
        "todo": ["Database design", "API endpoints", "Frontend components", "User testing"],
        "inProgress": ["Project planning", "UI wireframes"],
        "review": ["Requirements gathering"],
        "done": ["Initial concept", "Technology selection"]
      },
      "recentActivity": "Mike updated database schema",
      "createdDate": "2025-08-28"
    },
    {
      "id": 3,
      "name": "Dashboard Analytics",
      "description": "Real-time analytics dashboard for business metrics",
      "status": "Review",
      "progress": 80,
      "priority": "High",
      "techStack": ["React", "D3.js", "Python", "Flask"],
      "teamMembers": ["Sarah Chen", "Mike Johnson"],
      "deadline": "2025-09-30",
      "budget": "$28,000",
      "client": "DataCorp Analytics",
      "tasks": {
        "todo": ["Performance optimization", "User documentation"],
        "inProgress": ["Final testing"],
        "review": ["Chart animations", "Data visualization", "User testing"],
        "done": ["Data processing", "Chart components", "API integration", "UI design"]
      },
      "recentActivity": "Sarah completed chart animations",
      "createdDate": "2025-07-10"
    }
  ],
  "messages": [
    {
      "id": 1,
      "sender": "Alex Rodriguez",
      "content": "The user authentication module has been completed and is ready for code review.",
      "timestamp": "2025-09-07T10:30:00Z",
      "projectId": 1,
      "type": "text",
      "priority": "normal"
    },
    {
      "id": 2,
      "sender": "Sarah Chen",
      "content": "Excellent work! I'll review the authentication code this afternoon and provide detailed feedback.",
      "timestamp": "2025-09-07T11:15:00Z",
      "projectId": 1,
      "type": "text",
      "priority": "normal"
    },
    {
      "id": 3,
      "sender": "Mike Johnson",
      "content": "Database schema has been finalized. Should we proceed with implementing the API endpoints?",
      "timestamp": "2025-09-07T14:20:00Z",
      "projectId": 2,
      "type": "text",
      "priority": "normal"
    }
  ],
  "notifications": [
    {
      "id": 1,
      "title": "Project Invitation",
      "message": "You have been invited to join the Mobile App UI project",
      "timestamp": "2025-09-07T09:00:00Z",
      "type": "invitation",
      "read": false,
      "priority": "high"
    },
    {
      "id": 2,
      "title": "Code Review Request",
      "message": "Alex Rodriguez has requested a code review for the authentication module",
      "timestamp": "2025-09-07T10:30:00Z",
      "type": "review",
      "read": false,
      "priority": "medium"
    },
    {
      "id": 3,
      "title": "Meeting Reminder",
      "message": "Weekly team standup meeting starts in 30 minutes",
      "timestamp": "2025-09-07T15:30:00Z",
      "type": "meeting",
      "read": true,
      "priority": "high"
    }
  ],
  "recentActivity": [
    {
      "user": "Alex Rodriguez",
      "action": "completed",
      "target": "User Authentication Module",
      "project": "E-commerce Platform",
      "timestamp": "2 hours ago",
      "type": "success"
    },
    {
      "user": "Sarah Chen",
      "action": "created",
      "target": "Payment Integration Task",
      "project": "E-commerce Platform",
      "timestamp": "4 hours ago",
      "type": "info"
    },
    {
      "user": "Mike Johnson",
      "action": "updated",
      "target": "Database Schema",
      "project": "Task Manager App",
      "timestamp": "6 hours ago",
      "type": "info"
    }
  ],
  "companyStats": {
    "totalProjects": 3,
    "activeUsers": 2,
    "completedTasks": 12,
    "pendingReviews": 3,
    "onlineNow": 2,
    "thisMonthDeliveries": 8,
    "teamProductivity": 87
  }
};

// Global state
let currentUser = null;
let currentSection = 'dashboard';
let currentProject = null;

// Authentication Functions
function showLogin() {
    console.log('Opening login modal...');
    showModal('login-modal');
}

function showSignup() {
    console.log('Opening signup modal...');
    showModal('signup-modal');
}

function handleLogin(e) {
    e.preventDefault();
    console.log('Handling login...');
    
    const email = e.target.querySelector('input[type="email"]').value;
    console.log('Login email:', email);
    
    // Find user by email
    currentUser = appData.users.find(user => user.email === email) || appData.users[0];
    console.log('Current user set to:', currentUser.name);
    
    hideModal('login-modal');
    showDashboard();
}

function handleSignup(e) {
    e.preventDefault();
    console.log('Handling signup...');
    
    // For demo purposes, use the first user
    currentUser = appData.users[0];
    console.log('Current user set to:', currentUser.name);
    
    hideModal('signup-modal');
    showDashboard();
}

function handleFaceAuth() {
    console.log('Starting face authentication...');
    
    // Simulate face authentication
    const faceAuthBtn = document.querySelector('.ms-face-auth .ms-btn');
    if (faceAuthBtn) {
        faceAuthBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Recognizing...';
        
        setTimeout(() => {
            currentUser = appData.users[0];
            console.log('Face authentication successful, user:', currentUser.name);
            hideModal('login-modal');
            showDashboard();
        }, 2000);
    }
}

function logout() {
    console.log('Logging out...');
    currentUser = null;
    showPage('landing-page');
}

// Page Management
function showPage(pageId) {
    console.log('Showing page:', pageId);
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

function showDashboard() {
    console.log('Loading dashboard...');
    showPage('dashboard-page');
    populateDashboard();
    showSection('dashboard');
}

// Section Navigation
function showSection(sectionName) {
    console.log('Navigating to section:', sectionName);
    
    // Update navigation
    document.querySelectorAll('.ms-nav-item, .ms-sidebar-link').forEach(link => {
        link.classList.remove('active');
    });
    
    document.querySelectorAll(`[onclick*="showSection('${sectionName}')"]`).forEach(link => {
        link.classList.add('active');
    });

    // Show section content
    document.querySelectorAll('.ms-content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log('Section activated:', sectionName);
    }

    currentSection = sectionName;

    // Load section-specific content
    switch(sectionName) {
        case 'dashboard':
            populateDashboard();
            break;
        case 'projects':
            populateProjects();
            break;
        case 'team':
            populateTeam();
            break;
        case 'messages':
            populateMessages();
            break;
        case 'profile':
            populateProfile();
            break;
    }
}

// Modal Management
function showModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        // Focus first input
        const firstInput = modal.querySelector('input:not([type="hidden"]):not([type="checkbox"])');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
        console.log('Modal opened successfully:', modalId);
    } else {
        console.error('Modal not found:', modalId);
    }
}

function hideModal(modalId) {
    console.log('Closing modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        console.log('Modal closed successfully:', modalId);
    }
}

// User Menu Toggle
function toggleUserMenu() {
    const userDropdown = document.getElementById('user-dropdown');
    if (userDropdown) {
        userDropdown.classList.toggle('hidden');
    }
}

// Password Strength Checker
function checkPasswordStrength(e) {
    const password = e.target.value;
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    
    let strength = 0;
    let strengthClass = '';
    let strengthLabel = '';

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch(strength) {
        case 0:
        case 1:
            strengthClass = 'weak';
            strengthLabel = 'Weak password';
            break;
        case 2:
        case 3:
            strengthClass = 'medium';
            strengthLabel = 'Medium strength';
            break;
        case 4:
            strengthClass = 'strong';
            strengthLabel = 'Strong password';
            break;
        case 5:
            strengthClass = 'very-strong';
            strengthLabel = 'Very strong';
            break;
        default:
            strengthLabel = 'Enter a password';
    }

    if (strengthBar && strengthText) {
        strengthBar.className = `ms-strength-bar ${strengthClass}`;
        strengthText.textContent = strengthLabel;
    }
}

// Dashboard Population
function populateDashboard() {
    if (!currentUser) return;

    console.log('Populating dashboard for user:', currentUser.name);

    // Update stats
    const activeProjectsEl = document.getElementById('active-projects');
    const teamMembersEl = document.getElementById('team-members');
    const completedTasksEl = document.getElementById('completed-tasks');
    const pendingReviewsEl = document.getElementById('pending-reviews');

    if (activeProjectsEl) activeProjectsEl.textContent = appData.companyStats.totalProjects;
    if (teamMembersEl) teamMembersEl.textContent = appData.users.length;
    if (completedTasksEl) completedTasksEl.textContent = appData.companyStats.completedTasks;
    if (pendingReviewsEl) pendingReviewsEl.textContent = appData.companyStats.pendingReviews;

    // Populate activity feed
    const activityFeed = document.getElementById('activity-feed');
    if (activityFeed) {
        activityFeed.innerHTML = appData.recentActivity.map(activity => `
            <div class="ms-activity-item">
                <img src="${getUserAvatar(activity.user)}" alt="${activity.user}" class="ms-activity-avatar">
                <div class="ms-activity-content">
                    <p><strong>${activity.user}</strong> ${activity.action} <em>${activity.target}</em> in ${activity.project}</p>
                    <div class="ms-activity-time">${activity.timestamp}</div>
                </div>
            </div>
        `).join('');
    }

    // Populate notifications
    populateNotifications();
}

function getUserAvatar(userName) {
    const user = appData.users.find(u => u.name === userName);
    return user ? user.avatar : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face';
}

// Projects Population
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    console.log('Populating projects...');

    const userProjects = appData.projects.filter(project => 
        currentUser && project.teamMembers.includes(currentUser.name)
    );

    projectsGrid.innerHTML = userProjects.map(project => `
        <div class="ms-project-card" onclick="showProjectDetails(${project.id})">
            <div class="ms-project-header">
                <h3 class="ms-project-title">${project.name}</h3>
                <span class="ms-project-status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
            </div>
            <p class="ms-project-description">${project.description}</p>
            <div class="ms-progress-bar">
                <div class="ms-progress-fill" style="width: ${project.progress}%"></div>
            </div>
            <div class="ms-project-meta">
                <div class="ms-tech-stack">
                    ${project.techStack.slice(0, 3).map(tech => `
                        <span class="ms-tech-tag">${tech}</span>
                    `).join('')}
                    ${project.techStack.length > 3 ? `<span class="ms-tech-tag">+${project.techStack.length - 3}</span>` : ''}
                </div>
                <span class="ms-project-progress">${project.progress}% complete</span>
            </div>
        </div>
    `).join('');
}

function showProjectDetails(projectId) {
    console.log('Opening project details for ID:', projectId);
    const project = appData.projects.find(p => p.id === projectId);
    if (!project) return;

    currentProject = project;
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('project-modal-title');
    const content = document.getElementById('project-details-content');

    if (title) title.textContent = project.name;
    if (content) {
        content.innerHTML = `
            <div class="ms-project-overview">
                <div class="ms-card">
                    <div class="ms-card-header">
                        <h3>Project Information</h3>
                    </div>
                    <div class="ms-card-body">
                        <p><strong>Description:</strong> ${project.description}</p>
                        <p><strong>Status:</strong> ${project.status}</p>
                        <p><strong>Progress:</strong> ${project.progress}%</p>
                        <p><strong>Deadline:</strong> ${new Date(project.deadline).toLocaleDateString()}</p>
                        <p><strong>Budget:</strong> ${project.budget}</p>
                        <p><strong>Client:</strong> ${project.client}</p>
                        <p><strong>Tech Stack:</strong> ${project.techStack.join(', ')}</p>
                        <p><strong>Team Members:</strong> ${project.teamMembers.join(', ')}</p>
                    </div>
                </div>
                
                <div class="ms-kanban-board">
                    <div class="ms-kanban-column">
                        <div class="ms-column-header">
                            <span class="ms-column-title">To Do</span>
                            <span class="ms-task-count">${project.tasks.todo.length}</span>
                        </div>
                        <div class="ms-task-list">
                            ${project.tasks.todo.map(task => `
                                <div class="ms-task-item">
                                    <div class="ms-task-title">${task}</div>
                                    <div class="ms-task-meta">
                                        <div class="ms-task-priority low"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="ms-kanban-column">
                        <div class="ms-column-header">
                            <span class="ms-column-title">In Progress</span>
                            <span class="ms-task-count">${project.tasks.inProgress.length}</span>
                        </div>
                        <div class="ms-task-list">
                            ${project.tasks.inProgress.map(task => `
                                <div class="ms-task-item">
                                    <div class="ms-task-title">${task}</div>
                                    <div class="ms-task-meta">
                                        <div class="ms-task-priority medium"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="ms-kanban-column">
                        <div class="ms-column-header">
                            <span class="ms-column-title">Review</span>
                            <span class="ms-task-count">${project.tasks.review.length}</span>
                        </div>
                        <div class="ms-task-list">
                            ${project.tasks.review.map(task => `
                                <div class="ms-task-item">
                                    <div class="ms-task-title">${task}</div>
                                    <div class="ms-task-meta">
                                        <div class="ms-task-priority high"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="ms-kanban-column">
                        <div class="ms-column-header">
                            <span class="ms-column-title">Done</span>
                            <span class="ms-task-count">${project.tasks.done.length}</span>
                        </div>
                        <div class="ms-task-list">
                            ${project.tasks.done.map(task => `
                                <div class="ms-task-item">
                                    <div class="ms-task-title">${task}</div>
                                    <div class="ms-task-meta">
                                        <div class="ms-task-priority low"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    showModal('project-modal');
}

function showCreateProject() {
    showModal('create-project-modal');
}

function handleCreateProject(e) {
    e.preventDefault();
    console.log('Creating new project...');
    
    const inputs = e.target.querySelectorAll('input, textarea, select');
    const formData = {};
    
    inputs.forEach(input => {
        if (input.type === 'text' && !formData.name) {
            formData.name = input.value;
        } else if (input.tagName === 'TEXTAREA') {
            formData.description = input.value;
        } else if (input.type === 'text' && input.placeholder.includes('React')) {
            formData.techStack = input.value;
        } else if (input.type === 'date') {
            formData.deadline = input.value;
        }
    });

    const newProject = {
        id: appData.projects.length + 1,
        name: formData.name || 'New Project',
        description: formData.description || 'Project description',
        status: 'Planning',
        progress: 0,
        priority: 'Medium',
        techStack: formData.techStack ? formData.techStack.split(',').map(s => s.trim()) : ['React'],
        teamMembers: [currentUser.name],
        deadline: formData.deadline || '2025-12-31',
        budget: '$25,000',
        client: 'New Client',
        tasks: {
            todo: ['Initial setup', 'Requirements gathering'],
            inProgress: [],
            review: [],
            done: []
        },
        recentActivity: `${currentUser.name} created project`,
        createdDate: new Date().toISOString().split('T')[0]
    };

    appData.projects.push(newProject);
    hideModal('create-project-modal');
    
    // Reset form
    e.target.reset();
    
    // Refresh projects if on projects page
    if (currentSection === 'projects') {
        populateProjects();
    }
    
    // Update dashboard stats
    populateDashboard();
    
    console.log('Project created successfully:', newProject.name);
}

// Team Population
function populateTeam() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;

    console.log('Populating team members...');

    teamGrid.innerHTML = appData.users.map(user => `
        <div class="ms-team-card">
            <img src="${user.avatar}" alt="${user.name}" class="ms-member-avatar">
            <h3 class="ms-member-name">${user.name}</h3>
            <p class="ms-member-role">${user.role}</p>
            <div class="ms-member-status">
                <div class="ms-status-dot ms-status-${user.onlineStatus === 'online' ? 'available' : user.onlineStatus === 'away' ? 'away' : 'busy'}"></div>
                <span>${user.availability}</span>
            </div>
            <div class="ms-member-skills">
                ${user.skills.map(skill => `
                    <span class="ms-skill-tag">${skill}</span>
                `).join('')}
            </div>
            <div class="ms-member-actions">
                <button class="ms-btn ms-btn-primary ms-btn-small" onclick="startChat('${user.name}')">
                    <i class="fas fa-comment"></i>
                    Message
                </button>
                <button class="ms-btn ms-btn-ghost ms-btn-small" onclick="viewProfile('${user.name}')">
                    <i class="fas fa-user"></i>
                    Profile
                </button>
            </div>
        </div>
    `).join('');
}

function startChat(userName) {
    showSection('messages');
    // Select the conversation with this user
    setTimeout(() => {
        selectConversation(userName);
    }, 100);
}

function viewProfile(userName) {
    showSection('profile');
}

// Messages Population
function populateMessages() {
    const conversationsList = document.getElementById('conversations-list');
    if (!conversationsList) return;

    console.log('Populating messages...');

    // Create conversations from team members
    const conversations = [];
    appData.users.forEach(user => {
        if (user.name !== currentUser.name) {
            conversations.push({
                name: user.name,
                avatar: user.avatar,
                lastMessage: getLastMessage(user.name),
                time: "2h ago",
                status: user.onlineStatus
            });
        }
    });

    conversationsList.innerHTML = conversations.map((conv, index) => `
        <div class="ms-conversation-item ${index === 0 ? 'active' : ''}" onclick="selectConversation('${conv.name}')">
            <img src="${conv.avatar}" alt="${conv.name}" class="ms-conversation-avatar">
            <div class="ms-conversation-content">
                <div class="ms-conversation-name">${conv.name}</div>
                <div class="ms-conversation-preview">${conv.lastMessage}</div>
            </div>
        </div>
    `).join('');

    // Load first conversation by default
    if (conversations.length > 0) {
        selectConversation(conversations[0].name);
    }
}

function getLastMessage(userName) {
    const userMessages = appData.messages.filter(msg => msg.sender === userName);
    return userMessages.length > 0 ? userMessages[userMessages.length - 1].content.substring(0, 50) + '...' : 'Start a conversation...';
}

function selectConversation(userName) {
    // Update active conversation
    document.querySelectorAll('.ms-conversation-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const clickedItem = event ? event.target.closest('.ms-conversation-item') : 
                       document.querySelector(`.ms-conversation-item:first-child`);
    if (clickedItem) {
        clickedItem.classList.add('active');
    }
    
    // Update chat header
    const chatTitle = document.getElementById('chat-title');
    if (chatTitle) {
        chatTitle.textContent = userName;
    }
    
    // Load messages
    const chatMessages = document.getElementById('chat-messages');
    const userMessages = appData.messages.filter(msg => 
        msg.sender === userName || msg.sender === currentUser.name
    );

    if (chatMessages) {
        if (userMessages.length > 0) {
            chatMessages.innerHTML = userMessages.map(msg => `
                <div class="ms-message ${msg.sender === currentUser.name ? 'sent' : 'received'}">
                    <div class="ms-message-content">${msg.content}</div>
                    <div class="ms-message-time">${formatTimestamp(msg.timestamp)}</div>
                </div>
            `).join('');
        } else {
            chatMessages.innerHTML = `
                <div class="ms-empty-chat">
                    <i class="fas fa-comments"></i>
                    <h3>Start a conversation with ${userName}</h3>
                    <p>Send a message to begin your collaboration</p>
                </div>
            `;
        }
    }
}

// Profile Population
function populateProfile() {
    if (!currentUser) return;
    showProfileTab('overview');
}

function showProfileTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.ms-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        const overviewTab = document.querySelector('.ms-tab-btn');
        if (overviewTab) overviewTab.classList.add('active');
    }

    // Show tab content
    document.querySelectorAll('.ms-tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    const targetTab = document.getElementById(`${tabName}-tab`);
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

// Notifications
function populateNotifications() {
    const notificationsList = document.getElementById('notifications-list');
    if (!notificationsList) return;

    notificationsList.innerHTML = appData.notifications.map(notification => `
        <div class="ms-notification-item ${notification.read ? 'read' : 'unread'}">
            <div class="ms-notification-title">${notification.title}</div>
            <div class="ms-notification-message">${notification.message}</div>
            <div class="ms-notification-time">${formatTimestamp(notification.timestamp)}</div>
        </div>
    `).join('');
}

function toggleNotifications() {
    const panel = document.getElementById('notifications-panel');
    if (panel) {
        panel.classList.toggle('hidden');
        
        // If showing notifications, make sure they are populated
        if (!panel.classList.contains('hidden')) {
            populateNotifications();
        }
    }
}

function showSettings() {
    console.log('Settings functionality would be implemented here');
}

// Utility Functions
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor(diffMs / (1000 * 60));

    if (diffHrs > 24) {
        return date.toLocaleDateString();
    } else if (diffHrs > 0) {
        return `${diffHrs}h ago`;
    } else if (diffMins > 0) {
        return `${diffMins}m ago`;
    } else {
        return 'Just now';
    }
}

// Mobile Menu Toggle (for responsive design)
function toggleMobileMenu() {
    const sidebar = document.querySelector('.ms-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

// Make functions globally available
window.showLogin = showLogin;
window.showSignup = showSignup;
window.hideModal = hideModal;
window.showModal = showModal;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.handleFaceAuth = handleFaceAuth;
window.handleCreateProject = handleCreateProject;
window.showSection = showSection;
window.showProjectDetails = showProjectDetails;
window.showCreateProject = showCreateProject;
window.toggleNotifications = toggleNotifications;
window.toggleUserMenu = toggleUserMenu;
window.logout = logout;
window.startChat = startChat;
window.viewProfile = viewProfile;
window.selectConversation = selectConversation;
window.showProfileTab = showProfileTab;
window.showSettings = showSettings;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing application...');
    
    // Bind event handlers directly to buttons to ensure they work
    const signInButtons = document.querySelectorAll('button[onclick="showLogin()"]');
    signInButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showLogin();
        });
    });

    const signUpButtons = document.querySelectorAll('button[onclick="showSignup()"]');
    signUpButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showSignup();
        });
    });

    // Password strength checker
    const signupPassword = document.getElementById('signup-password');
    if (signupPassword) {
        signupPassword.addEventListener('input', checkPasswordStrength);
    }

    // Form submissions
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const createProjectForm = document.getElementById('create-project-form');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    if (createProjectForm) {
        createProjectForm.addEventListener('submit', handleCreateProject);
    }

    // Click outside to close dropdowns
    document.addEventListener('click', function(e) {
        // Close user dropdown
        if (!e.target.closest('.ms-user-menu')) {
            const userDropdown = document.getElementById('user-dropdown');
            if (userDropdown && !userDropdown.classList.contains('hidden')) {
                userDropdown.classList.add('hidden');
            }
        }

        // Close notifications panel
        if (!e.target.closest('.ms-action-btn') && !e.target.closest('.ms-notifications-panel')) {
            const notificationsPanel = document.getElementById('notifications-panel');
            if (notificationsPanel && !notificationsPanel.classList.contains('hidden')) {
                notificationsPanel.classList.add('hidden');
            }
        }

        // Close modals when clicking backdrop
        if (e.target.classList.contains('ms-modal-backdrop')) {
            const modal = e.target.closest('.ms-modal');
            if (modal) {
                hideModal(modal.id);
            }
        }
    });

    // Handle keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // ESC to close modals
        if (e.key === 'Escape') {
            document.querySelectorAll('.ms-modal:not(.hidden)').forEach(modal => {
                hideModal(modal.id);
            });
            
            // Close dropdowns
            document.querySelectorAll('.ms-user-dropdown:not(.hidden)').forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
            
            document.querySelectorAll('.ms-notifications-panel:not(.hidden)').forEach(panel => {
                panel.classList.add('hidden');
            });
        }
    });

    // Initialize the application
    showPage('landing-page');
    console.log('Devdates Professional - Microsoft Fluent Design application initialized successfully!');
    });
    function showFindCoDeveloper() {
        showModal('findCoDeveloper-modal');
    }
    
    function showFindCoFounder() {
        showModal('findCoFounder-modal');
    }
    
    function handleFindCoDeveloperForm(e) {
      e.preventDefault();
     alert("Co-Developer request submitted successfully!");
      hideModal('findCoDeveloper-modal');
    }

    function handleFindCoFounderForm(e) {
        e.preventDefault();
        alert("Co-Founder request submitted successfully!");
        hideModal('findCoFounder-modal');
    }
    