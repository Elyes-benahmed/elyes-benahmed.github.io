const toggle = document.createElement('button');
toggle.textContent = '🌙';
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
document.body.prepend(toggle);

// Restaure le thème au chargement
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
