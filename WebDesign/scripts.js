
// Function to handle the form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get form field values
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate fields
    if (!fullName || !email || !phone || !username || !password) {
        alert('Please fill in all the required fields!');
        return;
    }

    // All fields are filled, show success alert
    alert('Your profile has been successfully updated!');
    // Redirect after alert
    window.location.href = 'Student.html';
}

// Attach the submit event to the form
document.getElementById('profile-form').addEventListener('submit', handleFormSubmit);


document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("You have successfully logged in");
});


