// Chakr Platform JavaScript

// Application Data
const appData = {
  "users": [
    {"id": 1, "name": "Mess Kitchen A", "type": "provider", "location": "IIT Delhi", "rating": 4.8, "totalDonations": 150, "co2Saved": 75.5},
    {"id": 2, "name": "NGO Helping Hands", "type": "consumer", "location": "Delhi NCR", "rating": 4.9, "requestsFulfilled": 89},
    {"id": 3, "name": "Rahul Sharma", "type": "volunteer", "location": "IIT Delhi", "rating": 4.7, "hoursLogged": 45, "level": "Gold"},
    {"id": 4, "name": "Admin User", "type": "admin", "location": "Central Office"}
  ],
  "foodItems": [
    {"id": 1, "name": "Rice & Dal", "quantity": "5kg", "provider": "Mess Kitchen A", "location": "IIT Delhi", "expiryTime": "2 hours", "dietaryTags": ["Vegetarian", "Gluten-free"], "status": "available", "image": "rice-dal.jpg"},
    {"id": 2, "name": "Mixed Vegetables", "quantity": "3kg", "provider": "Hostel Mess B", "location": "AIIMS Delhi", "expiryTime": "4 hours", "dietaryTags": ["Vegan", "Organic"], "status": "requested", "image": "vegetables.jpg"},
    {"id": 3, "name": "Chapati & Curry", "quantity": "8kg", "provider": "College Canteen", "location": "DU North Campus", "expiryTime": "3 hours", "dietaryTags": ["Vegetarian"], "status": "in-transit", "image": "chapati-curry.jpg"},
    {"id": 4, "name": "Fruit Salad", "quantity": "2kg", "provider": "Cafeteria Plus", "location": "Connaught Place", "expiryTime": "1 hour", "dietaryTags": ["Vegan", "Fresh"], "status": "available", "image": "fruit-salad.jpg"},
    {"id": 5, "name": "Pasta & Sauce", "quantity": "4kg", "provider": "Italian Corner", "location": "Khan Market", "expiryTime": "3 hours", "dietaryTags": ["Vegetarian"], "status": "available", "image": "pasta.jpg"}
  ],
  "achievements": [
    {"id": 1, "name": "First Donation", "description": "Made your first food donation", "icon": "🎯", "rarity": "common", "unlocked": true},
    {"id": 2, "name": "Eco Warrior", "description": "Saved 50kg of food waste", "icon": "🌱", "rarity": "rare", "unlocked": true},
    {"id": 3, "name": "Community Hero", "description": "Completed 20 volunteer hours", "icon": "🏆", "rarity": "epic", "unlocked": true},
    {"id": 4, "name": "Perfect Rating", "description": "Maintained 5-star rating for 10 transactions", "icon": "⭐", "rarity": "legendary", "unlocked": false},
    {"id": 5, "name": "Green Champion", "description": "Prevented 100kg of food waste", "icon": "🌿", "rarity": "epic", "unlocked": false},
    {"id": 6, "name": "Social Impact", "description": "Helped 50 families with food donations", "icon": "❤️", "rarity": "rare", "unlocked": true}
  ],
  "stats": {
    "totalMealsSaved": 1247,
    "wasteReduced": 623.5,
    "co2Saved": 311.75,
    "activeUsers": 89,
    "activeDonations": 12,
    "volunteersOnline": 7
  },
  "challenges": [
    {"id": 1, "name": "Weekend Warrior", "description": "Complete 5 donations this weekend", "progress": 60, "reward": "500 points"},
    {"id": 2, "name": "Green Champion", "description": "Save 100kg of food this month", "progress": 75, "reward": "Eco Badge"},
    {"id": 3, "name": "Community Builder", "description": "Get 10 new users to join", "progress": 30, "reward": "Leadership Certificate"}
  ]
};

// Global State
let currentScreen = 'welcome';
let currentUser = null;
let isDarkMode = false;
let currentLanguage = 'en';

// Language translations
const translations = {
  en: {
    welcomeTitle: "Smart Food Waste Reduction",
    welcomeSubtitle: "Connect. Share. Save. Together we can eliminate food waste.",
    chooseRole: "Choose Your Role",
    provider: "Provider",
    consumer: "Consumer", 
    volunteer: "Volunteer",
    admin: "Admin"
  },
  hi: {
    welcomeTitle: "स्मार्ट खाद्य अपशिष्ट न्यूनीकरण",
    welcomeSubtitle: "जुड़ें। साझा करें। बचाएं। मिलकर हम खाद्य अपशिष्ट को समाप्त कर सकते हैं।",
    chooseRole: "अपनी भूमिका चुनें",
    provider: "प्रदाता",
    consumer: "उपभोक्ता",
    volunteer: "स्वयंसेवक",
    admin: "प्रशासक"
  }
};

// Utility Functions
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMessage = toast.querySelector('.toast-message');
  const toastIcon = toast.querySelector('.toast-icon');
  
  // Set icon based on type
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  
  toastIcon.textContent = icons[type] || icons.success;
  toastMessage.textContent = message;
  
  toast.className = `toast ${type}`;
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    if (element.dataset.counter && element.dataset.counter.includes('.')) {
      element.textContent = current.toFixed(1);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

function createConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#4CAF50', '#00BCD4', '#FF9800', '#9C27B0', '#F44336', '#2196F3'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
    
    container.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
  }
}

function updateLanguage() {
  const lang = translations[currentLanguage];
  
  // Update welcome screen text
  const welcomeTitle = document.querySelector('.welcome-title');
  const welcomeSubtitle = document.querySelector('.welcome-subtitle');
  const roleSelectionTitle = document.querySelector('.role-selection h2');
  
  if (welcomeTitle) welcomeTitle.textContent = lang.welcomeTitle;
  if (welcomeSubtitle) welcomeSubtitle.textContent = lang.welcomeSubtitle;
  if (roleSelectionTitle) roleSelectionTitle.textContent = lang.chooseRole;
}

// Screen Management
function showScreen(screenId) {
  console.log('Navigating to screen:', screenId);
  
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show target screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
    currentScreen = screenId;
    
    // Initialize screen-specific content
    if (screenId === 'providerScreen') {
      initProviderDashboard();
    } else if (screenId === 'consumerScreen') {
      initConsumerDashboard();
    } else if (screenId === 'volunteerScreen') {
      initVolunteerDashboard();
    } else if (screenId === 'adminScreen') {
      initAdminDashboard();
    }
    
    console.log('Screen shown successfully:', screenId);
  } else {
    console.error('Screen not found:', screenId);
  }
}

// Provider Dashboard Functions
function initProviderDashboard() {
  renderProviderDonations();
  renderProviderBadges();
  createProviderChart();
  animateCounters();
}

function renderProviderDonations() {
  const container = document.getElementById('providerDonations');
  if (!container) return;
  
  const donations = appData.foodItems.filter(item => item.provider === 'Mess Kitchen A');
  
  container.innerHTML = donations.map(item => `
    <div class="food-card">
      <div class="food-header">
        <h4 class="food-title">${item.name}</h4>
        <span class="food-status status-${item.status}">${item.status}</span>
      </div>
      <div class="food-details">
        <p class="food-meta">📍 ${item.location} • ⏰ Expires in ${item.expiryTime}</p>
        <p class="food-meta">📦 Quantity: ${item.quantity}</p>
        <div class="food-tags">
          ${item.dietaryTags.map(tag => `<span class="food-tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="food-actions">
        <button class="btn btn--outline" onclick="editDonation(${item.id})">
          <span class="material-icons">edit</span>
          Edit
        </button>
        <button class="btn btn--primary" onclick="viewDonationDetails(${item.id})">
          <span class="material-icons">visibility</span>
          View Details
        </button>
      </div>
    </div>
  `).join('');
}

function renderProviderBadges() {
  const container = document.getElementById('providerBadges');
  if (!container) return;
  
  container.innerHTML = appData.achievements.map(achievement => `
    <div class="badge-card ${achievement.unlocked ? '' : 'locked'}">
      <span class="badge-icon">${achievement.icon}</span>
      <h4 class="badge-name">${achievement.name}</h4>
      <p class="badge-description">${achievement.description}</p>
      <span class="badge-rarity rarity-${achievement.rarity}">${achievement.rarity}</span>
    </div>
  `).join('');
}

function createProviderChart() {
  const ctx = document.getElementById('providerChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Donated', 'Requested', 'In Transit', 'Completed'],
      datasets: [{
        data: [45, 20, 15, 120],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Consumer Dashboard Functions
function initConsumerDashboard() {
  renderFoodItems();
  renderConsumerHistory();
  setupSearchFilter();
}

function renderFoodItems() {
  const container = document.getElementById('consumerFoodList');
  if (!container) return;
  
  const availableItems = appData.foodItems.filter(item => item.status === 'available');
  
  container.innerHTML = availableItems.map(item => `
    <div class="food-card" onclick="showFoodModal(${item.id})">
      <div class="food-header">
        <h4 class="food-title">${item.name}</h4>
        <span class="food-status status-${item.status}">${item.status}</span>
      </div>
      <div class="food-details">
        <p class="food-meta">🏪 ${item.provider}</p>
        <p class="food-meta">📍 ${item.location} • 📦 ${item.quantity}</p>
        <div class="food-tags">
          ${item.dietaryTags.map(tag => `<span class="food-tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="food-actions">
        <button class="request-btn" onclick="event.stopPropagation(); requestFood(${item.id})">
          <span class="material-icons">add_shopping_cart</span>
          Request
        </button>
        <span class="expiry-time">⏰ ${item.expiryTime}</span>
      </div>
    </div>
  `).join('');
}

function renderConsumerHistory() {
  const container = document.getElementById('consumerHistory');
  if (!container) return;
  
  const history = [
    { id: 1, item: "Rice & Dal", provider: "Mess Kitchen A", status: "completed", date: "2 days ago" },
    { id: 2, item: "Mixed Vegetables", provider: "Hostel Mess B", status: "in-progress", date: "1 day ago" },
    { id: 3, item: "Fruit Bowl", provider: "Cafeteria Plus", status: "completed", date: "3 days ago" }
  ];
  
  container.innerHTML = history.map(request => `
    <div class="history-item">
      <div class="history-content">
        <h4>${request.item}</h4>
        <p>From: ${request.provider}</p>
        <span class="status status--${request.status === 'completed' ? 'success' : 'warning'}">${request.status}</span>
      </div>
      <div class="history-date">${request.date}</div>
    </div>
  `).join('');
}

function setupSearchFilter() {
  const searchInput = document.querySelector('.search-input');
  const filterChips = document.querySelectorAll('.chip');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterFoodItems(e.target.value);
    });
  }
  
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterFoodItems('', chip.textContent);
    });
  });
}

function filterFoodItems(searchTerm = '', filterType = '') {
  const container = document.getElementById('consumerFoodList');
  if (!container) return;
  
  let filteredItems = appData.foodItems.filter(item => item.status === 'available');
  
  if (searchTerm) {
    filteredItems = filteredItems.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.provider.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  if (filterType && filterType !== 'All') {
    filteredItems = filteredItems.filter(item => 
      item.dietaryTags.includes(filterType) || 
      (filterType === '< 2km' && true) || // Mock distance filter
      (filterType === 'Available Now' && item.status === 'available')
    );
  }
  
  // Re-render filtered items
  renderFilteredItems(filteredItems);
}

function renderFilteredItems(items) {
  const container = document.getElementById('consumerFoodList');
  
  container.innerHTML = items.map(item => `
    <div class="food-card" onclick="showFoodModal(${item.id})">
      <div class="food-header">
        <h4 class="food-title">${item.name}</h4>
        <span class="food-status status-${item.status}">${item.status}</span>
      </div>
      <div class="food-details">
        <p class="food-meta">🏪 ${item.provider}</p>
        <p class="food-meta">📍 ${item.location} • 📦 ${item.quantity}</p>
        <div class="food-tags">
          ${item.dietaryTags.map(tag => `<span class="food-tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="food-actions">
        <button class="request-btn" onclick="event.stopPropagation(); requestFood(${item.id})">
          <span class="material-icons">add_shopping_cart</span>
          Request
        </button>
        <span class="expiry-time">⏰ ${item.expiryTime}</span>
      </div>
    </div>
  `).join('');
}

// Volunteer Dashboard Functions
function initVolunteerDashboard() {
  renderVolunteerTasks();
  renderVolunteerLeaderboard();
  animateCounters();
}

function renderVolunteerTasks() {
  const container = document.getElementById('volunteerTasks');
  if (!container) return;
  
  const tasks = [
    {
      id: 1,
      title: "Pickup: Rice & Dal",
      description: "Collect 5kg Rice & Dal from Mess Kitchen A and deliver to NGO Helping Hands",
      priority: "high",
      distance: "2.3km",
      reward: "50 points",
      timeEstimate: "45 min"
    },
    {
      id: 2,
      title: "Delivery: Mixed Vegetables", 
      description: "Deliver 3kg Mixed Vegetables from Hostel Mess B to Shelter Home",
      priority: "medium",
      distance: "1.8km",
      reward: "35 points",
      timeEstimate: "30 min"
    },
    {
      id: 3,
      title: "Quality Check: Pasta",
      description: "Verify quality and freshness of 4kg Pasta before delivery",
      priority: "low",
      distance: "0.5km", 
      reward: "20 points",
      timeEstimate: "15 min"
    }
  ];
  
  container.innerHTML = tasks.map(task => `
    <div class="task-card">
      <div class="task-header">
        <h4 class="task-title">${task.title}</h4>
        <span class="task-priority priority-${task.priority}">${task.priority} priority</span>
      </div>
      <p class="task-details">${task.description}</p>
      <div class="task-meta">
        <span>📍 ${task.distance}</span>
        <span>⏱️ ${task.timeEstimate}</span>
        <span>🏆 ${task.reward}</span>
      </div>
      <div class="task-actions">
        <button class="accept-btn" onclick="acceptTask(${task.id})">
          <span class="material-icons">check_circle</span>
          Accept Task
        </button>
      </div>
    </div>
  `).join('');
}

function renderVolunteerLeaderboard() {
  const container = document.getElementById('volunteerLeaderboard');
  if (!container) return;
  
  const leaderboard = [
    { rank: 1, name: "Priya Singh", hours: 67, points: 3350 },
    { rank: 2, name: "Amit Kumar", hours: 54, points: 2700 },
    { rank: 3, name: "Rahul Sharma", hours: 45, points: 2250 },
    { rank: 4, name: "Sneha Patel", hours: 38, points: 1900 },
    { rank: 5, name: "Dev Gupta", hours: 32, points: 1600 }
  ];
  
  container.innerHTML = leaderboard.map(user => `
    <div class="leaderboard-item">
      <div class="rank">${user.rank}</div>
      <div class="user-info">
        <div class="user-name">${user.name}</div>
        <div class="user-stats">${user.hours} hours • ${user.points} points</div>
      </div>
      <div class="points">${user.points}</div>
    </div>
  `).join('');
}

// Admin Dashboard Functions
function initAdminDashboard() {
  createAdminCharts();
  renderAdminActivity();
  animateCounters();
}

function createAdminCharts() {
  // Chart 1: Weekly Food Distribution
  const ctx1 = document.getElementById('adminChart1');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Meals Distributed',
          data: [45, 52, 38, 67, 73, 89, 95],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Chart 2: User Engagement
  const ctx2 = document.getElementById('adminChart2');
  if (ctx2) {
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Providers', 'Consumers', 'Volunteers'],
        datasets: [{
          label: 'Active Users',
          data: [25, 34, 30],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

function renderAdminActivity() {
  const container = document.getElementById('adminActivity');
  if (!container) return;
  
  const activities = [
    {
      type: 'donation',
      text: 'New food donation posted by Mess Kitchen A',
      time: '2 minutes ago',
      icon: 'restaurant'
    },
    {
      type: 'request',
      text: 'NGO Helping Hands requested 5kg Rice & Dal',
      time: '5 minutes ago',
      icon: 'shopping_cart'
    },
    {
      type: 'volunteer',
      text: 'Rahul Sharma completed a delivery task',
      time: '10 minutes ago',
      icon: 'delivery_dining'
    },
    {
      type: 'donation',
      text: 'College Canteen posted Chapati & Curry',
      time: '15 minutes ago',
      icon: 'restaurant'
    },
    {
      type: 'request',
      text: 'Shelter Home requested emergency food supplies',
      time: '20 minutes ago',
      icon: 'emergency'
    }
  ];
  
  container.innerHTML = activities.map(activity => `
    <div class="activity-item">
      <div class="activity-icon ${activity.type}">
        <span class="material-icons">${activity.icon}</span>
      </div>
      <div class="activity-content">
        <div class="activity-text">${activity.text}</div>
        <div class="activity-time">${activity.time}</div>
      </div>
    </div>
  `).join('');
}

// Modal Functions
function showFoodModal(foodId) {
  const modal = document.getElementById('foodModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  const food = appData.foodItems.find(item => item.id === foodId);
  if (!food) return;
  
  modalTitle.textContent = food.name;
  modalBody.innerHTML = `
    <div class="modal-food-details">
      <div class="food-image-placeholder">
        <span class="material-icons" style="font-size: 4rem; color: #00BCD4;">restaurant</span>
      </div>
      <h4>${food.name}</h4>
      <p><strong>Provider:</strong> ${food.provider}</p>
      <p><strong>Location:</strong> ${food.location}</p>
      <p><strong>Quantity:</strong> ${food.quantity}</p>
      <p><strong>Expires in:</strong> ${food.expiryTime}</p>
      <div class="modal-tags">
        ${food.dietaryTags.map(tag => `<span class="food-tag">${tag}</span>`).join('')}
      </div>
      <div class="trust-indicators" style="margin-top: 16px;">
        <div class="trust-item">
          <span class="material-icons">verified</span>
          <span>Verified Provider</span>
        </div>
        <div class="trust-item">
          <span class="material-icons">star</span>
          <span>4.8/5 Rating</span>
        </div>
        <div class="trust-item">
          <span class="material-icons">security</span>
          <span>Food Safety Certified</span>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  
  // Store food id for request action
  modal.dataset.foodId = foodId;
}

function hideFoodModal() {
  const modal = document.getElementById('foodModal');
  modal.classList.add('hidden');
}

function requestFood(foodId) {
  const food = appData.foodItems.find(item => item.id === foodId);
  if (food) {
    food.status = 'requested';
    showToast(`Successfully requested ${food.name}!`, 'success');
    createConfetti();
    renderFoodItems();
    hideFoodModal();
  }
}

// Interactive Functions
function acceptTask(taskId) {
  showToast('Task accepted! Navigation route will be provided.', 'success');
  createConfetti();
  
  // Simulate removing task from list
  setTimeout(() => {
    renderVolunteerTasks();
  }, 1000);
}

function editDonation(donationId) {
  showToast('Edit functionality would open donation form here.', 'info');
}

function viewDonationDetails(donationId) {
  const food = appData.foodItems.find(item => item.id === donationId);
  if (food) {
    showFoodModal(donationId);
  }
}

function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach(element => {
    const target = parseFloat(element.dataset.counter);
    animateCounter(element, target);
  });
}

// Global Functions for onclick handlers
window.selectRole = function(role) {
  console.log('Role selected:', role);
  currentUser = { role };
  
  const screenId = role + 'Screen';
  console.log('Attempting to show screen:', screenId);
  showScreen(screenId);
  showToast(`Welcome to ${role} dashboard!`, 'success');
};

window.toggleTheme = function() {
  isDarkMode = !isDarkMode;
  document.documentElement.setAttribute('data-color-scheme', isDarkMode ? 'dark' : 'light');
  
  const icon = document.querySelector('#themeToggle .material-icons');
  if (icon) {
    icon.textContent = isDarkMode ? 'light_mode' : 'dark_mode';
  }
  
  showToast(`Switched to ${isDarkMode ? 'dark' : 'light'} mode`, 'info');
};

window.toggleLanguage = function(lang) {
  // Update active state
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  
  currentLanguage = lang;
  updateLanguage();
  showToast(currentLanguage === 'en' ? 'Language changed to English' : 'भाषा हिंदी में बदली गई', 'info');
};

window.goBack = function() {
  showScreen('welcomeScreen');
  currentUser = null;
};

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  
  // Initialize with welcome screen
  showScreen('welcomeScreen');
  updateLanguage();
  
  console.log('App initialization complete');
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    hideFoodModal();
  }
});

// Initialize tooltips and accessibility features
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[title]').forEach(element => {
    element.setAttribute('aria-label', element.getAttribute('title'));
  });
});

// Progressive enhancement for older browsers
if (!window.CSS || !CSS.supports('backdrop-filter', 'blur(10px)')) {
  // Fallback for browsers that don't support backdrop-filter
  document.documentElement.classList.add('no-backdrop-filter');
}