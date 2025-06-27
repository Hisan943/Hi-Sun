document.addEventListener('DOMContentLoaded', function() {
    // Movie data for each category
    const movieData = {
        action: [
            { title: "Captain America: Brave New World", rating: "8.5/10" },
            { title: "Guardians of Galaxy Vol.3", rating: "8.8/10" },
            { title: "Venom: The Last Dance", rating: "7.9/10" },
            { title: "Black Panther", rating: "9.0/10" }
        ],
        romance: [
            { title: "Romeo & Juliet", rating: "8.2/10" },
            { title: "AADC 1", rating: "8.7/10" },
            { title: "500 Days of Summer", rating: "8.3/10" },
            { title: "172 Days", rating: "7.5/10" }
        ],
        animation: [
            { title: "Moana", rating: "8.9/10" },
            { title: "Jumbo", rating: "9/10" },
            { title: "Luca", rating: "8.4/10" },
            { title: "Si Juki The Movie", rating: "7.2/10" }
        ]
    };

    // Create movie info overlays
    function createMovieOverlays() {
        const categories = ['action', 'romance', 'animation'];
        
        categories.forEach((category, catIndex) => {
            const movieItems = document.querySelectorAll(`.container-content:nth-child(${catIndex + 2}) .li-content`);
            
            movieItems.forEach((item, index) => {
                const movie = movieData[category][index];
                const overlay = document.createElement('div');
                overlay.className = 'movie-info';
                overlay.innerHTML = `
                    <h4 class="movie-title">${movie.title}</h4>
                    <span class="movie-rating">🌟 ${movie.rating}</span>
                `;
                item.appendChild(overlay);
            });
        });
    }

    // Initialize functions
    createMovieOverlays();
    setupNavbar();

    // Add hover effect to movie items
    const movieItems = document.querySelectorAll('.li-content');
    movieItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
});
// Login Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const loginPopup = document.getElementById('loginPopup');
    const closeLogin = document.getElementById('closeLogin');
    const loginForm = document.getElementById('loginForm');
    const registerLink = document.getElementById('registerLink');
    const beranda = document.getElementById('beranda');

    // Show login popup
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close login popup
    closeLogin.addEventListener('click', function() {
        loginPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside
    loginPopup.addEventListener('click', function(e) {
        if (e.target === loginPopup) {
            loginPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (username && password) {
            // Simulate successful login
            loginPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Change login button to logout
            loginBtn.textContent = 'Logout';
            loginBtn.removeEventListener('click', arguments.callee);
            loginBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to logout?')) {
                    loginBtn.textContent = 'Login';
                    location.reload();
                }
            });
            
            // Scroll to contact section
            contactSection.scrollIntoView({ behavior: 'smooth' });
            
            // Show welcome message
            alert(`Welcome back, ${username}! You can now contact us.`);
        } else {
            alert('Please enter both username and password');
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
});