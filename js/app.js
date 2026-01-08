// ============================================
// Core Application - Paw Planet
// ============================================

// Authentication state
let currentUser = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    // Load user from localStorage
    loadUser();

    // Update UI based on auth state
    updateAuthUI();

    // Initialize location
    initializeLocation();

    // Setup event listeners
    setupEventListeners();
}

// User Management
function loadUser() {
    const saved = localStorage.getItem('pawplanet_user');
    if (saved) {
        currentUser = JSON.parse(saved);
    }
}

function saveUser(user) {
    currentUser = user;
    localStorage.setItem('pawplanet_user', JSON.stringify(user));
    updateAuthUI();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('pawplanet_user');
    updateAuthUI();
    window.location.href = 'index.html';
}

function updateAuthUI() {
    const accountBtn = document.getElementById('account-btn');
    if (accountBtn) {
        if (currentUser) {
            accountBtn.innerHTML = `
        <img src="${currentUser.profilePicture || 'assets/default-avatar.png'}" 
             alt="${currentUser.name}" 
             style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">
      `;
        } else {
            accountBtn.innerHTML = '👤';
        }
    }
}

// Location Management
function initializeLocation() {
    const savedLocation = localStorage.getItem('pawplanet_location');
    if (savedLocation) {
        updateLocationDisplay(JSON.parse(savedLocation));
    } else {
        // Request geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // In real app, reverse geocode to get city
                    const location = { city: 'Mumbai', pincode: '400001' };
                    localStorage.setItem('pawplanet_location', JSON.stringify(location));
                    updateLocationDisplay(location);
                },
                (error) => {
                    console.log('Geolocation error:', error);
                }
            );
        }
    }
}

function updateLocationDisplay(location) {
    const locationBtn = document.querySelector('.location-selector');
    if (locationBtn) {
        locationBtn.innerHTML = `
      <span>📍</span>
      <span>${location.city}</span>
    `;
    }
}

function changeLocation() {
    const newCity = prompt('Enter your city:');
    if (newCity) {
        const location = { city: newCity, pincode: '' };
        localStorage.setItem('pawplanet_location', JSON.stringify(location));
        updateLocationDisplay(location);
    }
}

// Event Listeners
function setupEventListeners() {
    // Account button
    const accountBtn = document.getElementById('account-btn');
    if (accountBtn) {
        accountBtn.addEventListener('click', () => {
            if (currentUser) {
                window.location.href = 'account.html';
            } else {
                showLoginModal();
            }
        });
    }

    // Cart button
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            window.location.href = 'cart.html';
        });
    }

    // Location selector
    const locationBtn = document.querySelector('.location-selector');
    if (locationBtn) {
        locationBtn.addEventListener('click', changeLocation);
    }

    // Search
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value;
                if (query) {
                    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    }
}

// Modal Management
function showLoginModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">Login to Paw Planet</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div class="modal-body">
        <form id="login-form">
          <div class="form-group">
            <label class="form-label">Phone Number</label>
            <input type="tel" class="form-input" placeholder="+91 9876543210" required>
          </div>
          <div class="form-group">
            <label class="form-label">OTP</label>
            <input type="text" class="form-input" placeholder="Enter OTP" required>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Login</button>
        </form>
        <p class="text-center mt-4 text-muted">
          Don't have an account? <a href="#" class="text-primary font-semibold">Register</a>
        </p>
      </div>
    </div>
  `;

    document.body.appendChild(modal);

    // Handle form submission
    const form = modal.querySelector('#login-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Mock login - use MOCK_DATA.user
        saveUser(MOCK_DATA.user);
        modal.remove();
        showToast('Login successful!', 'success');
    });
}

// Utility Functions
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function showConfirmDialog(message, onConfirm) {
    if (confirm(message)) {
        onConfirm();
    }
}

// Remind Me Later functionality
function remindMeLater(productId) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3 class="modal-title">Remind Me When Available</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
      </div>
      <div class="modal-body">
        <p class="mb-4">Choose how you'd like to be notified when this product is back in stock:</p>
        <div class="form-group">
          <div class="form-checkbox">
            <input type="checkbox" id="notify-email" checked>
            <label for="notify-email">Email Notification</label>
          </div>
          <div class="form-checkbox">
            <input type="checkbox" id="notify-sms">
            <label for="notify-sms">SMS Notification</label>
          </div>
          <div class="form-checkbox">
            <input type="checkbox" id="notify-app">
            <label for="notify-app">In-App Notification</label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
        <button class="btn btn-primary" onclick="saveReminder(${productId}); this.closest('.modal-overlay').remove();">Set Reminder</button>
      </div>
    </div>
  `;

    document.body.appendChild(modal);
}

function saveReminder(productId) {
    // Save reminder to localStorage
    const reminders = JSON.parse(localStorage.getItem('pawplanet_reminders') || '[]');
    reminders.push({
        productId: productId,
        date: new Date().toISOString(),
        notifyEmail: document.getElementById('notify-email').checked,
        notifySMS: document.getElementById('notify-sms').checked,
        notifyApp: document.getElementById('notify-app').checked
    });
    localStorage.setItem('pawplanet_reminders', JSON.stringify(reminders));
    showToast('Reminder set! We\'ll notify you when the product is available.', 'success');
}

// Export functions for use in other files
window.PawPlanet = {
    currentUser,
    formatPrice,
    formatDate,
    showToast,
    showConfirmDialog,
    remindMeLater,
    logout
};
