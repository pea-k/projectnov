// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Toggle feature details
function toggleFeatureDetail(element) {
    const description = element.querySelector('.feature-description');
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
}

// Form validation
function validateForm(event) {
    event.preventDefault();
    let valid = true;

    // Clear previous messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('formSuccess').innerText = '';

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate Name
    if (name === '') {
        valid = false;
        document.getElementById('nameError').innerText = 'Please enter your name.';
    }

    // Validate Email
    if (email === '') {
        valid = false;
        document.getElementById('emailError').innerText = 'Please enter your email.';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        valid = false;
        document.getElementById('emailError').innerText = 'Please enter a valid email.';
    }

    // Validate Message
    if (message === '') {
        valid = false;
        document.getElementById('messageError').innerText = 'Please enter your message.';
    }

    // Success Message
    if (valid) {
        document.getElementById('formSuccess').innerText = 'Thank you for contacting us!';
        document.getElementById('contactForm').reset();
    }
}
