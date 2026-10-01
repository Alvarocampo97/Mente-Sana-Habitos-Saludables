document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    // Funcionalidad del Menú Hamburguesa
    if (menuToggle && sidebar && sidebarOverlay) {
        function toggleMenu() {
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
            
            // Alternar ícono de barras a 'X' cuando esté abierto
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (sidebar.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        }

        function closeMenu() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }

        menuToggle.addEventListener('click', toggleMenu);
        sidebarOverlay.addEventListener('click', closeMenu);

        // Cerrar el menú al hacer clic en cualquier enlace en móviles
        const navItems = sidebar.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });
    }

    // Diccionario de traducción actualizado con soporte para Créditos
    const translations = {
        es: {
            pageTitle: "MenteSana - Créditos",
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
            creditsTitle: "Créditos y Referencias",
            creditsSubtitle: "Consulta las fuentes bibliográficas y los recursos multimedia utilizados.",
            refHeader: "Referencias Bibliográficas",
            audioLabel: "Escuchar descripción en audio",
            audioFallback: "Tu navegador no soporta la reproducción de audio.",
            btnPrev: "Anterior",
            btnNext: "Siguiente",
            btnHomeNav: "Inicio"
        },
        en: {
            pageTitle: "HealthyMind - Credits",
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
            creditsTitle: "Credits & References",
            creditsSubtitle: "Consult the bibliographic sources and multimedia resources used.",
            refHeader: "Bibliographic References",
            audioLabel: "Listen to audio description",
            audioFallback: "Your browser does not support audio playback.",
            btnPrev: "Previous",
            btnNext: "Next",
            btnHomeNav: "Home"
        }
    };

    // Función de actualización de idioma
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        document.title = translations[lang].pageTitle || document.title;

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

// Guardar visita de página
let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
const currentPage = window.location.pathname.split('/').pop();
if (currentPage && !visitedPages.includes(currentPage)) {
    visitedPages.push(currentPage);
    localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
}

// Guardar interacciones completadas
let completedInteractions = JSON.parse(localStorage.getItem('completedInteractions')) || [];
if (!completedInteractions.includes('interaction_id')) {
    completedInteractions.push('interaction_id');
    localStorage.setItem('completedInteractions', JSON.stringify(completedInteractions));
}