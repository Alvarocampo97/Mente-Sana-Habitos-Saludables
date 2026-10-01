document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    // Elementos del Menú Hamburguesa
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // Lógica para desplegar / cerrar menú hamburguesa en móviles
    if (hamburgerBtn && sidebar && overlay) {
        function toggleMenu() {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        function closeMenu() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }

        hamburgerBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', closeMenu);

        // Cerrar menú al hacer clic en cualquier opción de la lista
        const navItems = sidebar.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });
    }

    // Diccionario de traducción para el Módulo 5
    const translations = {
        es: {
            pageTitle: "MenteSana - Módulo 5: Hábitos digitales",
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
            bannerModNum: "Módulo 5",
            bannerModTitle: "Hábitos digitales",
            audioLabel: "Escuchar descripción en audio",
            sub1Title: "Gestión del tiempo frente a pantallas",
            sub1Desc: "Aprende a gestionar el tiempo frente a la pantalla de una manera adecuada.",
            sub2Title: "Construcción de una rutina saludable",
            sub2Desc: "Una rutina saludable permite equilibrar el estudio, el uso de dispositivos, el descanso y la actividad física.",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - Module 5: Digital Habits",
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
            bannerModNum: "Module 5",
            bannerModTitle: "Digital Habits",
            audioLabel: "Listen to audio description",
            sub1Title: "Screen Time Management",
            sub1Desc: "Learn how to manage screen time in an appropriate way.",
            sub2Title: "Building a Healthy Routine",
            sub2Desc: "A healthy routine balances study, device usage, rest, and physical activity.",
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