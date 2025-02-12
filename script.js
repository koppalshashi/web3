// Placeholder for future JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded");
});
document.getElementById('year').textContent = new Date().getFullYear();
function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    document.getElementById('dateTime').textContent = now.toLocaleString('en-US', options);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
// Initial call to display the date and time immediately
updateDateTime();

