document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If everything is valid, you can submit the form
        // For demonstration, we'll just log the values to the console
        console.log("Form submitted successfully!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);

        // Here you can add your form submission logic (e.g., AJAX request)
        // For now, we'll just reset the form
        form.reset();
        alert("Thank you for your message! We will get back to you soon.");
    });
});