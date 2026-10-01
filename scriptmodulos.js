document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // Función para alternar el menú en móviles
    function toggleSidebar() {
        if (sidebar && overlay) {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', toggleSidebar);
    }

    // Diccionario de traducción para la sección de módulos
    const translations = {
        es: {
            pageTitle: "MenteSana - Módulos",
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
            welcomeTitle: "¡Bienvenido!",
            welcomeSubtitle: "Elige un módulo para comenzar tu recorrido hacia un mejor bienestar.",
            audioLabel: "Escuchar descripción en audio",
            audioFallback: "Tu navegador no soporta la reproducción de audio.",
            mod1CardTitle: "Módulo 1<br>Sueño",
            mod2CardTitle: "Módulo 2<br>Actividad física",
            mod3CardTitle: "Módulo 3<br>Alimentación",
            mod4CardTitle: "Módulo 4<br>Bienestar emocional",
            mod5CardTitle: "Módulo 5<br>Hábitos digitales",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - Modules",
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
            navQuiz: "Learning Activity",
            navProgress: "My Progress",
            navCredits: "Credits",
            welcomeTitle: "Welcome!",
            welcomeSubtitle: "Choose a module to start your journey toward better well-being.",
            audioLabel: "Listen to audio description",
            audioFallback: "Your browser does not support audio playback.",
            mod1CardTitle: "Module 1<br>Sleep",
            mod2CardTitle: "Module 2<br>Physical Activity",
            mod3CardTitle: "Module 3<br>Nutrition",
            mod4CardTitle: "Module 4<br>Emotional Well-being",
            mod5CardTitle: "Module 5<br>Digital Habits",
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
    if (btnEs && btnEn) {
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
    }
});

// Para guardar visita de página en las demás vistas HTML:
let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
const currentPage = window.location.pathname.split('/').pop();
if (currentPage && !visitedPages.includes(currentPage)) {
    visitedPages.push(currentPage);
    localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
}

// Para guardar una interacción completada:
let completedInteractions = JSON.parse(localStorage.getItem('completedInteractions')) || [];
if (!completedInteractions.includes('interaction_id')) {
    completedInteractions.push('interaction_id');
    localStorage.setItem('completedInteractions', JSON.stringify(completedInteractions));
}