// Chakr Platform - Fully Functional JavaScript

// Application Data from JSON
const appData = {
  "users": [
    {"id": 1, "name": "Green Leaf Mess", "type": "provider", "location": "IIT Delhi", "coordinates": [28.5449, 77.1928], "rating": 4.9, "totalDonations": 185, "co2Saved": 92.5, "level": "Diamond", "verified": true, "phone": "+91 98765 43210", "email": "greenleaf@iitd.ac.in"},
    {"id": 2, "name": "Hope Foundation", "type": "consumer", "location": "Delhi NCR", "coordinates": [28.6139, 77.2090], "rating": 5.0, "requestsFulfilled": 124, "level": "Gold", "verified": true, "phone": "+91 98765 43211", "email": "contact@hopefoundation.org"},
    {"id": 3, "name": "Priya Sharma", "type": "volunteer", "location": "IIT Delhi", "coordinates": [28.5449, 77.1928], "rating": 4.8, "hoursLogged": 68, "level": "Platinum", "verified": true, "phone": "+91 98765 43212", "email": "priya.sharma@gmail.com"},
    {"id": 4, "name": "Rajesh Kumar", "type": "volunteer", "location": "AIIMS Delhi", "coordinates": [28.5672, 77.2100], "rating": 4.7, "hoursLogged": 45, "level": "Gold", "verified": true, "phone": "+91 98765 43213", "email": "rajesh.kumar@gmail.com"},
    {"id": 5, "name": "Admin User", "type": "admin", "location": "Central Office", "coordinates": [28.6139, 77.2090], "permissions": "full", "phone": "+91 98765 43214", "email": "admin@chakr.org"}
  ],
  "foodItems": [
    {"id": 1, "name": "Dal Tadka & Rice", "quantity": "8kg", "provider": "Green Leaf Mess", "providerId": 1, "location": "IIT Delhi", "coordinates": [28.5449, 77.1928], "expiryTime": "90 minutes", "dietaryTags": ["Vegetarian", "Protein-rich"], "status": "available", "urgency": "high", "servings": 40, "description": "Fresh dal tadka with steamed rice, prepared in hygienic conditions", "posted": "2025-09-20T02:00:00", "image": "dal-rice.jpg"},
    {"id": 2, "name": "Fresh Fruit Medley", "quantity": "4kg", "provider": "Healthy Bites Cafe", "providerId": 6, "location": "AIIMS Delhi", "coordinates": [28.5672, 77.2100], "expiryTime": "2 hours", "dietaryTags": ["Vegan", "Fresh", "Vitamin-rich"], "status": "requested", "urgency": "medium", "servings": 20, "description": "Mixed seasonal fruits including apples, bananas, and oranges", "posted": "2025-09-20T01:30:00", "image": "fruits.jpg"},
    {"id": 3, "name": "Paneer Curry & Roti", "quantity": "12kg", "provider": "Campus Canteen", "providerId": 7, "location": "DU North Campus", "coordinates": [28.6967, 77.2167], "expiryTime": "4 hours", "dietaryTags": ["Vegetarian", "High-protein"], "status": "in-transit", "urgency": "low", "servings": 60, "description": "Homestyle paneer curry with fresh wheat rotis", "posted": "2025-09-20T01:00:00", "image": "paneer-roti.jpg"},
    {"id": 4, "name": "Mixed Vegetable Curry", "quantity": "6kg", "provider": "Hostel Kitchen B", "providerId": 8, "location": "JNU", "coordinates": [28.5384, 77.1667], "expiryTime": "3 hours", "dietaryTags": ["Vegan", "Fiber-rich"], "status": "available", "urgency": "medium", "servings": 30, "description": "Nutritious mixed vegetables cooked with Indian spices", "posted": "2025-09-20T00:45:00", "image": "veg-curry.jpg"},
    {"id": 5, "name": "Sandwich Platter", "quantity": "3kg", "provider": "Quick Bites", "providerId": 9, "location": "Connaught Place", "coordinates": [28.6315, 77.2167], "expiryTime": "1.5 hours", "dietaryTags": ["Vegetarian"], "status": "available", "urgency": "high", "servings": 15, "description": "Assorted vegetable sandwiches with chutneys", "posted": "2025-09-20T02:15:00", "image": "sandwiches.jpg"}
  ],
  "achievements": [
    {"id": 1, "name": "First Donation", "description": "Made your first food donation", "icon": "🎯", "rarity": "bronze", "points": 100, "category": "donation"},
    {"id": 2, "name": "Eco Champion", "description": "Saved 100kg of food waste", "icon": "🌱", "rarity": "gold", "points": 500, "category": "environmental"},
    {"id": 3, "name": "Community Hero", "description": "Completed 50 volunteer hours", "icon": "🏆", "rarity": "diamond", "points": 1000, "category": "volunteer"},
    {"id": 4, "name": "Perfect Rating", "description": "Maintained 5-star rating for 25 transactions", "icon": "⭐", "rarity": "platinum", "points": 750, "category": "quality"},
    {"id": 5, "name": "Speed Demon", "description": "Completed pickup in under 10 minutes", "icon": "⚡", "rarity": "silver", "points": 300, "category": "efficiency"},
    {"id": 6, "name": "Night Owl", "description": "Active during late night hours", "icon": "🦉", "rarity": "bronze", "points": 150, "category": "dedication"}
  ],
  "stats": {
    "totalMealsSaved": 2847,
    "wasteReduced": 1423.5,
    "co2Saved": 711.75,
    "activeUsers": 156,
    "activeDonations": 18,
    "volunteersOnline": 12,
    "impactScore": 9.2,
    "growthRate": 23.5,
    "citiesActive": 12,
    "partnersActive": 45,
    "totalUsers": 1247,
    "completedTransactions": 856
  },
  "tasks": [
    {"id": 1, "title": "Pickup Dal & Rice", "foodItemId": 1, "location": "IIT Delhi", "coordinates": [28.5449, 77.1928], "distance": 2.3, "estimatedTime": 15, "status": "available", "priority": "high", "reward": 50, "volunteerId": null},
    {"id": 2, "title": "Deliver to Hope Foundation", "foodItemId": 2, "location": "Delhi NCR", "coordinates": [28.6139, 77.2090], "distance": 5.7, "estimatedTime": 25, "status": "assigned", "priority": "medium", "reward": 75, "volunteerId": 3},
    {"id": 3, "title": "Pickup Sandwiches", "foodItemId": 5, "location": "Connaught Place", "coordinates": [28.6315, 77.2167], "distance": 8.1, "estimatedTime": 30, "status": "available", "priority": "high", "reward": 60, "volunteerId": null}
  ],
  "notifications": [
    {"id": 1, "type": "urgent", "title": "High Priority Pickup", "message": "Dal Tadka expires in 90 minutes - IIT Delhi", "time": "2 min ago", "read": false, "userId": null},
    {"id": 2, "type": "success", "title": "Request Accepted", "message": "Your fruit medley request has been accepted", "time": "5 min ago", "read": false, "userId": 2},
    {"id": 3, "type": "info", "title": "New Volunteer Task", "message": "Sandwich pickup available nearby", "time": "10 min ago", "read": true, "userId": null}
  ],
  "requests": [
    {"id": 1, "foodItemId": 2, "consumerId": 2, "status": "pending", "requestedAt": "2025-09-20T02:30:00", "message": "Urgent need for our shelter residents"},
    {"id": 2, "foodItemId": 1, "consumerId": 10, "status": "approved", "requestedAt": "2025-09-20T02:00:00", "approvedAt": "2025-09-20T02:05:00"}
  ],
  "mapConfig": {
    "defaultCenter": [28.6139, 77.2090],
    "defaultZoom": 12,
    "clusterDistance": 50,
    "maxZoom": 18,
    "minZoom": 10,
    "tileUrl": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "attribution": "© OpenStreetMap contributors"
  }
};

// Global State Management
const appState = {
  currentScreen: 'welcome',
  currentUser: null,
  currentRole: null,
  currentSection: null,
  userLocation: null,
  map: null,
  markers: null,
  isDarkMode: false,
  currentLanguage: 'en',
  searchTerm: '',
  activeFilters: ['All'],
  notifications: [...appData.notifications],
  requests: [...appData.requests],
  achievements: [...appData.achievements],
  userProgress: {
    provider: { donations: 185, rating: 4.9, co2Saved: 92.5 },
    consumer: { requests: 124, rating: 5.0 },
    volunteer: { hours: 68, rating: 4.8, tasksCompleted: 23 },
    admin: { permissions: 'full' }
  },
  timers: {},
  charts: {}
};

// Language Translations
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
  if (!toast) return;
  
  const toastMessage = toast.querySelector('.toast-message');
  const toastIcon = toast.querySelector('.toast-icon');
  
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  
  if (toastIcon) toastIcon.textContent = icons[type] || icons.success;
  if (toastMessage) toastMessage.textContent = message;
  
  toast.className = `toast ${type}`;
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

function showLoading() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) spinner.classList.remove('hidden');
}

function hideLoading() {
  const spinner = document.getElementById('loadingSpinner');
  if (spinner) spinner.classList.add('hidden');
}

function animateCounter(element, target, duration = 2000) {
  if (!element) return;
  
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
      element.textContent = current.toFixed(1) + (element.dataset.counter.includes('kg') ? 'kg' : '');
    } else {
      element.textContent = Math.floor(current) + (element.dataset.counter.includes('h') ? 'h' : '');
    }
  }, 16);
}

function createConfetti() {
  const container = document.getElementById('confettiContainer');
  if (!container) return;
  
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
  const lang = translations[appState.currentLanguage];
  
  const welcomeTitle = document.querySelector('.welcome-title');
  const welcomeSubtitle = document.querySelector('.welcome-subtitle');
  const roleSelectionTitle = document.querySelector('.role-selection h2');
  
  if (welcomeTitle) welcomeTitle.textContent = lang.welcomeTitle;
  if (welcomeSubtitle) welcomeSubtitle.textContent = lang.welcomeSubtitle;
  if (roleSelectionTitle) roleSelectionTitle.textContent = lang.chooseRole;
}

// Screen Management - FIXED
function showScreen(screenId) {
  console.log('Switching to screen:', screenId);
  
  // Clean up current screen
  if (appState.map) {
    try {
      appState.map.remove();
      appState.map = null;
    } catch (e) {
      console.error('Error cleaning up map:', e);
    }
  }
  
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show target screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
    appState.currentScreen = screenId;
    
    // Initialize screen-specific content
    setTimeout(() => {
      initializeScreen(screenId);
    }, 100);
    
    console.log('Screen shown successfully:', screenId);
    return true;
  } else {
    console.error('Screen not found:', screenId);
    return false;
  }
}

function initializeScreen(screenId) {
  console.log('Initializing screen:', screenId);
  
  switch(screenId) {
    case 'providerScreen':
      switchProviderSection('dashboard');
      break;
    case 'consumerScreen':
      switchConsumerSection('browse');
      break;
    case 'volunteerScreen':
      switchVolunteerSection('tasks');
      break;
    case 'adminScreen':
      switchAdminSection('dashboard');
      break;
  }
  
  // Animate counters after content loads
  setTimeout(() => {
    animateCounters();
  }, 300);
}

// Provider Dashboard Functions - FIXED
function switchProviderSection(section) {
  console.log('Switching provider section to:', section);
  appState.currentSection = section;
  
  // Update navigation
  const navItems = document.querySelectorAll('#providerScreen .bottom-nav .nav-item');
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === section);
  });
  
  const content = document.getElementById('providerContent');
  if (!content) {
    console.error('Provider content container not found');
    return;
  }
  
  switch(section) {
    case 'dashboard':
      content.innerHTML = getProviderDashboardHTML();
      setTimeout(() => {
        createProviderChart();
        animateCounters();
      }, 100);
      break;
    case 'upload':
      content.innerHTML = getProviderUploadHTML();
      break;
    case 'donations':
      content.innerHTML = getProviderDonationsHTML();
      break;
    case 'profile':
      content.innerHTML = getProviderProfileHTML();
      setTimeout(() => renderProviderBadges(), 100);
      break;
  }
}

function getProviderDashboardHTML() {
  return `
    <section class="impact-section glass-card">
      <h2>📊 Your Impact Dashboard</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">restaurant</span>
            <h3>Meals Donated</h3>
          </div>
          <div class="stat-value" data-counter="185">185</div>
          <div class="stat-change positive">+12 this week</div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">eco</span>
            <h3>CO₂ Saved</h3>
          </div>
          <div class="stat-value" data-counter="92.5">92.5kg</div>
          <div class="stat-change positive">+8.2kg this week</div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">star</span>
            <h3>Rating</h3>
          </div>
          <div class="stat-value" data-counter="4.9">4.9</div>
          <div class="stat-change positive">Excellent</div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">verified</span>
            <h3>Status</h3>
          </div>
          <div class="stat-value">Diamond</div>
          <div class="stat-change positive">Verified</div>
        </div>
      </div>
      <div class="chart-container" style="position: relative; height: 300px;">
        <canvas id="providerChart"></canvas>
      </div>
    </section>
  `;
}

function getProviderUploadHTML() {
  return `
    <section class="upload-section glass-card">
      <h2>🍽️ Upload Food Donation</h2>
      <form class="upload-form" onsubmit="submitFoodDonation(event)">
        <div class="camera-section">
          <div class="camera-preview" id="cameraPreview">
            <span class="material-icons camera-icon">photo_camera</span>
            <p>Tap to capture or upload food image</p>
            <button type="button" class="camera-btn" onclick="simulatePhotoCapture()">
              <span class="material-icons">add_a_photo</span>
              Add Photo
            </button>
          </div>
        </div>
        
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Food Item *</label>
            <input type="text" name="foodName" placeholder="e.g., Rice & Dal" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="form-label">Quantity *</label>
            <input type="text" name="quantity" placeholder="e.g., 5kg" class="form-control" required>
          </div>
          <div class="form-group">
            <label class="form-label">Expiry Time *</label>
            <select name="expiryTime" class="form-control" required>
              <option value="">Select expiry time</option>
              <option value="1 hour">1 hour</option>
              <option value="2 hours">2 hours</option>
              <option value="4 hours">4 hours</option>
              <option value="6 hours">6 hours</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Servings</label>
            <input type="number" name="servings" placeholder="e.g., 25" class="form-control">
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Dietary Tags</label>
          <div class="filter-chips" id="dietaryTags">
            <span class="chip" data-tag="Vegetarian" onclick="toggleTag(this)">Vegetarian</span>
            <span class="chip" data-tag="Vegan" onclick="toggleTag(this)">Vegan</span>
            <span class="chip" data-tag="Gluten-free" onclick="toggleTag(this)">Gluten-free</span>
            <span class="chip" data-tag="Organic" onclick="toggleTag(this)">Organic</span>
            <span class="chip" data-tag="Fresh" onclick="toggleTag(this)">Fresh</span>
            <span class="chip" data-tag="Protein-rich" onclick="toggleTag(this)">Protein-rich</span>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea name="description" placeholder="Additional details about the food..." class="form-control" rows="3"></textarea>
        </div>
        
        <button type="submit" class="btn btn--primary btn--full-width">
          <span class="material-icons">cloud_upload</span>
          Post Donation
        </button>
      </form>
    </section>
  `;
}

function getProviderDonationsHTML() {
  const donations = appData.foodItems.filter(item => item.providerId === 1);
  
  return `
    <section class="donations-section glass-card">
      <h2>📋 Manage Active Donations</h2>
      <div class="food-grid">
        ${donations.map(item => `
          <div class="food-card">
            <div class="food-header">
              <h4 class="food-title">${item.name}</h4>
              <span class="food-status status-${item.status}">${item.status}</span>
            </div>
            <div class="food-details">
              <p class="food-meta">📍 ${item.location} • ⏰ ${item.expiryTime}</p>
              <p class="food-meta">📦 ${item.quantity} • 👥 ${item.servings} servings</p>
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
                View Requests
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function getProviderProfileHTML() {
  return `
    <section class="profile-section glass-card">
      <h2>👤 Profile & Achievements</h2>
      <div class="profile-info">
        <div class="stat-card">
          <h3>Green Leaf Mess</h3>
          <p>📧 greenleaf@iitd.ac.in</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 IIT Delhi</p>
          <div class="status status--success">✅ Verified Provider</div>
        </div>
      </div>
      <div class="badges-container" id="providerBadges">
        <!-- Badges will be rendered here -->
      </div>
    </section>
  `;
}

// Consumer Dashboard Functions - FIXED
function switchConsumerSection(section) {
  console.log('Switching consumer section to:', section);
  appState.currentSection = section;
  
  // Update navigation
  const navItems = document.querySelectorAll('#consumerScreen .bottom-nav .nav-item');
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === section);
  });
  
  const content = document.getElementById('consumerContent');
  if (!content) {
    console.error('Consumer content container not found');
    return;
  }
  
  switch(section) {
    case 'browse':
      content.innerHTML = getConsumerBrowseHTML();
      setTimeout(() => renderFoodItems(), 100);
      break;
    case 'map':
      content.innerHTML = getConsumerMapHTML();
      setTimeout(() => initializeMap(), 200);
      break;
    case 'requests':
      content.innerHTML = getConsumerRequestsHTML();
      break;
    case 'profile':
      content.innerHTML = getConsumerProfileHTML();
      break;
  }
}

function getConsumerBrowseHTML() {
  return `
    <section class="search-section glass-card">
      <div class="search-bar">
        <span class="material-icons">search</span>
        <input type="text" placeholder="Search food items..." class="search-input" oninput="handleSearch(this.value)">
      </div>
      <div class="filter-chips">
        <span class="chip active" data-filter="All" onclick="applyFilter(this)">All</span>
        <span class="chip" data-filter="Vegetarian" onclick="applyFilter(this)">Vegetarian</span>
        <span class="chip" data-filter="Vegan" onclick="applyFilter(this)">Vegan</span>
        <span class="chip" data-filter="< 2km" onclick="applyFilter(this)">< 2km</span>
        <span class="chip" data-filter="Available Now" onclick="applyFilter(this)">Available Now</span>
        <span class="chip" data-filter="High Priority" onclick="applyFilter(this)">High Priority</span>
      </div>
    </section>
    
    <section class="food-section glass-card">
      <h2>🍽️ Available Food</h2>
      <div class="food-grid" id="consumerFoodList">
        <!-- Food items will be rendered here -->
      </div>
    </section>
  `;
}

function getConsumerMapHTML() {
  return `
    <section class="map-section glass-card">
      <h2>🗺️ Food Donation Map</h2>
      <div class="map-container">
        <div id="mapElement"></div>
        <div class="map-controls">
          <button class="map-control-btn" onclick="centerMapOnUser()" title="My Location">
            <span class="material-icons">my_location</span>
          </button>
          <button class="map-control-btn" onclick="toggleMapFullscreen()" title="Fullscreen">
            <span class="material-icons">fullscreen</span>
          </button>
        </div>
      </div>
    </section>
    
    <section class="nearby-section glass-card">
      <h2>📍 Nearby Donations</h2>
      <div id="nearbyDonations">
        ${appData.foodItems.filter(item => item.status === 'available').slice(0, 3).map(item => `
          <div class="nearby-item">
            <h4>${item.name}</h4>
            <p>📍 ${item.location} • ⏰ ${item.expiryTime}</p>
            <button class="btn btn--sm btn--primary" onclick="requestFood(${item.id})">Request</button>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function getConsumerRequestsHTML() {
  return `
    <section class="requests-section glass-card">
      <h2>🛒 My Requests</h2>
      <div class="requests-list">
        ${appState.requests.map(request => {
          const foodItem = appData.foodItems.find(item => item.id === request.foodItemId);
          return `
            <div class="request-card">
              <div class="request-header">
                <h4>${foodItem ? foodItem.name : 'Food Item'}</h4>
                <span class="status status--${request.status === 'pending' ? 'warning' : 'success'}">${request.status}</span>
              </div>
              <p class="request-message">${request.message}</p>
              <div class="request-meta">
                <span>Requested: ${new Date(request.requestedAt).toLocaleDateString()}</span>
                ${request.approvedAt ? `<span>Approved: ${new Date(request.approvedAt).toLocaleDateString()}</span>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
    
    <section class="history-section glass-card">
      <h2>📜 Request History</h2>
      <div class="history-list">
        <div class="history-item">
          <div class="history-content">
            <h4>Dal Tadka & Rice</h4>
            <p>From: Green Leaf Mess</p>
            <span class="status status--success">completed</span>
          </div>
          <div class="history-date">2 days ago</div>
        </div>
        <div class="history-item">
          <div class="history-content">
            <h4>Mixed Vegetables</h4>
            <p>From: Hostel Kitchen B</p>
            <span class="status status--success">completed</span>
          </div>
          <div class="history-date">5 days ago</div>
        </div>
      </div>
    </section>
  `;
}

function getConsumerProfileHTML() {
  return `
    <section class="profile-section glass-card">
      <h2>👤 Consumer Profile</h2>
      <div class="profile-info">
        <div class="stat-card">
          <h3>Hope Foundation</h3>
          <p>📧 contact@hopefoundation.org</p>
          <p>📞 +91 98765 43211</p>
          <p>📍 Delhi NCR</p>
          <div class="status status--success">✅ Verified NGO</div>
        </div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">restaurant</span>
            <h3>Requests Fulfilled</h3>
          </div>
          <div class="stat-value" data-counter="124">124</div>
          <div class="stat-change positive">+8 this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">people</span>
            <h3>People Helped</h3>
          </div>
          <div class="stat-value" data-counter="1240">1,240</div>
          <div class="stat-change positive">+80 this month</div>
        </div>
      </div>
    </section>
  `;
}

// Volunteer Dashboard Functions - FIXED
function switchVolunteerSection(section) {
  console.log('Switching volunteer section to:', section);
  appState.currentSection = section;
  
  // Update navigation
  const navItems = document.querySelectorAll('#volunteerScreen .bottom-nav .nav-item');
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === section);
  });
  
  const content = document.getElementById('volunteerContent');
  if (!content) {
    console.error('Volunteer content container not found');
    return;
  }
  
  switch(section) {
    case 'tasks':
      content.innerHTML = getVolunteerTasksHTML();
      break;
    case 'map':
      content.innerHTML = getVolunteerMapHTML();
      setTimeout(() => initializeVolunteerMap(), 200);
      break;
    case 'learning':
      content.innerHTML = getVolunteerLearningHTML();
      break;
    case 'profile':
      content.innerHTML = getVolunteerProfileHTML();
      setTimeout(() => renderVolunteerLeaderboard(), 100);
      break;
  }
}

function getVolunteerTasksHTML() {
  const availableTasks = appData.tasks.filter(task => task.status === 'available');
  
  return `
    <section class="tasks-section glass-card">
      <h2>🎯 Available Tasks</h2>
      <div class="tasks-list">
        ${availableTasks.map(task => `
          <div class="task-card" onclick="showTaskModal(${task.id})">
            <div class="task-header">
              <h4 class="task-title">${task.title}</h4>
              <span class="task-priority priority-${task.priority}">${task.priority}</span>
            </div>
            <p class="task-details">${getTaskDescription(task)}</p>
            <div class="task-meta">
              <span>📍 ${task.distance}km away</span>
              <span>⏱️ ${task.estimatedTime} min</span>
              <span>🏆 ${task.reward} points</span>
            </div>
            <div class="task-actions">
              <button class="accept-btn" onclick="event.stopPropagation(); acceptTask(${task.id})">
                <span class="material-icons">check_circle</span>
                Accept Task
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    
    <section class="active-tasks-section glass-card">
      <h2>⚡ Active Tasks</h2>
      <div class="active-task">
        <p>No active tasks. Accept a task above to get started!</p>
      </div>
    </section>
  `;
}

function getVolunteerMapHTML() {
  return `
    <section class="map-section glass-card">
      <h2>🗺️ Task Map</h2>
      <div class="map-container">
        <div id="volunteerMapElement"></div>
        <div class="map-controls">
          <button class="map-control-btn" onclick="centerMapOnUser()" title="My Location">
            <span class="material-icons">my_location</span>
          </button>
          <button class="map-control-btn" onclick="showOptimalRoute()" title="Show Route">
            <span class="material-icons">directions</span>
          </button>
        </div>
      </div>
    </section>
    
    <section class="route-info glass-card">
      <h3>📍 Task Route Information</h3>
      <div id="routeInfo">
        <p>Available Tasks on Map:</p>
        ${appData.tasks.filter(task => task.status === 'available').map(task => `
          <div class="route-item">
            <strong>${task.title}</strong> - ${task.distance}km away
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function getVolunteerLearningHTML() {
  return `
    <section class="learning-section glass-card">
      <h2>📚 Learning Center</h2>
      <div class="quiz-container">
        <div class="quiz-card">
          <h3>Food Safety Certification</h3>
          <p>Complete this course to handle food donations safely</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 75%"></div>
          </div>
          <p>Progress: 75% complete</p>
          <button class="btn btn--primary" onclick="continueQuiz('safety')">Continue Learning</button>
        </div>
        
        <div class="quiz-card">
          <h3>Nutrition Basics</h3>
          <p>Learn about nutrition to better assist beneficiaries</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 40%"></div>
          </div>
          <p>Progress: 40% complete</p>
          <button class="btn btn--outline" onclick="startQuiz('nutrition')">Continue Course</button>
        </div>
        
        <div class="quiz-card">
          <h3>Emergency Response</h3>
          <p>Handle urgent food distribution scenarios</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
          </div>
          <p>Not started</p>
          <button class="btn btn--outline" onclick="startQuiz('emergency')">Begin</button>
        </div>
      </div>
    </section>
    
    <section class="certificates-section glass-card">
      <h2>🏆 Achievements & Certificates</h2>
      <div class="service-stats">
        <div class="stat-card">
          <div class="stat-icon">⏱️</div>
          <div class="stat-value" data-counter="68">68</div>
          <div class="stat-label">Hours Logged</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">✅</div>
          <div class="stat-value" data-counter="23">23</div>
          <div class="stat-label">Tasks Completed</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📜</div>
          <div class="stat-value" data-counter="3">3</div>
          <div class="stat-label">Certificates</div>
        </div>
      </div>
      <button class="btn btn--primary" onclick="generateCertificate()">
        <span class="material-icons">get_app</span>
        Generate Certificate
      </button>
    </section>
  `;
}

function getVolunteerProfileHTML() {
  return `
    <section class="profile-section glass-card">
      <h2>👤 Volunteer Profile</h2>
      <div class="profile-info">
        <div class="stat-card">
          <h3>Priya Sharma</h3>
          <p>📧 priya.sharma@gmail.com</p>
          <p>📞 +91 98765 43212</p>
          <p>📍 IIT Delhi</p>
          <div class="status status--success">✅ Verified Volunteer</div>
          <div class="level-badge">🏆 Platinum Level</div>
        </div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">schedule</span>
            <h3>Hours This Month</h3>
          </div>
          <div class="stat-value" data-counter="12">12</div>
          <div class="stat-change positive">+4 from last month</div>
        </div>
        <div class="stat-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">star</span>
            <h3>Rating</h3>
          </div>
          <div class="stat-value" data-counter="4.8">4.8</div>
          <div class="stat-change positive">Excellent</div>
        </div>
      </div>
    </section>
    
    <section class="leaderboard-section glass-card">
      <h2>🏆 Volunteer Leaderboard</h2>
      <div class="leaderboard-list" id="volunteerLeaderboard">
        <!-- Leaderboard will be rendered here -->
      </div>
    </section>
  `;
}

// Admin Dashboard Functions - FIXED
function switchAdminSection(section) {
  console.log('Switching admin section to:', section);
  appState.currentSection = section;
  
  // Update navigation
  const navItems = document.querySelectorAll('#adminScreen .sidebar-nav .nav-item');
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.section === section);
  });
  
  const content = document.getElementById('adminContent');
  if (!content) {
    console.error('Admin content container not found');
    return;
  }
  
  switch(section) {
    case 'dashboard':
      content.innerHTML = getAdminDashboardHTML();
      setTimeout(() => {
        createAdminCharts();
        animateCounters();
      }, 100);
      break;
    case 'users':
      content.innerHTML = getAdminUsersHTML();
      break;
    case 'donations':
      content.innerHTML = getAdminDonationsHTML();
      break;
    case 'analytics':
      content.innerHTML = getAdminAnalyticsHTML();
      setTimeout(() => createAnalyticsCharts(), 100);
      break;
    case 'monitoring':
      content.innerHTML = getAdminMonitoringHTML();
      break;
  }
}

function getAdminDashboardHTML() {
  return `
    <section class="admin-dashboard">
      <h2>📊 System Overview</h2>
      <div class="stats-grid">
        <div class="stat-card glass-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">restaurant</span>
            <h3>Meals Saved</h3>
          </div>
          <div class="stat-value" data-counter="2847">2,847</div>
          <div class="stat-change positive">+12% from last week</div>
        </div>
        
        <div class="stat-card glass-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">eco</span>
            <h3>Waste Reduced</h3>
          </div>
          <div class="stat-value" data-counter="1423.5">1,423.5kg</div>
          <div class="stat-change positive">+8% from last week</div>
        </div>
        
        <div class="stat-card glass-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">people</span>
            <h3>Active Users</h3>
          </div>
          <div class="stat-value" data-counter="156">156</div>
          <div class="stat-change positive">+23 new this week</div>
        </div>
        
        <div class="stat-card glass-card">
          <div class="stat-header">
            <span class="material-icons stat-icon">trending_up</span>
            <h3>Growth Rate</h3>
          </div>
          <div class="stat-value" data-counter="23.5">23.5%</div>
          <div class="stat-change positive">Monthly growth</div>
        </div>
      </div>

      <div class="charts-grid">
        <div class="chart-card glass-card">
          <h3>Weekly Donations</h3>
          <div class="chart-container" style="position: relative; height: 300px;">
            <canvas id="adminChart1"></canvas>
          </div>
        </div>
        
        <div class="chart-card glass-card">
          <h3>User Distribution</h3>
          <div class="chart-container" style="position: relative; height: 300px;">
            <canvas id="adminChart2"></canvas>
          </div>
        </div>
      </div>

      <div class="activity-section glass-card">
        <h3>Recent Activity</h3>
        <div class="activity-feed" id="adminActivity">
          <!-- Activity will be rendered here -->
        </div>
      </div>
    </section>
  `;
}

function getAdminUsersHTML() {
  return `
    <section class="users-section">
      <h2>👥 User Management</h2>
      <div class="glass-card">
        <div class="search-bar">
          <span class="material-icons">search</span>
          <input type="text" placeholder="Search users..." class="search-input" oninput="filterUsers(this.value)">
        </div>
        
        <div class="users-table">
          ${appData.users.map(user => `
            <div class="user-row">
              <div class="user-info">
                <h4>${user.name}</h4>
                <p>${user.email}</p>
                <span class="user-type">${user.type}</span>
              </div>
              <div class="user-stats">
                <span>Rating: ${user.rating || 'N/A'}</span>
                ${user.verified ? '<span class="status status--success">Verified</span>' : '<span class="status status--warning">Pending</span>'}
              </div>
              <div class="user-actions">
                <button class="btn btn--outline" onclick="viewUser(${user.id})">View</button>
                <button class="btn btn--primary" onclick="editUser(${user.id})">Edit</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function getAdminDonationsHTML() {
  return `
    <section class="donations-admin-section">
      <h2>🍽️ Donation Management</h2>
      <div class="glass-card">
        <div class="donations-overview">
          <div class="stats-grid">
            <div class="stat-card">
              <h3>Active Donations</h3>
              <div class="stat-value">${appData.stats.activeDonations}</div>
            </div>
            <div class="stat-card">
              <h3>Completed Today</h3>
              <div class="stat-value">47</div>
            </div>
            <div class="stat-card">
              <h3>Pending Approval</h3>
              <div class="stat-value">3</div>
            </div>
          </div>
        </div>
        
        <div class="donations-list">
          ${appData.foodItems.map(item => `
            <div class="donation-row">
              <div class="donation-info">
                <h4>${item.name}</h4>
                <p>${item.provider} - ${item.location}</p>
                <div class="donation-meta">
                  <span>Quantity: ${item.quantity}</span>
                  <span>Expires: ${item.expiryTime}</span>
                </div>
              </div>
              <div class="donation-status">
                <span class="food-status status-${item.status}">${item.status}</span>
                <span class="urgency-${item.urgency}">${item.urgency} priority</span>
              </div>
              <div class="donation-actions">
                <button class="btn btn--outline" onclick="moderateDonation(${item.id})">Review</button>
                <button class="btn btn--primary" onclick="viewDonationDetails(${item.id})">Details</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function getAdminAnalyticsHTML() {
  return `
    <section class="analytics-section">
      <h2>📈 Advanced Analytics</h2>
      
      <div class="charts-grid">
        <div class="chart-card glass-card">
          <h3>Monthly Trends</h3>
          <div class="chart-container" style="position: relative; height: 300px;">
            <canvas id="trendsChart"></canvas>
          </div>
        </div>
        
        <div class="chart-card glass-card">
          <h3>Food Category Distribution</h3>
          <div class="chart-container" style="position: relative; height: 300px;">
            <canvas id="categoryChart"></canvas>
          </div>
        </div>
      </div>
      
      <div class="export-section glass-card">
        <h3>📊 Export Data</h3>
        <div class="export-buttons">
          <button class="btn btn--outline" onclick="exportData('pdf')">
            <span class="material-icons">picture_as_pdf</span>
            Export PDF
          </button>
          <button class="btn btn--outline" onclick="exportData('excel')">
            <span class="material-icons">table_chart</span>
            Export Excel
          </button>
          <button class="btn btn--primary" onclick="generateReport()">
            <span class="material-icons">analytics</span>
            Generate Report
          </button>
        </div>
      </div>
    </section>
  `;
}

function getAdminMonitoringHTML() {
  return `
    <section class="monitoring-section">
      <h2>🖥️ System Monitoring</h2>
      
      <div class="monitoring-grid">
        <div class="monitor-card glass-card">
          <h3>System Health</h3>
          <div class="health-indicators">
            <div class="health-item">
              <span class="health-label">API Status</span>
              <span class="status status--success">Healthy</span>
            </div>
            <div class="health-item">
              <span class="health-label">Database</span>
              <span class="status status--success">Connected</span>
            </div>
            <div class="health-item">
              <span class="health-label">Cache</span>
              <span class="status status--warning">95% Full</span>
            </div>
            <div class="health-item">
              <span class="health-label">Storage</span>
              <span class="status status--success">82% Used</span>
            </div>
          </div>
        </div>
        
        <div class="monitor-card glass-card">
          <h3>Active Alerts</h3>
          <div class="alerts-list">
            <div class="alert-item warning">
              <span class="material-icons">warning</span>
              <div>
                <strong>High Memory Usage</strong>
                <p>Server memory usage at 87%</p>
              </div>
            </div>
            <div class="alert-item info">
              <span class="material-icons">info</span>
              <div>
                <strong>Scheduled Maintenance</strong>
                <p>System update at 2:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="logs-section glass-card">
        <h3>📋 System Logs</h3>
        <div class="log-viewer">
          <div class="log-entry">
            <span class="log-time">03:15:23</span>
            <span class="log-level info">INFO</span>
            <span class="log-message">New donation posted by Green Leaf Mess</span>
          </div>
          <div class="log-entry">
            <span class="log-time">03:12:10</span>
            <span class="log-level success">SUCCESS</span>
            <span class="log-message">Food delivery completed successfully</span>
          </div>
          <div class="log-entry">
            <span class="log-time">03:08:45</span>
            <span class="log-level warning">WARNING</span>
            <span class="log-message">Food expiry alert sent for item #1247</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Map Functionality - FIXED
function initializeMap() {
  try {
    const mapElement = document.getElementById('mapElement');
    if (!mapElement) {
      console.error('Map element not found');
      return;
    }

    // Clean up existing map
    if (appState.map) {
      appState.map.remove();
    }

    console.log('Initializing map...');

    // Initialize map with Delhi coordinates
    appState.map = L.map('mapElement', {
      center: appData.mapConfig.defaultCenter,
      zoom: appData.mapConfig.defaultZoom,
      zoomControl: true
    });

    // Add OpenStreetMap tiles
    L.tileLayer(appData.mapConfig.tileUrl, {
      attribution: appData.mapConfig.attribution,
      maxZoom: appData.mapConfig.maxZoom,
      minZoom: appData.mapConfig.minZoom
    }).addTo(appState.map);

    // Create marker cluster group
    appState.markers = L.markerClusterGroup({
      chunkedLoading: true,
      maxClusterRadius: appData.mapConfig.clusterDistance
    });

    // Add food donation markers
    appData.foodItems.forEach(item => {
      if (item.status === 'available' && item.coordinates) {
        const marker = L.marker(item.coordinates)
          .bindPopup(`
            <div class="map-popup">
              <h4>${item.name}</h4>
              <p><strong>${item.provider}</strong></p>
              <p>📍 ${item.location}</p>
              <p>📦 ${item.quantity}</p>
              <p>⏰ Expires in ${item.expiryTime}</p>
              <div class="popup-tags">
                ${item.dietaryTags.map(tag => `<span class="food-tag">${tag}</span>`).join('')}
              </div>
              <button onclick="requestFood(${item.id})" class="btn btn--primary btn--sm" style="margin-top: 8px;">
                Request Food
              </button>
            </div>
          `);
        
        appState.markers.addLayer(marker);
      }
    });

    appState.map.addLayer(appState.markers);

    // Get user location
    getUserLocation();
    
    console.log('Map initialized successfully');
    showToast('Map loaded successfully!', 'success');
  } catch (error) {
    console.error('Error initializing map:', error);
    showToast('Failed to load map', 'error');
  }
}

function initializeVolunteerMap() {
  try {
    const mapElement = document.getElementById('volunteerMapElement');
    if (!mapElement) return;

    const volunteerMap = L.map('volunteerMapElement', {
      center: appData.mapConfig.defaultCenter,
      zoom: appData.mapConfig.defaultZoom
    });

    L.tileLayer(appData.mapConfig.tileUrl, {
      attribution: appData.mapConfig.attribution
    }).addTo(volunteerMap);

    // Add task markers
    appData.tasks.forEach(task => {
      if (task.status === 'available') {
        const marker = L.marker(task.coordinates)
          .bindPopup(`
            <div class="map-popup">
              <h4>${task.title}</h4>
              <p>📍 ${task.location}</p>
              <p>📏 ${task.distance}km away</p>
              <p>⏱️ ${task.estimatedTime} minutes</p>
              <p>🏆 ${task.reward} points</p>
              <button onclick="acceptTask(${task.id})" class="btn btn--primary btn--sm" style="margin-top: 8px;">
                Accept Task
              </button>
            </div>
          `);
        
        marker.addTo(volunteerMap);
      }
    });

    showToast('Task map loaded successfully!', 'success');
  } catch (error) {
    console.error('Error initializing volunteer map:', error);
    showToast('Failed to load task map', 'error');
  }
}

function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        appState.userLocation = [position.coords.latitude, position.coords.longitude];
        
        if (appState.map) {
          // Add user location marker
          const userIcon = L.divIcon({
            html: '<span class="material-icons" style="color: #2196F3; font-size: 24px;">my_location</span>',
            className: 'user-location-marker',
            iconSize: [24, 24]
          });
          
          L.marker(appState.userLocation, {icon: userIcon})
            .bindPopup('Your Location')
            .addTo(appState.map);
        }
        
        showToast('Location found!', 'success');
      },
      (error) => {
        console.error('Geolocation error:', error);
        showToast('Could not get your location', 'warning');
      }
    );
  }
}

function centerMapOnUser() {
  if (appState.userLocation && appState.map) {
    appState.map.setView(appState.userLocation, 15);
    showToast('Centered on your location', 'info');
  } else {
    getUserLocation();
  }
}

// Chart Creation Functions - FIXED
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

function createAdminCharts() {
  // Chart 1: Weekly Donations
  const ctx1 = document.getElementById('adminChart1');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Donations',
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

  // Chart 2: User Distribution
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

  // Render admin activity
  renderAdminActivity();
}

function createAnalyticsCharts() {
  // Trends Chart
  const trendsCtx = document.getElementById('trendsChart');
  if (trendsCtx) {
    new Chart(trendsCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Meals Saved',
          data: [120, 190, 300, 500, 200, 300, 450],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  // Category Chart
  const categoryCtx = document.getElementById('categoryChart');
  if (categoryCtx) {
    new Chart(categoryCtx, {
      type: 'pie',
      data: {
        labels: ['Rice & Dal', 'Vegetables', 'Fruits', 'Bread', 'Others'],
        datasets: [{
          data: [30, 25, 15, 20, 10],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}

// Food Interaction Functions - FIXED
function renderFoodItems() {
  const container = document.getElementById('consumerFoodList');
  if (!container) return;
  
  let items = appData.foodItems.filter(item => item.status === 'available');
  
  // Apply search filter
  if (appState.searchTerm) {
    items = items.filter(item => 
      item.name.toLowerCase().includes(appState.searchTerm.toLowerCase()) ||
      item.provider.toLowerCase().includes(appState.searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(appState.searchTerm.toLowerCase())
    );
  }
  
  // Apply category filters
  if (!appState.activeFilters.includes('All')) {
    items = items.filter(item => {
      return appState.activeFilters.some(filter => {
        if (filter === '< 2km') return true; // Mock distance filter
        if (filter === 'Available Now') return item.status === 'available';
        if (filter === 'High Priority') return item.urgency === 'high';
        return item.dietaryTags.includes(filter);
      });
    });
  }
  
  container.innerHTML = items.map(item => `
    <div class="food-card" onclick="showFoodModal(${item.id})">
      <div class="food-header">
        <h4 class="food-title">${item.name}</h4>
        <span class="food-status status-${item.status}">${item.status}</span>
      </div>
      <div class="food-details">
        <p class="food-meta">🏪 ${item.provider}</p>
        <p class="food-meta">📍 ${item.location} • 📦 ${item.quantity}</p>
        <p class="food-meta">👥 ${item.servings} servings</p>
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
  
  if (items.length === 0) {
    container.innerHTML = '<div class="no-results glass-card"><p>No food items match your search criteria.</p></div>';
  }
}

function handleSearch(term) {
  appState.searchTerm = term;
  renderFoodItems();
  showToast(`Searching for: "${term}"`, 'info');
}

function applyFilter(chipElement) {
  const filter = chipElement.dataset.filter;
  
  // Handle All filter specially
  if (filter === 'All') {
    appState.activeFilters = ['All'];
    document.querySelectorAll('.filter-chips .chip').forEach(chip => {
      chip.classList.toggle('active', chip === chipElement);
    });
  } else {
    // Remove 'All' if other filters are selected
    appState.activeFilters = appState.activeFilters.filter(f => f !== 'All');
    
    // Toggle this filter
    if (appState.activeFilters.includes(filter)) {
      appState.activeFilters = appState.activeFilters.filter(f => f !== filter);
    } else {
      appState.activeFilters.push(filter);
    }
    
    // If no filters, default to All
    if (appState.activeFilters.length === 0) {
      appState.activeFilters = ['All'];
    }
    
    // Update UI
    document.querySelectorAll('.filter-chips .chip').forEach(chip => {
      const chipFilter = chip.dataset.filter;
      chip.classList.toggle('active', 
        chipFilter === 'All' ? appState.activeFilters.includes('All') : appState.activeFilters.includes(chipFilter)
      );
    });
  }
  
  renderFoodItems();
  showToast(`Filter applied: ${filter}`, 'info');
}

// Modal Functions - FIXED
function showFoodModal(foodId) {
  const modal = document.getElementById('foodModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const confirmBtn = document.getElementById('modalConfirmBtn');
  
  if (!modal || !modalTitle || !modalBody || !confirmBtn) return;
  
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
      <p><strong>Servings:</strong> ${food.servings}</p>
      <p><strong>Expires in:</strong> ${food.expiryTime}</p>
      <p><strong>Description:</strong> ${food.description}</p>
      <div class="modal-tags">
        ${food.dietaryTags.map(tag => `<span class="food-tag">${tag}</span>`).join('')}
      </div>
      <div class="trust-indicators" style="margin-top: 16px;">
        <div class="trust-item" style="display: flex; align-items: center; margin-bottom: 8px;">
          <span class="material-icons" style="margin-right: 8px; color: #4CAF50;">verified</span>
          <span>Verified Provider</span>
        </div>
        <div class="trust-item" style="display: flex; align-items: center; margin-bottom: 8px;">
          <span class="material-icons" style="margin-right: 8px; color: #FF9800;">star</span>
          <span>4.8/5 Rating</span>
        </div>
        <div class="trust-item" style="display: flex; align-items: center;">
          <span class="material-icons" style="margin-right: 8px; color: #2196F3;">security</span>
          <span>Food Safety Certified</span>
        </div>
      </div>
    </div>
  `;
  
  confirmBtn.onclick = () => requestFood(foodId);
  modal.classList.remove('hidden');
}

function hideFoodModal() {
  const modal = document.getElementById('foodModal');
  if (modal) modal.classList.add('hidden');
}

function showTaskModal(taskId) {
  const modal = document.getElementById('taskModal');
  const modalTitle = document.getElementById('taskModalTitle');
  const modalBody = document.getElementById('taskModalBody');
  const confirmBtn = document.getElementById('taskModalConfirmBtn');
  
  if (!modal || !modalTitle || !modalBody || !confirmBtn) return;
  
  const task = appData.tasks.find(t => t.id === taskId);
  if (!task) return;
  
  modalTitle.textContent = task.title;
  modalBody.innerHTML = `
    <div class="modal-task-details">
      <h4>${task.title}</h4>
      <p><strong>Location:</strong> ${task.location}</p>
      <p><strong>Distance:</strong> ${task.distance}km away</p>
      <p><strong>Estimated Time:</strong> ${task.estimatedTime} minutes</p>
      <p><strong>Priority:</strong> <span class="task-priority priority-${task.priority}">${task.priority}</span></p>
      <p><strong>Reward:</strong> ${task.reward} points</p>
      <p><strong>Description:</strong> ${getTaskDescription(task)}</p>
    </div>
  `;
  
  confirmBtn.onclick = () => acceptTask(taskId);
  modal.classList.remove('hidden');
}

function hideTaskModal() {
  const modal = document.getElementById('taskModal');
  if (modal) modal.classList.add('hidden');
}

// Interactive Functions - FIXED
function requestFood(foodId) {
  const food = appData.foodItems.find(item => item.id === foodId);
  if (food && food.status === 'available') {
    food.status = 'requested';
    
    // Add to user's requests
    appState.requests.push({
      id: appState.requests.length + 1,
      foodItemId: foodId,
      consumerId: 2,
      status: 'pending',
      requestedAt: new Date().toISOString(),
      message: 'Request submitted through the app'
    });
    
    showToast(`Successfully requested ${food.name}!`, 'success');
    createConfetti();
    
    // Update displays
    renderFoodItems();
    hideFoodModal();
    
    // Update notification badge
    updateNotificationBadge();
  } else {
    showToast('Food item is no longer available', 'error');
  }
}

function acceptTask(taskId) {
  const task = appData.tasks.find(t => t.id === taskId);
  if (task && task.status === 'available') {
    task.status = 'assigned';
    task.volunteerId = 3; // Current volunteer ID
    
    showToast(`Task accepted: ${task.title}`, 'success');
    createConfetti();
    
    // Update volunteer section
    if (appState.currentSection === 'tasks') {
      switchVolunteerSection('tasks');
    }
    
    hideTaskModal();
    
    // Start a timer for this task
    startTaskTimer(taskId);
  }
}

function startTaskTimer(taskId) {
  const task = appData.tasks.find(t => t.id === taskId);
  if (!task) return;
  
  let timeLeft = task.estimatedTime * 60; // Convert to seconds
  
  appState.timers[taskId] = setInterval(() => {
    timeLeft--;
    
    if (timeLeft <= 0) {
      clearInterval(appState.timers[taskId]);
      completeTask(taskId);
    }
  }, 1000);
}

function completeTask(taskId) {
  const task = appData.tasks.find(t => t.id === taskId);
  if (task) {
    task.status = 'completed';
    
    // Update volunteer stats
    appState.userProgress.volunteer.tasksCompleted++;
    appState.userProgress.volunteer.hours += (task.estimatedTime / 60);
    
    showToast(`Task completed: ${task.title}. You earned ${task.reward} points!`, 'success');
    createConfetti();
    
    // Check for achievements
    checkAchievements();
  }
}

function getTaskDescription(task) {
  const foodItem = appData.foodItems.find(item => item.id === task.foodItemId);
  if (foodItem) {
    return `Pick up ${foodItem.quantity} of ${foodItem.name} from ${foodItem.provider} and deliver to the designated location.`;
  }
  return 'Task details not available.';
}

// Form Submission Functions - FIXED
function submitFoodDonation(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const selectedTags = Array.from(document.querySelectorAll('#dietaryTags .chip.active')).map(chip => chip.dataset.tag);
  
  const newDonation = {
    id: appData.foodItems.length + 1,
    name: formData.get('foodName'),
    quantity: formData.get('quantity'),
    provider: 'Green Leaf Mess',
    providerId: 1,
    location: 'IIT Delhi',
    coordinates: [28.5449, 77.1928],
    expiryTime: formData.get('expiryTime'),
    dietaryTags: selectedTags,
    status: 'available',
    urgency: 'medium',
    servings: parseInt(formData.get('servings')) || 20,
    description: formData.get('description') || 'Fresh food prepared today',
    posted: new Date().toISOString()
  };
  
  appData.foodItems.push(newDonation);
  
  showToast('Food donation posted successfully!', 'success');
  createConfetti();
  
  // Update provider stats
  appState.userProgress.provider.donations++;
  
  // Clear form
  event.target.reset();
  document.querySelectorAll('#dietaryTags .chip.active').forEach(chip => chip.classList.remove('active'));
  
  // Switch to donations management
  switchProviderSection('donations');
  
  return false; // Prevent default form submission
}

function toggleTag(tagElement) {
  tagElement.classList.toggle('active');
  showToast(`Tag ${tagElement.classList.contains('active') ? 'selected' : 'deselected'}: ${tagElement.textContent}`, 'info');
}

function simulatePhotoCapture() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showToast('Photo captured successfully!', 'success');
    
    // Update camera preview
    const preview = document.getElementById('cameraPreview');
    if (preview) {
      preview.innerHTML = `
        <div style="background: var(--color-bg-3); padding: 20px; border-radius: 8px; text-align: center;">
          <span class="material-icons" style="font-size: 2rem; color: #4CAF50;">check_circle</span>
          <p>Photo uploaded successfully</p>
          <button type="button" class="camera-btn" onclick="simulatePhotoCapture()">
            <span class="material-icons">refresh</span>
            Take Another
          </button>
        </div>
      `;
    }
  }, 2000);
}

// Utility Functions for Data Rendering - FIXED
function renderVolunteerLeaderboard() {
  const container = document.getElementById('volunteerLeaderboard');
  if (!container) return;
  
  const leaderboard = [
    { rank: 1, name: "Priya Sharma", hours: 68, points: 3400, current: true },
    { rank: 2, name: "Amit Kumar", hours: 54, points: 2700, current: false },
    { rank: 3, name: "Rajesh Kumar", hours: 45, points: 2250, current: false },
    { rank: 4, name: "Sneha Patel", hours: 38, points: 1900, current: false },
    { rank: 5, name: "Dev Gupta", hours: 32, points: 1600, current: false }
  ];
  
  container.innerHTML = leaderboard.map(user => `
    <div class="leaderboard-item ${user.current ? 'current-user' : ''}">
      <div class="rank">${user.rank}</div>
      <div class="user-info">
        <div class="user-name">${user.name} ${user.current ? '(You)' : ''}</div>
        <div class="user-stats">${user.hours} hours • ${user.points} points</div>
      </div>
      <div class="points">${user.points}</div>
    </div>
  `).join('');
}

function renderProviderBadges() {
  const container = document.getElementById('providerBadges');
  if (!container) return;
  
  container.innerHTML = appState.achievements.map(achievement => `
    <div class="badge-card ${achievement.unlocked ? '' : 'locked'}">
      <span class="badge-icon">${achievement.icon}</span>
      <h4 class="badge-name">${achievement.name}</h4>
      <p class="badge-description">${achievement.description}</p>
      <span class="badge-rarity rarity-${achievement.rarity}">${achievement.rarity}</span>
    </div>
  `).join('');
}

function renderAdminActivity() {
  const container = document.getElementById('adminActivity');
  if (!container) return;
  
  const activities = [
    {
      type: 'donation',
      text: 'New food donation posted by Green Leaf Mess',
      time: '2 minutes ago',
      icon: 'restaurant'
    },
    {
      type: 'request',
      text: 'Hope Foundation requested Dal Tadka & Rice',
      time: '5 minutes ago',
      icon: 'shopping_cart'
    },
    {
      type: 'volunteer',
      text: 'Priya Sharma completed a delivery task',
      time: '10 minutes ago',
      icon: 'delivery_dining'
    },
    {
      type: 'donation',
      text: 'Campus Canteen posted Paneer Curry & Roti',
      time: '15 minutes ago',
      icon: 'restaurant'
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

// Notification Functions - FIXED
function showNotifications() {
  const panel = document.getElementById('notificationPanel');
  const list = document.getElementById('notificationList');
  
  if (!panel || !list) return;
  
  list.innerHTML = appState.notifications.map(notification => `
    <div class="notification-item ${notification.read ? 'read' : 'unread'}">
      <div class="notification-header">
        <strong>${notification.title}</strong>
        <span class="notification-time">${notification.time}</span>
      </div>
      <p>${notification.message}</p>
      ${!notification.read ? `<button onclick="markAsRead(${notification.id})" class="btn btn--sm btn--outline">Mark as Read</button>` : ''}
    </div>
  `).join('');
  
  panel.classList.remove('hidden');
}

function hideNotifications() {
  const panel = document.getElementById('notificationPanel');
  if (panel) panel.classList.add('hidden');
}

function markAsRead(notificationId) {
  const notification = appState.notifications.find(n => n.id === notificationId);
  if (notification) {
    notification.read = true;
    showNotifications(); // Refresh the panel
    updateNotificationBadge();
    showToast('Notification marked as read', 'info');
  }
}

function updateNotificationBadge() {
  const badge = document.getElementById('notificationBadge');
  const unreadCount = appState.notifications.filter(n => !n.read).length;
  
  if (badge) {
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? 'block' : 'none';
  }
}

// Interactive Functions
function continueQuiz(type) {
  showToast(`Continuing ${type} course...`, 'info');
}

function startQuiz(type) {
  showToast(`Starting ${type} course...`, 'info');
}

function generateCertificate() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showToast('Certificate generated and downloaded!', 'success');
    createConfetti();
  }, 2000);
}

function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach(element => {
    const target = parseFloat(element.dataset.counter);
    animateCounter(element, target);
  });
}

function exportData(format) {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showToast(`Data exported as ${format.toUpperCase()}`, 'success');
  }, 1500);
}

function generateReport() {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showToast('Comprehensive report generated successfully!', 'success');
  }, 2000);
}

function checkAchievements() {
  const userProgress = appState.userProgress[appState.currentRole];
  let newAchievements = [];
  
  appState.achievements.forEach(achievement => {
    if (achievement.unlocked) return;
    
    let shouldUnlock = false;
    
    switch(achievement.id) {
      case 1: // First Donation
        shouldUnlock = userProgress.donations >= 1;
        break;
      case 2: // Eco Champion
        shouldUnlock = userProgress.co2Saved >= 100;
        break;
      case 3: // Community Hero
        shouldUnlock = userProgress.hours >= 50;
        break;
      case 4: // Perfect Rating
        shouldUnlock = userProgress.rating >= 4.9 && userProgress.donations >= 25;
        break;
    }
    
    if (shouldUnlock) {
      achievement.unlocked = true;
      newAchievements.push(achievement);
    }
  });
  
  // Show achievement notifications
  newAchievements.forEach(achievement => {
    setTimeout(() => {
      showToast(`Achievement Unlocked: ${achievement.name}! ${achievement.icon}`, 'success');
      createConfetti();
    }, 1000);
  });
}

// Global Event Handlers - FIXED
function selectRole(role) {
  console.log('Role selected:', role);
  appState.currentUser = { role };
  appState.currentRole = role;
  
  const screenId = role + 'Screen';
  console.log('Attempting to show screen:', screenId);
  
  if (showScreen(screenId)) {
    showToast(`Welcome to ${role} dashboard!`, 'success');
  } else {
    showToast('Failed to load dashboard', 'error');
  }
}

function toggleTheme() {
  appState.isDarkMode = !appState.isDarkMode;
  document.documentElement.setAttribute('data-color-scheme', appState.isDarkMode ? 'dark' : 'light');
  
  const icon = document.querySelector('#themeToggle .material-icons');
  if (icon) {
    icon.textContent = appState.isDarkMode ? 'light_mode' : 'dark_mode';
  }
  
  showToast(`Switched to ${appState.isDarkMode ? 'dark' : 'light'} mode`, 'info');
}

function toggleLanguage(lang) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
  
  appState.currentLanguage = lang;
  updateLanguage();
  showToast(appState.currentLanguage === 'en' ? 'Language changed to English' : 'भाषा हिंदी में बदली गई', 'info');
}

function goBack() {
  console.log('Going back to welcome screen');
  showScreen('welcomeScreen');
  appState.currentUser = null;
  appState.currentRole = null;
  
  // Clean up maps and timers
  if (appState.map) {
    try {
      appState.map.remove();
      appState.map = null;
    } catch (e) {
      console.error('Error cleaning up map:', e);
    }
  }
  
  Object.keys(appState.timers).forEach(timerId => {
    clearInterval(appState.timers[timerId]);
    delete appState.timers[timerId];
  });
}

// Expose functions globally - CRITICAL FIX
window.selectRole = selectRole;
window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;
window.goBack = goBack;
window.switchProviderSection = switchProviderSection;
window.switchConsumerSection = switchConsumerSection;
window.switchVolunteerSection = switchVolunteerSection;
window.switchAdminSection = switchAdminSection;
window.showFoodModal = showFoodModal;
window.hideFoodModal = hideFoodModal;
window.showTaskModal = showTaskModal;
window.hideTaskModal = hideTaskModal;
window.requestFood = requestFood;
window.acceptTask = acceptTask;
window.handleSearch = handleSearch;
window.applyFilter = applyFilter;
window.toggleTag = toggleTag;
window.submitFoodDonation = submitFoodDonation;
window.simulatePhotoCapture = simulatePhotoCapture;
window.showNotifications = showNotifications;
window.hideNotifications = hideNotifications;
window.markAsRead = markAsRead;
window.toggleFilters = function() { showToast('Advanced filters panel would open here', 'info'); };
window.centerMapOnUser = centerMapOnUser;
window.toggleMapFullscreen = function() { showToast('Map toggled to fullscreen', 'info'); };
window.showOptimalRoute = function() { showToast('Optimal route calculated and displayed', 'info'); };
window.continueQuiz = continueQuiz;
window.startQuiz = startQuiz;
window.generateCertificate = generateCertificate;
window.exportData = exportData;
window.generateReport = generateReport;
window.editDonation = function(id) { showToast('Edit donation form would open here', 'info'); };
window.viewDonationDetails = function(id) { showFoodModal(id); };
window.viewDonationRequests = function(id) { showToast('Viewing requests for donation #' + id, 'info'); };
window.moderateDonation = function(id) { showToast('Moderation panel would open for donation #' + id, 'info'); };
window.viewUser = function(id) { showToast('User details would open for user #' + id, 'info'); };
window.editUser = function(id) { showToast('User edit form would open for user #' + id, 'info'); };
window.filterUsers = function(term) { 
  if (term) {
    showToast(`Filtering users by: "${term}"`, 'info'); 
  }
};

// Real-time Updates Simulation
function startRealTimeUpdates() {
  // Update stats every 30 seconds
  setInterval(() => {
    appData.stats.totalMealsSaved += Math.floor(Math.random() * 3) + 1;
    appData.stats.activeUsers += Math.floor(Math.random() * 2);
    
    // Re-render current view if on dashboard
    if (appState.currentSection === 'dashboard') {
      animateCounters();
    }
  }, 30000);
  
  // Add new notifications periodically
  setInterval(() => {
    const newNotification = {
      id: appState.notifications.length + 1,
      type: 'info',
      title: 'New Activity',
      message: 'New food donation available nearby!',
      time: 'Just now',
      read: false
    };
    
    appState.notifications.unshift(newNotification);
    updateNotificationBadge();
  }, 45000);
}

// Initialize Application - FIXED
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing Chakr app...');
  
  // Initialize with welcome screen
  showScreen('welcomeScreen');
  updateLanguage();
  updateNotificationBadge();
  
  // Start real-time updates
  startRealTimeUpdates();
  
  // Set up achievement system
  appState.achievements[0].unlocked = true; // First donation unlocked
  appState.achievements[1].unlocked = true; // Eco champion unlocked
  appState.achievements[2].unlocked = true; // Community hero unlocked
  
  console.log('Chakr app initialization complete');
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    hideFoodModal();
    hideTaskModal();
    hideNotifications();
  }
});

// Progressive enhancement check
if (!window.CSS || !CSS.supports('backdrop-filter', 'blur(10px)')) {
  document.documentElement.classList.add('no-backdrop-filter');
}