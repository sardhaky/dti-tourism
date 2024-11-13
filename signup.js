// signup.js

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the user input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate password match
    if (password !== confirmPassword) {
        document.getElementById('error-message').textContent = "Passwords do not match!";
        return;
    }

    // Save user data to localStorage (for simplicity, we use localStorage here)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to login page after successful sign-up
    window.location.href = "login.html";
});
