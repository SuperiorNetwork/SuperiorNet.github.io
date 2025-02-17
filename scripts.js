// Ensure dropdown menu toggles when clicked
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach(item => {
        item.addEventListener('click', () => {
            const menu = item.querySelector('.dropdown-content');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close the dropdown if clicked outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(menu => {
                if (menu.style.display === 'block') {
                    menu.style.display = 'none';
                }
            });
        }
    }
});
