// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.navbar .dropdown');

    // When hamburger icon is clicked, toggle the dropdown menu
    hamburger.addEventListener('click', function() {
        dropdown.classList.toggle('active');
    });
});
