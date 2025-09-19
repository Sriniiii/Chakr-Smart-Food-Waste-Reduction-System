// Chakr Application JavaScript - Fixed Version
// Sample data from application_data_json
const sampleData = {
  student_data: [
    {"id": "ST001", "name": "Arjun Sharma", "hostel": "H1", "room": "101", "daily_attendance": 0.85, "preferred_portion": "medium", "dietary_pref": "vegetarian"},
    {"id": "ST002", "name": "Priya Singh", "hostel": "H2", "room": "205", "daily_attendance": 0.92, "preferred_portion": "small", "dietary_pref": "vegetarian"},
    {"id": "ST003", "name": "Rahul Patel", "hostel": "H1", "room": "150", "daily_attendance": 0.78, "preferred_portion": "large", "dietary_pref": "non-vegetarian"},
    {"id": "ST004", "name": "Anita Kumar", "hostel": "H3", "room": "301", "daily_attendance": 0.95, "preferred_portion": "medium", "dietary_pref": "jain"},
    {"id": "ST005", "name": "Vikash Yadav", "hostel": "H1", "room": "175", "daily_attendance": 0.67, "preferred_portion": "large", "dietary_pref": "non-vegetarian"}
  ],
  ngo_partners: [
    {"id": "NGO001", "name": "Akshaya Patra Foundation", "location": "Bangalore", "capacity": "2000+ meals/day", "specialization": "Child nutrition", "contact": "+91-9876543210"},
    {"id": "NGO002", "name": "Robin Hood Army", "location": "Delhi", "capacity": "500+ meals/day", "specialization": "Community feeding", "contact": "+91-9876543211"},
    {"id": "NGO003", "name": "Feeding India", "location": "Mumbai", "capacity": "1000+ meals/day", "specialization": "Food redistribution", "contact": "+91-9876543212"},
    {"id": "NGO004", "name": "Aahar Foundation", "location": "Indore", "capacity": "300+ meals/day", "specialization": "Event food rescue", "contact": "+91-9876543213"},
    {"id": "NGO005", "name": "No Food Waste", "location": "Coimbatore", "capacity": "400+ meals/day", "specialization": "Wedding surplus", "contact": "+91-9876543214"}
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
  initializeDonation();
  initializeLeaderboard();
  initializeSustainability();
  initializeRFID();
  
  // Initialize event listeners
  setupEventListeners();
  
  // Show dashboard by default
  showSection('dashboard');
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
  
  // Find and activate the correct nav item
  const activeNavItems = document.querySelectorAll(`[onclick*="'${sectionName}'"]`);
  activeNavItems.forEach(item => {
    item.classList.add('active');
  });
  
  currentSection = sectionName;
  
  // Initialize section-specific functionality
  setTimeout(() => {
    if (sectionName === 'dashboard') {
      updateDashboardCharts();
    } else if (sectionName === 'sustainability') {
      updateSustainabilityCharts();
    } else if (sectionName === 'prediction') {
      updatePredictionCharts();
    } else if (sectionName === 'rfid') {
      updateAttendanceChart();
    }
  }, 100);
}

function toggleMobileMenu() {
  const overlay = document.getElementById('mobileMenuOverlay');
  overlay.classList.toggle('show');
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
  
  document.getElementById('todayWasteReduction').textContent = `${todayReduction}%`;
  document.getElementById('co2Saved').textContent = `${todayCO2} kg`;
  document.getElementById('mealsDonated').textContent = Math.floor(todayReduction * 2.5);
  document.getElementById('activeStudents').textContent = sampleData.student_data.length * 85;
}

function populateRecentActivities() {
  const activities = [
    {icon: '🍽️', text: 'Lunch prediction accuracy: 94%', time: '2 hours ago'},
    {icon: '🎯', text: 'Arjun Sharma earned "Waste Warrior" badge', time: '3 hours ago'},
    {icon: '🚚', text: 'Donation pickup scheduled with Robin Hood Army', time: '4 hours ago'},
    {icon: '♻️', text: '36kg waste converted to compost', time: '5 hours ago'},
    {icon: '📊', text: 'Weekly report generated', time: '1 day ago'}
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
  const ctx = document.getElementById('wasteChart');
  if (!ctx) {
    console.error('Waste chart canvas not found');
    return;
  }
  
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

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
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
  const comment = document.getElementById('feedbackComment').value;
  
  if (currentRating === 0) {
    alert('कृपया रेटिंग दें (Please provide a rating)');
    return;
  }
  
  if (!currentPortion) {
    alert('कृपया portion feedback दें (Please select portion feedback)');
    return;
  }
  
  // Simulate feedback submission
  alert(`धन्यवाद! Feedback submitted successfully!\nRating: ${currentRating} stars\nPortion: ${currentPortion}\nComment: ${comment || 'No comment'}`);
  
  // Reset form
  currentRating = 0;
  currentPortion = '';
  if (document.getElementById('feedbackComment')) {
    document.getElementById('feedbackComment').value = '';
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

// Donation System Functions
function initializeDonation() {
  console.log('Initializing donation system...');
  populateSurplusItems();
  populateNGOList();
  populateDonationHistory();
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

function populateNGOList() {
  const container = document.getElementById('ngoList');
  if (container) {
    container.innerHTML = sampleData.ngo_partners.map(ngo => `
      <div class="ngo-item">
        <div class="ngo-name">${ngo.name}</div>
        <div class="ngo-location">📍 ${ngo.location}</div>
        <div class="ngo-capacity">${ngo.capacity}</div>
        <small>${ngo.specialization}</small>
      </div>
    `).join('');
  }
}

function populateDonationHistory() {
  const history = [
    {ngo: 'Akshaya Patra Foundation', amount: '25 kg', date: 'Today 2:30 PM', status: 'Delivered'},
    {ngo: 'Robin Hood Army', amount: '18 kg', date: 'Yesterday 6:45 PM', status: 'Delivered'},
    {ngo: 'Feeding India', amount: '32 kg', date: '2 days ago', status: 'Delivered'}
  ];
  
  const container = document.getElementById('donationHistory');
  if (container) {
    container.innerHTML = history.map(donation => `
      <div class="history-item">
        <div>
          <strong>${donation.ngo}</strong><br>
          <small>${donation.amount} - ${donation.date}</small>
        </div>
        <span class="status status--success">${donation.status}</span>
      </div>
    `).join('');
  }
}

function schedulePickup() {
  alert('📞 Pickup scheduled! Robin Hood Army will collect surplus food in 30 minutes.\nContact: +91-9876543211');
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
  const compostEl = document.getElementById('compostProduced');
  const biogasEl = document.getElementById('biogasGenerated');
  const fertilizerEl = document.getElementById('fertilizerProduced');
  
  if (compostEl) compostEl.textContent = `${sampleData.sustainability_metrics.composted_waste_kg[todayIndex]} kg`;
  if (biogasEl) biogasEl.textContent = `${sampleData.sustainability_metrics.biogas_generated_cubic_meters[todayIndex]} m³`;
  if (fertilizerEl) fertilizerEl.textContent = `${sampleData.sustainability_metrics.fertilizer_produced_kg[todayIndex]} kg`;
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
        labels: ['Composting', 'Biogas', 'Animal Feed', 'Donation'],
        datasets: [{
          data: [45, 25, 15, 15],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
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

// Make functions globally available for HTML onclick events
window.showSection = showSection;
window.toggleMobileMenu = toggleMobileMenu;
window.calculatePortions = calculatePortions;
window.submitFeedback = submitFeedback;
window.schedulePickup = schedulePickup;
window.calculateImpact = calculateImpact;
window.simulateRFID = simulateRFID;