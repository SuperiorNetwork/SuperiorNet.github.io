document.addEventListener('DOMContentLoaded', () => {
    // Buttons
    const downloadBtn = document.querySelector('a[href="#downloads"]');
    const applyBtn = document.querySelector('a[href="#apply"]');
    const aboutBtn = document.querySelector('a[href="#about"]');
    const contactBtn = document.querySelector('a[href="#contact"]');

    // Sections
    const downloadSection = document.getElementById('downloads');
    const applySection = document.getElementById('apply');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    // Toggle visibility
    downloadBtn.addEventListener('click', () => {
        downloadSection.classList.toggle('hidden');
    });
    
    applyBtn.addEventListener('click', () => {
        applySection.classList.toggle('hidden');
    });
    
    aboutBtn.addEventListener('click', () => {
        aboutSection.classList.toggle('hidden');
    });
    
    contactBtn.addEventListener('click', () => {
        contactSection.classList.toggle('hidden');
    });
});
