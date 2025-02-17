document.addEventListener('DOMContentLoaded', () => {
    // Select buttons
    const downloadBtn = document.getElementById('downloadBtn');
    const applyBtn = document.getElementById('applyBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');

    // Select sections
    const downloadsSection = document.getElementById('downloads');
    const applySection = document.getElementById('apply');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');

    // Toggle visibility of sections on button click
    downloadBtn.addEventListener('click', () => {
        downloadsSection.classList.toggle('hidden');
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
