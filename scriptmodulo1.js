document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // Función para abrir el menú lateral
    function openMenu() {
        if (sidebar && overlay) {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        }
    }

    // Función para cerrar el menú lateral
    function closeMenu() {
        if (sidebar && overlay) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    }

    // Eventos para abrir/cerrar el menú lateral en móviles
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    // Cerrar al hacer clic fuera del menú (en el overlay)
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Cerrar el menú al presionar sobre cualquier enlace dentro del sidebar
    if (sidebar) {
        const navItems = sidebar.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });
    }

    // Diccionario de traducción para el Módulo 1
    const translations = {
        es: {
            pageTitle: "MenteSana - Módulo 1: Sueño",
            logoText: '<span class="blue">Mente</span><span class="green">Sana</span>',
            navHome: "Inicio",
            mod1Small: "Módulo 1",
            mod1Title: "Sueño",
            mod2Small: "Módulo 2",
            mod2Title: "Actividad física",
            mod3Small: "Módulo 3",
            mod3Title: "Alimentación",
            mod4Small: "Módulo 4",
            mod4Title: "Bienestar emocional",
            mod5Small: "Módulo 5",
            mod5Title: "Hábitos digitales",
            navQuiz: "Actividad de aprendizaje",
            navProgress: "Mi progreso",
            navCredits: "Créditos",
            bannerModNum: "Módulo 1",
            bannerModTitle: "Sueño",
            audioLabel: "Escuchar descripción en audio",
            sub1Title: "Importancia del descanso",
            sub1Desc: "El sueño es esencial para la memoria, el aprendizaje, el estado de ánimo y la salud física y mental.",
            sub2Title: "Rutina de sueño saludable",
            sub2Desc: "Descubre cómo crear hábitos que mejoren tu calidad de sueño.",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - Module 1: Sleep",
            logoText: '<span class="blue">Healthy</span><span class="green">Mind</span>',
            navHome: "Home",
            mod1Small: "Module 1",
            mod1Title: "Sleep",
            mod2Small: "Module 2",
            mod2Title: "Physical Activity",
            mod3Small: "Module 3",
            mod3Title: "Nutrition",
            mod4Small: "Module 4",
            mod4Title: "Emotional Well-being",
            mod5Small: "Module 5",
            mod5Title: "Digital Habits",
            navQuiz: "Learning activity",
            navProgress: "My Progress",
            navCredits: "Credits",
            bannerModNum: "Module 1",
            bannerModTitle: "Sleep",
            audioLabel: "Listen to audio description",
            sub1Title: "Importance of Rest",
            sub1Desc: "Sleep is essential for memory, learning, mood, and physical and mental health.",
            sub2Title: "Healthy Sleep Routine",
            sub2Desc: "Discover how to build habits that improve your sleep quality.",
            btnPrev: "Previous",
            btnNext: "Next"
        }
    };

    // Función de actualización de idioma
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        document.title = translations[lang].pageTitle;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    // Eventos del conmutador ES/EN
    btnEs.addEventListener('click', () => {
        btnEs.classList.add('active');
        btnEn.classList.remove('active');
        changeLanguage('es');
    });

    btnEn.addEventListener('click', () => {
        btnEn.classList.add('active');
        btnEs.classList.remove('active');
        changeLanguage('en');
    });
});

// Para guardar visita de página en las demás vistas HTML:
let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
const currentPage = window.location.pathname.split('/').pop();
if (currentPage && !visitedPages.includes(currentPage)) {
    visitedPages.push(currentPage);
    localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
}

// Para guardar una interacción completada (ej. responder una pregunta o dar clic a un botón):
let completedInteractions = JSON.parse(localStorage.getItem('completedInteractions')) || [];
if (!completedInteractions.includes('interaction_id')) {
    completedInteractions.push('interaction_id');
    localStorage.setItem('completedInteractions', JSON.stringify(completedInteractions));
}