// Chakr Application JavaScript - Final Fixed Version with Proper Event Handling
// Sample data from application_data_json
const sampleData = {
  student_data: [
    {"id": "ST001", "name": "Arjun Sharma", "hostel": "H1", "room": "101", "daily_attendance": 0.85, "preferred_portion": "medium", "dietary_pref": "vegetarian"},
    {"id": "ST002", "name": "Priya Singh", "hostel": "H2", "room": "205", "daily_attendance": 0.92, "preferred_portion": "small", "dietary_pref": "vegetarian"},
    {"id": "ST003", "name": "Rahul Patel", "hostel": "H1", "room": "150", "daily_attendance": 0.78, "preferred_portion": "large", "dietary_pref": "non-vegetarian"},
    {"id": "ST004", "name": "Anita Kumar", "hostel": "H3", "room": "301", "daily_attendance": 0.95, "preferred_portion": "medium", "dietary_pref": "jain"},
    {"id": "ST005", "name": "Vikash Yadav", "hostel": "H1", "room": "175", "daily_attendance": 0.67, "preferred_portion": "large", "dietary_pref": "non-vegetarian"}
  ],
  food_management_partners: [
    {"id": "FMP001", "name": "Akshaya Patra Foundation", "location": "Bangalore", "capacity": "2000+ meals/day", "category": "Food Redistribution", "specialization": "Child nutrition", "contact": "+91-9876543210"},
    {"id": "FMP002", "name": "Robin Hood Army", "location": "Delhi", "capacity": "500+ meals/day", "category": "Food Redistribution", "specialization": "Community feeding", "contact": "+91-9876543211"},
    {"id": "FMP003", "name": "Feeding India", "location": "Mumbai", "capacity": "1000+ meals/day", "category": "Food Redistribution", "specialization": "Food redistribution", "contact": "+91-9876543212"},
    {"id": "FMP004", "name": "Aahar Foundation", "location": "Indore", "capacity": "300+ meals/day", "category": "Food Redistribution", "specialization": "Event food rescue", "contact": "+91-9876543213"},
    {"id": "FMP005", "name": "BioGen Industries", "location": "Pune", "capacity": "5 tonnes/day processing", "category": "Biogas Production", "specialization": "Organic waste to biogas", "contact": "+91-9876543214"},
    {"id": "FMP006", "name": "Green Energy Solutions", "location": "Hyderabad", "capacity": "3 tonnes/day processing", "category": "Biogas Production", "specialization": "Food waste to renewable energy", "contact": "+91-9876543215"},
    {"id": "FMP007", "name": "Animal Care Society", "location": "Chennai", "capacity": "200+ animals daily", "category": "Animal Feed", "specialization": "Animal shelter feeding", "contact": "+91-9876543216"},
    {"id": "FMP008", "name": "Dairy Farm Cooperative", "location": "Amul, Gujarat", "capacity": "1 tonne/day cattle feed", "category": "Animal Feed", "specialization": "Cattle feed processing", "contact": "+91-9876543217"},
    {"id": "FMP009", "name": "Organic Composting Unit", "location": "Mysore", "capacity": "2 tonnes/day composting", "category": "Composting", "specialization": "Food waste to fertilizer", "contact": "+91-9876543218"},
    {"id": "FMP010", "name": "Agricultural Cooperative", "location": "Nashik", "capacity": "500 kg/day compost", "category": "Composting", "specialization": "Farmer compost distribution", "contact": "+91-9876543219"}
  ],
  waste_reduction_stats: {
    baseline_waste_kg: [120, 135, 98, 145, 110, 125, 140],
    after_chakr_waste_kg: [45, 52, 38, 48, 42, 47, 53],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    reduction_percentage: [62.5, 61.5, 61.2, 66.9, 61.8, 62.4, 62.1]
  },
  menu_data: [
    {"meal": "Breakfast", "item": "Poha", "veg": true, "estimated_portions": {"small": 150, "medium": 200, "large": 250}},
    {"meal": "Breakfast", "item": "Sambar", "veg": true, "estimated_portions": {"small": 100, "medium": 140, "large": 180}},
    {"meal": "Lunch", "item": "Dal Tadka", "veg": true, "estimated_portions": {"small": 180, "medium": 250, "large": 320}},
    {"meal": "Lunch", "item": "Chicken Curry", "veg": false, "estimated_portions": {"small": 80, "medium": 120, "large": 160}},
    {"meal": "Dinner", "item": "Rajma", "veg": true, "estimated_portions": {"small": 170, "medium": 230, "large": 290}},
    {"meal": "Dinner", "item": "Roti", "veg": true, "estimated_portions": {"small": 250, "medium": 350, "large": 450}}
  ],
  leaderboard: [
    {"rank": 1, "name": "Arjun Sharma", "points": 2450, "waste_saved_kg": 12.3, "badge": "Waste Warrior"},
    {"rank": 2, "name": "Priya Singh", "points": 2380, "waste_saved_kg": 11.9, "badge": "Eco Champion"},
    {"rank": 3, "name": "Anita Kumar", "points": 2210, "waste_saved_kg": 11.1, "badge": "Green Guardian"},
    {"rank": 4, "name": "Vikash Yadav", "points": 2050, "waste_saved_kg": 10.3, "badge": "Planet Protector"},
    {"rank": 5, "name": "Rahul Patel", "points": 1890, "waste_saved_kg": 9.5, "badge": "Earth Saver"}
  ],
  sustainability_metrics: {
    composted_waste_kg: [35, 42, 28, 38, 32, 36, 41],
    biogas_generated_cubic_meters: [8.5, 10.2, 6.8, 9.2, 7.8, 8.7, 9.9],
    co2_savings_kg: [78, 94, 62, 85, 72, 81, 92],
    fertilizer_produced_kg: [25, 30, 20, 27, 23, 26, 29]
  }
};

// Global variables
let currentSection = 'dashboard';
let charts = {};
let currentRating = 0;
let currentPortion = '';
let currentFilter = 'all';

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  console.log('Initializing Chakr application...');
  
  // Initialize all sections
  initializeDashboard();
  initializePrediction();
  initializeFeedback();
  initializeFoodManagement();
  initializeLeaderboard();
  initializeSustainability();
  initializeRFID();
  
  // Initialize event listeners
  setupEventListeners();
  
  // Show dashboard by default
  showSection('dashboard');
}

// Event Listeners Setup
function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Navigation event listeners
  const navItems = document.querySelectorAll('.nav-item[data-section]');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const section = e.currentTarget.getAttribute('data-section');
      showSection(section);
    });
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Mobile menu overlay click to close
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', (e) => {
      if (e.target === mobileMenuOverlay) {
        toggleMobileMenu();
      }
    });
  }
  
  // Filter buttons for food management
  setupFilterButtons();
  
  // Form and interaction buttons
  setupFormButtons();
  
  // Star rating and portion feedback setup - delayed for DOM elements
  setTimeout(() => {
    setupFeedbackInteractions();
  }, 500);
}

function setupFilterButtons() {
  // Food management filter buttons
  setTimeout(() => {
    const filterButtons = document.querySelectorAll('.filter-btn[data-category]');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const category = e.currentTarget.getAttribute('data-category');
        filterPartners(category);
      });
    });
  }, 100);
}

function setupFormButtons() {
  // Calculate portions button
  const calculatePortionsBtn = document.getElementById('calculatePortionsBtn');
  if (calculatePortionsBtn) {
    calculatePortionsBtn.addEventListener('click', calculatePortions);
  }
  
  // Submit feedback button
  const submitFeedbackBtn = document.getElementById('submitFeedbackBtn');
  if (submitFeedbackBtn) {
    submitFeedbackBtn.addEventListener('click', submitFeedback);
  }
  
  // Calculate impact button
  const calculateImpactBtn = document.getElementById('calculateImpactBtn');
  if (calculateImpactBtn) {
    calculateImpactBtn.addEventListener('click', calculateImpact);
  }
  
  // Simulate RFID button
  const simulateRFIDBtn = document.getElementById('simulateRFIDBtn');
  if (simulateRFIDBtn) {
    simulateRFIDBtn.addEventListener('click', simulateRFID);
  }
}

function setupFeedbackInteractions() {
  // Star rating listeners
  const starRating = document.querySelector('.star-rating');
  if (starRating) {
    const stars = starRating.querySelectorAll('span');
    stars.forEach((star, index) => {
      star.addEventListener('click', () => setRating(index + 1));
      star.addEventListener('mouseenter', () => highlightStars(index + 1));
    });
    
    starRating.addEventListener('mouseleave', () => highlightStars(currentRating));
  }
  
  // Portion buttons listeners
  const portionButtons = document.querySelectorAll('.portion-btn');
  portionButtons.forEach(btn => {
    btn.addEventListener('click', () => selectPortion(btn.dataset.portion));
  });
}

// Navigation Functions
function showSection(sectionName) {
  console.log(`Switching to section: ${sectionName}`);
  
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show selected section
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
    console.log(`Section ${sectionName} activated`);
  } else {
    console.error(`Section ${sectionName} not found`);
    return;
  }
  
  // Update navigation active state
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  
  // Add active class to current nav items
  const activeNavItems = document.querySelectorAll(`.nav-item[data-section="${sectionName}"]`);
  activeNavItems.forEach(item => {
    item.classList.add('active');
  });
  
  currentSection = sectionName;
  
  // Initialize section-specific functionality with delay for DOM updates
  setTimeout(() => {
    if (sectionName === 'dashboard') {
      updateDashboardCharts();
    } else if (sectionName === 'sustainability') {
      updateSustainabilityCharts();
    } else if (sectionName === 'prediction') {
      updatePredictionCharts();
    } else if (sectionName === 'rfid') {
      updateAttendanceChart();
    } else if (sectionName === 'food-management') {
      // Ensure partners are filtered correctly when section loads
      if (currentFilter) {
        filterPartners(currentFilter);
      }
    }
  }, 100);
}

function toggleMobileMenu() {
  const overlay = document.getElementById('mobileMenuOverlay');
  if (overlay) {
    overlay.classList.toggle('show');
  }
}

// Dashboard Functions
function initializeDashboard() {
  console.log('Initializing dashboard...');
  populateRecentActivities();
  updateDashboardStats();
}

function updateDashboardStats() {
  // Update today's stats (using Saturday data as it's Friday today)
  const todayIndex = 5; // Saturday index
  const todayReduction = sampleData.waste_reduction_stats.reduction_percentage[todayIndex];
  const todayCO2 = sampleData.sustainability_metrics.co2_savings_kg[todayIndex];
  
  const elements = {
    todayWasteReduction: `${todayReduction}%`,
    co2Saved: `${todayCO2} kg`,
    mealsManagedStat: Math.floor(todayReduction * 2.5).toString(),
    activeStudents: (sampleData.student_data.length * 85).toString()
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });
}

function populateRecentActivities() {
  const activities = [
    {icon: '🍽️', text: 'Lunch prediction accuracy: 94%', time: '2 hours ago'},
    {icon: '🎯', text: 'Arjun Sharma earned "Waste Warrior" badge', time: '3 hours ago'},
    {icon: '🚚', text: 'Food pickup scheduled with BioGen Industries', time: '4 hours ago'},
    {icon: '♻️', text: '36kg waste converted to compost by Agricultural Cooperative', time: '5 hours ago'},
    {icon: '🐄', text: '15kg sent to Animal Care Society for animal feeding', time: '6 hours ago'},
    {icon: '🔥', text: '8.7m³ biogas generated from food waste', time: '1 day ago'}
  ];
  
  const activityList = document.getElementById('activityList');
  if (activityList) {
    activityList.innerHTML = activities.map(activity => `
      <div class="activity-item">
        <div class="activity-icon">${activity.icon}</div>
        <div class="activity-content">
          <p>${activity.text}</p>
          <span class="activity-time">${activity.time}</span>
        </div>
      </div>
    `).join('');
  }
}

function updateDashboardCharts() {
  console.log('Updating dashboard charts...');
  
  // Waste Chart
  const ctx = document.getElementById('wasteChart');
  if (ctx) {
    if (charts.wasteChart) {
      charts.wasteChart.destroy();
    }
    
    charts.wasteChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: sampleData.waste_reduction_stats.days,
        datasets: [
          {
            label: 'Before Chakr',
            data: sampleData.waste_reduction_stats.baseline_waste_kg,
            backgroundColor: '#FF6B6B',
            borderColor: '#FF5252',
            borderWidth: 1
          },
          {
            label: 'After Chakr',
            data: sampleData.waste_reduction_stats.after_chakr_waste_kg,
            backgroundColor: '#1FB8CD',
            borderColor: '#00BCD4',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Food Waste (kg)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Days of Week'
            }
          }
        }
      }
    });
  }

  // Management Overview Chart
  const managementCtx = document.getElementById('managementOverviewChart');
  if (managementCtx) {
    if (charts.managementOverviewChart) {
      charts.managementOverviewChart.destroy();
    }
    
    charts.managementOverviewChart = new Chart(managementCtx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Food Redistribution', 'Biogas Production', 'Animal Feed', 'Composting'],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: ['#138808', '#FF9933', '#000080', '#8B4513'],
          borderWidth: 2,
          borderColor: '#fff'
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
}

// Prediction System Functions
function initializePrediction() {
  console.log('Initializing prediction system...');
  populateMealPredictions();
  populateDishSelect();
}

function populateMealPredictions() {
  const predictions = [
    {meal: 'Breakfast', items: 'Poha, Sambar', portions: '350 servings'},
    {meal: 'Lunch', items: 'Dal Tadka, Chicken Curry', portions: '400 servings'},
    {meal: 'Dinner', items: 'Rajma, Roti', portions: '420 servings'}
  ];
  
  const predictionsContainer = document.getElementById('mealPredictions');
  if (predictionsContainer) {
    predictionsContainer.innerHTML = predictions.map(pred => `
      <div class="meal-prediction-item">
        <div>
          <strong>${pred.meal}</strong><br>
          <small>${pred.items}</small>
        </div>
        <div>${pred.portions}</div>
      </div>
    `).join('');
  }
}

function populateDishSelect() {
  const dishSelect = document.getElementById('dishSelect');
  if (dishSelect) {
    dishSelect.innerHTML = '<option value="">Choose a dish...</option>' + 
      sampleData.menu_data.map(item => 
        `<option value="${item.item}">${item.item} (${item.meal})</option>`
      ).join('');
  }
}

function calculatePortions() {
  const selectedDish = document.getElementById('dishSelect').value;
  const studentCount = parseInt(document.getElementById('studentCount').value) || 427;
  
  if (!selectedDish) {
    alert('कृपया एक व्यंजन चुनें (Please select a dish)');
    return;
  }
  
  const dish = sampleData.menu_data.find(item => item.item === selectedDish);
  if (!dish) return;
  
  const portionResults = document.getElementById('portionResults');
  
  const smallTotal = Math.ceil((dish.estimated_portions.small / 100) * studentCount * 0.3);
  const mediumTotal = Math.ceil((dish.estimated_portions.medium / 100) * studentCount * 0.5);
  const largeTotal = Math.ceil((dish.estimated_portions.large / 100) * studentCount * 0.2);
  
  if (portionResults) {
    portionResults.innerHTML = `
      <h4>Recommended Quantities for ${selectedDish}</h4>
      <div class="prediction-item">
        <span>Small Portions (30%):</span>
        <strong>${smallTotal} servings</strong>
      </div>
      <div class="prediction-item">
        <span>Medium Portions (50%):</span>
        <strong>${mediumTotal} servings</strong>
      </div>
      <div class="prediction-item">
        <span>Large Portions (20%):</span>
        <strong>${largeTotal} servings</strong>
      </div>
      <div class="prediction-item">
        <span>Total Estimated:</span>
        <strong>${smallTotal + mediumTotal + largeTotal} servings</strong>
      </div>
    `;
    portionResults.style.display = 'block';
  }
}

function updatePredictionCharts() {
  const ctx = document.getElementById('accuracyChart');
  if (!ctx) return;
  
  if (charts.accuracyChart) {
    charts.accuracyChart.destroy();
  }
  
  const accuracyData = [92, 89, 94, 87, 91, 95, 88];
  
  charts.accuracyChart = new Chart(ctx.getContext('2d'), {
    type: 'line',
    data: {
      labels: sampleData.waste_reduction_stats.days,
      datasets: [{
        label: 'Prediction Accuracy (%)',
        data: accuracyData,
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        borderWidth: 3,
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
          beginAtZero: false,
          min: 80,
          max: 100,
          title: {
            display: true,
            text: 'Accuracy (%)'
          }
        }
      }
    }
  });
}

// Feedback System Functions
function initializeFeedback() {
  console.log('Initializing feedback system...');
  currentRating = 0;
  currentPortion = '';
  populateFeedbackStats();
}

function setRating(rating) {
  currentRating = rating;
  highlightStars(rating);
}

function highlightStars(count) {
  const stars = document.querySelectorAll('.star-rating span');
  stars.forEach((star, index) => {
    if (index < count) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function selectPortion(portion) {
  currentPortion = portion;
  const buttons = document.querySelectorAll('.portion-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.portion === portion);
  });
}

function submitFeedback() {
  const comment = document.getElementById('feedbackComment');
  const commentText = comment ? comment.value : '';
  
  if (currentRating === 0) {
    alert('कृपया रेटिंग दें (Please provide a rating)');
    return;
  }
  
  if (!currentPortion) {
    alert('कृपया portion feedback दें (Please select portion feedback)');
    return;
  }
  
  // Simulate feedback submission
  alert(`धन्यवाद! Feedback submitted successfully!\nRating: ${currentRating} stars\nPortion: ${currentPortion}\nComment: ${commentText || 'No comment'}`);
  
  // Reset form
  currentRating = 0;
  currentPortion = '';
  if (comment) {
    comment.value = '';
  }
  highlightStars(0);
  const buttons = document.querySelectorAll('.portion-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
}

function populateFeedbackStats() {
  const stats = [
    {label: 'Average Rating', value: '4.2/5', trend: '+0.3'},
    {label: 'Portion Satisfaction', value: '87%', trend: '+5%'},
    {label: 'Popular Dish', value: 'Dal Tadka', trend: '↗️'},
    {label: 'Feedback Count', value: '245 today', trend: '+12'}
  ];
  
  const statsContainer = document.getElementById('feedbackStats');
  if (statsContainer) {
    statsContainer.innerHTML = stats.map(stat => `
      <div class="feedback-stat-item">
        <div>
          <strong>${stat.label}</strong><br>
          <small>${stat.value}</small>
        </div>
        <div class="trend">${stat.trend}</div>
      </div>
    `).join('');
  }
}

// Food Management System Functions
function initializeFoodManagement() {
  console.log('Initializing food management system...');
  populateSurplusItems();
  populatePartnersGrid();
  populateManagementHistory();
  // Set default filter to 'all'
  currentFilter = 'all';
}

function populateSurplusItems() {
  const surplusItems = [
    {item: 'Dal Tadka', quantity: '15 kg', expiry: '2 hours'},
    {item: 'Roti', quantity: '20 kg', expiry: '4 hours'},
    {item: 'Mixed Vegetables', quantity: '10 kg', expiry: '3 hours'}
  ];
  
  const container = document.getElementById('surplusItems');
  if (container) {
    container.innerHTML = surplusItems.map(item => `
      <div class="surplus-item">
        <div>
          <strong>${item.item}</strong><br>
          <small>Expires in: ${item.expiry}</small>
        </div>
        <div>${item.quantity}</div>
      </div>
    `).join('');
  }
}

function getPartnerIcon(category) {
  const icons = {
    'Food Redistribution': '🍽️',
    'Biogas Production': '🔥',
    'Animal Feed': '🐄',
    'Composting': '🌱'
  };
  return icons[category] || '🏢';
}

function getCategoryClass(category) {
  const classes = {
    'Food Redistribution': 'food-redistribution',
    'Biogas Production': 'biogas-production', 
    'Animal Feed': 'animal-feed',
    'Composting': 'composting'
  };
  return classes[category] || 'food-redistribution';
}

function populatePartnersGrid() {
  const container = document.getElementById('partnersGrid');
  if (!container) return;
  
  container.innerHTML = sampleData.food_management_partners.map(partner => {
    const escapedName = partner.name.replace(/'/g, "\\'");
    const escapedCategory = partner.category.replace(/'/g, "\\'");
    const escapedContact = partner.contact.replace(/'/g, "\\'");
    
    return `
      <div class="partner-card" data-category="${partner.category}">
        <div class="partner-header">
          <div class="partner-icon ${getCategoryClass(partner.category)}">
            ${getPartnerIcon(partner.category)}
          </div>
          <div class="partner-info">
            <h4>${partner.name}</h4>
            <div class="partner-location">📍 ${partner.location}</div>
            <span class="partner-category">${partner.category}</span>
          </div>
        </div>
        <div class="partner-details">
          <div class="partner-detail">
            <span class="partner-detail-label">Capacity:</span>
            <span class="partner-detail-value">${partner.capacity}</span>
          </div>
          <div class="partner-detail">
            <span class="partner-detail-label">Specialization:</span>
            <span class="partner-detail-value">${partner.specialization}</span>
          </div>
          <div class="partner-detail">
            <span class="partner-detail-label">Contact:</span>
            <span class="partner-detail-value">${partner.contact}</span>
          </div>
        </div>
        <div class="partner-actions">
          <button class="btn-schedule" data-partner="${escapedName}" data-category="${escapedCategory}">
            Schedule Pickup
          </button>
          <button class="btn-contact" data-contact="${escapedContact}">
            Contact
          </button>
        </div>
      </div>
    `;
  }).join('');
  
  // Add event listeners for partner action buttons
  setupPartnerActionButtons();
}

function setupPartnerActionButtons() {
  // Schedule pickup buttons
  const scheduleButtons = document.querySelectorAll('.btn-schedule');
  scheduleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const partnerName = e.currentTarget.getAttribute('data-partner');
      const category = e.currentTarget.getAttribute('data-category');
      schedulePickup(partnerName, category);
    });
  });
  
  // Contact buttons
  const contactButtons = document.querySelectorAll('.btn-contact');
  contactButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const contact = e.currentTarget.getAttribute('data-contact');
      contactPartner(contact);
    });
  });
}

function filterPartners(category) {
  console.log(`Filtering partners by category: ${category}`);
  currentFilter = category;
  
  // Update filter button states
  const filterButtons = document.querySelectorAll('.filter-btn[data-category]');
  filterButtons.forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Show/hide partner cards
  const partnerCards = document.querySelectorAll('.partner-card');
  partnerCards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function schedulePickup(partnerName, category) {
  const messages = {
    'Food Redistribution': `📞 Food redistribution pickup scheduled with ${partnerName}! They will collect surplus food in 30 minutes for community distribution.`,
    'Biogas Production': `🔥 Biogas processing pickup scheduled with ${partnerName}! They will collect organic waste in 45 minutes for energy generation.`,
    'Animal Feed': `🐄 Animal feed pickup scheduled with ${partnerName}! They will collect suitable food waste in 1 hour for animal nutrition.`,
    'Composting': `🌱 Composting pickup scheduled with ${partnerName}! They will collect organic waste in 2 hours for fertilizer production.`
  };
  
  alert(messages[category] || `Pickup scheduled with ${partnerName}!`);
}

function contactPartner(contact) {
  alert(`📱 Contact Information:\n${contact}\n\nThis would typically open your phone dialer or messaging app.`);
}

function populateManagementHistory() {
  const history = [
    {partner: 'Akshaya Patra Foundation', amount: '25 kg food distributed', date: 'Today 2:30 PM', category: 'Food Redistribution'},
    {partner: 'BioGen Industries', amount: '18 kg processed to biogas', date: 'Yesterday 6:45 PM', category: 'Biogas Production'},
    {partner: 'Animal Care Society', amount: '12 kg used as animal feed', date: '2 days ago', category: 'Animal Feed'},
    {partner: 'Organic Composting Unit', amount: '30 kg composted to fertilizer', date: '2 days ago', category: 'Composting'},
    {partner: 'Feeding India', amount: '22 kg food redistributed', date: '3 days ago', category: 'Food Redistribution'}
  ];
  
  const container = document.getElementById('managementHistory');
  if (container) {
    container.innerHTML = history.map(item => `
      <div class="history-item">
        <div>
          <div class="history-partner">${item.partner}</div>
          <div class="history-details">${item.amount} - ${item.date}</div>
        </div>
        <span class="history-status">Completed</span>
      </div>
    `).join('');
  }
}

// Leaderboard Functions
function initializeLeaderboard() {
  console.log('Initializing leaderboard...');
  populateLeaderboard();
}

function populateLeaderboard() {
  const container = document.getElementById('leaderboardList');
  if (container) {
    container.innerHTML = sampleData.leaderboard.map(player => `
      <div class="leaderboard-item">
        <div class="leaderboard-rank">${player.rank}</div>
        <div class="leaderboard-info">
          <div class="leaderboard-name">${player.name}</div>
          <div class="leaderboard-stats">${player.points} points • ${player.waste_saved_kg}kg saved</div>
        </div>
        <div class="leaderboard-badge">${player.badge}</div>
      </div>
    `).join('');
  }
}

// Sustainability Functions
function initializeSustainability() {
  console.log('Initializing sustainability...');
  updateSustainabilityStats();
}

function updateSustainabilityStats() {
  const todayIndex = 5; // Saturday
  const elements = {
    compostProduced: `${sampleData.sustainability_metrics.composted_waste_kg[todayIndex]} kg`,
    biogasGenerated: `${sampleData.sustainability_metrics.biogas_generated_cubic_meters[todayIndex]} m³`,
    fertilizerProduced: `${sampleData.sustainability_metrics.fertilizer_produced_kg[todayIndex]} kg`
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });
}

function updateSustainabilityCharts() {
  console.log('Updating sustainability charts...');
  
  // CO2 Savings Chart
  const co2Ctx = document.getElementById('co2Chart');
  if (co2Ctx) {
    if (charts.co2Chart) {
      charts.co2Chart.destroy();
    }
    
    charts.co2Chart = new Chart(co2Ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: sampleData.waste_reduction_stats.days,
        datasets: [{
          label: 'CO₂ Saved (kg)',
          data: sampleData.sustainability_metrics.co2_savings_kg,
          borderColor: '#138808',
          backgroundColor: 'rgba(19, 136, 8, 0.1)',
          borderWidth: 3,
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
            beginAtZero: true,
            title: {
              display: true,
              text: 'CO₂ Saved (kg)'
            }
          }
        }
      }
    });
  }
  
  // Waste Processing Methods Chart
  const processingCtx = document.getElementById('wasteProcessingChart');
  if (processingCtx) {
    if (charts.processingChart) {
      charts.processingChart.destroy();
    }
    
    charts.processingChart = new Chart(processingCtx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Food Redistribution', 'Biogas Production', 'Animal Feed', 'Composting'],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: ['#138808', '#FF9933', '#000080', '#8B4513'],
          borderWidth: 2,
          borderColor: '#fff'
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
}

function calculateImpact() {
  const wasteInput = document.getElementById('wasteInput');
  const wasteReduced = parseInt(wasteInput ? wasteInput.value : 0) || 0;
  
  if (wasteReduced <= 0) {
    alert('कृपया सही मात्रा डालें (Please enter a valid amount)');
    return;
  }
  
  // Calculate environmental impact
  const co2Saved = wasteReduced * 1.7;
  const compostProduced = wasteReduced * 0.6;
  const biogasGenerated = wasteReduced * 0.2;
  
  const results = document.getElementById('impactResults');
  if (results) {
    results.innerHTML = `
      <h4>Environmental Impact of ${wasteReduced}kg Waste Reduction</h4>
      <div class="prediction-item">
        <span>CO₂ Emissions Saved:</span>
        <strong>${co2Saved.toFixed(1)} kg</strong>
      </div>
      <div class="prediction-item">
        <span>Compost Produced:</span>
        <strong>${compostProduced.toFixed(1)} kg</strong>
      </div>
      <div class="prediction-item">
        <span>Biogas Generated:</span>
        <strong>${biogasGenerated.toFixed(1)} m³</strong>
      </div>
      <div class="prediction-item">
        <span>Equivalent Trees Planted:</span>
        <strong>${Math.floor(co2Saved / 22)} trees</strong>
      </div>
    `;
  }
}

// RFID System Functions
function initializeRFID() {
  console.log('Initializing RFID system...');
  populateScanHistory();
  updateAttendanceStats();
}

function simulateRFID() {
  const scanner = document.getElementById('scannerAnimation');
  const result = document.getElementById('scanResult');
  
  if (!scanner || !result) return;
  
  // Start scanning animation
  scanner.classList.add('scanning');
  
  // Simulate scan delay
  setTimeout(() => {
    // Random student from sample data
    const randomStudent = sampleData.student_data[Math.floor(Math.random() * sampleData.student_data.length)];
    
    // Show result
    result.innerHTML = `
      <div class="scan-success">
        <h4>✅ Check-in Successful</h4>
        <p><strong>Student:</strong> ${randomStudent.name}</p>
        <p><strong>ID:</strong> ${randomStudent.id}</p>
        <p><strong>Hostel:</strong> ${randomStudent.hostel} - Room ${randomStudent.room}</p>
        <p><strong>Meal:</strong> Dinner</p>
        <p><strong>Time:</strong> ${new Date().toLocaleTimeString()}</p>
      </div>
    `;
    result.classList.add('show');
    
    // Update attendance count
    const presentCountEl = document.getElementById('presentCount');
    if (presentCountEl) {
      const currentCount = parseInt(presentCountEl.textContent);
      presentCountEl.textContent = currentCount + 1;
    }
    
    // Add to scan history
    addScanHistory(randomStudent.name, randomStudent.id);
    
    // Stop animation
    scanner.classList.remove('scanning');
    
    // Hide result after 3 seconds
    setTimeout(() => {
      result.classList.remove('show');
    }, 3000);
  }, 2000);
}

function addScanHistory(name, id) {
  const historyContainer = document.getElementById('scanHistory');
  if (!historyContainer) return;
  
  const newScan = document.createElement('div');
  newScan.className = 'scan-history-item';
  newScan.innerHTML = `
    <div>
      <strong>${name}</strong> (${id})
    </div>
    <small>${new Date().toLocaleTimeString()}</small>
  `;
  
  historyContainer.insertBefore(newScan, historyContainer.firstChild);
  
  // Keep only last 10 entries
  const items = historyContainer.querySelectorAll('.scan-history-item');
  if (items.length > 10) {
    historyContainer.removeChild(items[items.length - 1]);
  }
}

function populateScanHistory() {
  const history = [
    {name: 'Priya Singh', id: 'ST002', time: '7:45 PM'},
    {name: 'Rahul Patel', id: 'ST003', time: '7:42 PM'},
    {name: 'Anita Kumar', id: 'ST004', time: '7:38 PM'},
    {name: 'Vikash Yadav', id: 'ST005', time: '7:35 PM'}
  ];
  
  const container = document.getElementById('scanHistory');
  if (container) {
    container.innerHTML = history.map(scan => `
      <div class="scan-history-item">
        <div>
          <strong>${scan.name}</strong> (${scan.id})
        </div>
        <small>${scan.time}</small>
      </div>
    `).join('');
  }
}

function updateAttendanceStats() {
  // Simulate real-time attendance updates
  setInterval(() => {
    const presentCountEl = document.getElementById('presentCount');
    if (presentCountEl) {
      const currentCount = parseInt(presentCountEl.textContent);
      if (currentCount < 427 && Math.random() > 0.8) {
        presentCountEl.textContent = currentCount + 1;
      }
    }
  }, 10000);
}

function updateAttendanceChart() {
  const ctx = document.getElementById('attendanceChart');
  if (!ctx) return;
  
  if (charts.attendanceChart) {
    charts.attendanceChart.destroy();
  }
  
  const hourlyAttendance = [45, 78, 123, 186, 234, 298, 342];
  const hours = ['6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00'];
  
  charts.attendanceChart = new Chart(ctx.getContext('2d'), {
    type: 'line',
    data: {
      labels: hours,
      datasets: [{
        label: 'Students Present',
        data: hourlyAttendance,
        borderColor: '#FF9933',
        backgroundColor: 'rgba(255, 153, 51, 0.1)',
        borderWidth: 2,
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
          beginAtZero: true,
          max: 450,
          title: {
            display: true,
            text: 'Students'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Time (PM)'
          }
        }
      }
    }
  });
}