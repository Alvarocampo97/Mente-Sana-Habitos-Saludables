document.addEventListener('DOMContentLoaded', () => {
    // Referencias para el Menú Hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    // Función para alternar el menú
    function toggleMenu() {
        if (sidebar && sidebarOverlay) {
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', toggleMenu);
    }

    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    // Diccionario de traducción para el Módulo 2
    const translations = {
        es: {
            pageTitle: "MenteSana - Módulo 2: Actividad física",
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
            bannerModNum: "Módulo 2",
            bannerModTitle: "Actividad física",
            audioLabel: "Escuchar descripción en audio",
            sub1Title: "Beneficios de la actividad física",
            sub1Desc: "La actividad física regular contribuye al cuidado de la salud, mejora la condición física y favorece una composición corporal saludable.",
            sub2Title: "Estrategias para mantenerse activo durante la jornada académica",
            sub2Desc: "Conoce estrategias que te ayudarán a mantenerte activo.",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "MenteSana - Module 2: Physical Activity",
            logoText: '<span class="blue">Mente</span><span class="green">Sana</span>',
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
            bannerModNum: "Module 2",
            bannerModTitle: "Physical Activity",
            audioLabel: "Listen to audio description",
            sub1Title: "Benefits of Physical Activity",
            sub1Desc: "Regular physical activity contributes to health care, improves physical fitness, and promotes a healthy body composition.",
            sub2Title: "Strategies to Stay Active During the Academic Day",
            sub2Desc: "Discover strategies that will help you stay active.",
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
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    // Eventos del conmutador ES/EN
    if (btnEs) {
        btnEs.addEventListener('click', () => {
            btnEs.classList.add('active');
            if (btnEn) btnEn.classList.remove('active');
            changeLanguage('es');
        });
    }

    if (btnEn) {
        btnEn.addEventListener('click', () => {
            btnEn.classList.add('active');
            if (btnEs) btnEs.classList.remove('active');
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

// Para guardar una interacción completada (ej. responder una pregunta o dar clic a un botón):
let completedInteractions = JSON.parse(localStorage.getItem('completedInteractions')) || [];
if (!completedInteractions.includes('interaction_id')) {
    completedInteractions.push('interaction_id');
    localStorage.setItem('completedInteractions', JSON.stringify(completedInteractions));
}