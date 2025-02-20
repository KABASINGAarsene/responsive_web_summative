// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select the contact form and its input fields
    const form = document.querySelector(".contact-form form");
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
  
    // Add an event listener for form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page
  
        // Perform simple validation checks
        const nameValid = nameInput.value.trim() !== ""; // Check if the name input is not empty
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value); // Check if the email matches the regex for valid email
        const messageValid = messageInput.value.trim() !== ""; // Check if the message input is not empty
  
        // If name is invalid, show an alert and focus on the name input field
        if (!nameValid) {
            alert("Please enter your name.");
            nameInput.focus();
            return; // Stop further execution if validation fails
        }
  
        // If email is invalid, show an alert and focus on the email input field
        if (!emailValid) {
            alert("Please enter a valid email.");
            emailInput.focus();
            return; // Stop further execution if validation fails
        }
  
        // If message is invalid, show an alert and focus on the message input field
        if (!messageValid) {
            alert("Please enter your message.");
            messageInput.focus();
            return; // Stop further execution if validation fails
        }
  
        // If all fields are valid, show a success message
        alert("Message sent successfully!"); // Placeholder for success action
  
        // Reset the form to clear the input fields after submission
        form.reset();
    });
});
