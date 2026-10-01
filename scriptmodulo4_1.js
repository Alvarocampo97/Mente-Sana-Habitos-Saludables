document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    
    // Elementos para el Menú Hamburguesa en Móviles
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    // Funcionalidad Abrir/Cerrar Menú
    if (menuToggle && sidebar && sidebarOverlay) {
        function toggleMenu() {
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
        }

        menuToggle.addEventListener('click', toggleMenu);
        sidebarOverlay.addEventListener('click', toggleMenu);

        // Cerrar menú al presionar un elemento en móviles
        document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                    sidebarOverlay.classList.remove('active');
                }
            });
        });
    }

    // Diccionario de traducción para la sección 4.1
    const translations = {
        es: {
            pageTitle: "MenteSana - 4.1 Técnicas para manejar el estrés",
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
            lessonTitle: "4.1 Técnicas para manejar el estrés",
            audioLabel: "Escuchar descripción en audio",
            mainDesc: "El estrés es una respuesta natural del cuerpo, pero aprender a gestionarlo adecuadamente es clave para mantener tu salud mental y rendimiento académico.",
            videoQuote: '<i>"Tómate un momento para respirar, hacer una pausa y recalibrar tu mente."</i>',
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 4.1 Techniques for managing stress",
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
            lessonTitle: "4.1 Techniques for managing stress",
            audioLabel: "Listen to audio description",
            mainDesc: "Stress is a natural body response, but learning to manage it properly is key to maintaining your mental health and academic performance.",
            videoQuote: '<i>"Take a moment to breathe, pause, and recalibrate your mind."</i>',
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