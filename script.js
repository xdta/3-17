const rsvpToggle = document.getElementById('rsvpToggle');
const rsvpForm = document.getElementById('rsvpForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('errorMessage');

rsvpToggle.addEventListener('click', function() {
    // 1. Validation check
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
        errorMsg.style.display = "block";
        return; // Stop here
    }

    // 2. Clear error if valid
    errorMsg.style.display = "none";

    // 3. Visual feedback
    this.classList.add('active');

    // 4. Send the data to Formspree
    const formData = new FormData(rsvpForm);
    
    fetch(rsvpForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("Thanks! Your RSVP has been saved.");
        } else {
            alert("Oops! There was a problem submitting.");
        }
    });
});