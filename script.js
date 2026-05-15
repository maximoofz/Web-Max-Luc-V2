let currentLang = 'es';

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Cambiar texto del botón
    document.getElementById('lang-toggle').innerText = currentLang === 'es' ? 'EN' : 'ES';
    
    // Cambiar todos los textos con atributos de idioma
    const elements = document.querySelectorAll('[data-es]');
    elements.forEach(el => {
        el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
}
