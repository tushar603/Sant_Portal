// Dark mode - shared across all pages
(function () {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') document.documentElement.classList.add('dark');
})();

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark);
    document.querySelectorAll('.dark-toggle').forEach(btn => {
        btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.dark-toggle').forEach(btn => {
        btn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    });
});
