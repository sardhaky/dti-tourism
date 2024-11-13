// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Get stored user data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate login
    if (username === storedUsername && password === storedPassword) {
        // Redirect to home page or dashboard
        window.location.href = "tourism.html";
    } else {
        document.getElementById('error-message').textContent = "Invalid credentials, please try again.";
    }
});
