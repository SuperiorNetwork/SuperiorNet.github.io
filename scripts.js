// Ensure dropdown menu toggles when clicked
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelectorAll('.dropdown');
    
    dropdown.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('show');
        });
    });

    // Close the dropdown if clicked outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(menu => {
                menu.style.display = 'none';
            });
        }
    }
});
