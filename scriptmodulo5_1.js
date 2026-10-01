document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    // Lógica para desplegar / cerrar el menú hamburguesa
    if (menuToggle && sidebar && sidebarOverlay) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
        });

        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Diccionario de traducción para la sección 5.1
    const translations = {
        es: {
            pageTitle: "MenteSana - 5.1 Gestión del tiempo frente a pantallas",
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
            lessonTitle: "5.1 Gestión del tiempo frente a pantallas",
            audioLabel: "Escuchar descripción en audio",
            mainDesc: "El uso de pantallas forma parte de la vida académica y personal de los estudiantes universitarios. Sin embargo, pasar largos períodos frente a dispositivos y permanecer sentado durante mucho tiempo puede favorecer hábitos sedentarios. Por ello, es importante aprender a gestionar el tiempo de pantalla, realizar pausas y construir rutinas que integren estudio, descanso y movimiento (Castro et al., 2020).",
            benefitsTitle: "Estrategias para gestionar el tiempo de pantalla",
            ben1: "Organiza tus períodos de estudio.",
            ben2: "Realiza pausas visuales.",
            ben3: "Levántate y muévete regularmente.",
            ben4: "Reduce el uso recreativo innecesario.",
            ben5: "Evita distracciones digitales durante el estudio.",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 5.1 Screen Time Management",
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
            lessonTitle: "5.1 Screen Time Management",
            audioLabel: "Listen to audio description",
            mainDesc: "Screen use is a part of the academic and personal lives of university students. However, spending long periods in front of devices and sitting for extended periods can promote sedentary habits. Therefore, it is important to learn how to manage screen time, take breaks, and build routines that integrate study, rest, and movement (Castro et al., 2020).",
            benefitsTitle: "Screen Time Management Strategies",
            ben1: "Organize your study periods.",
            ben2: "Take visual breaks.",
            ben3: "Get up and move regularly.",
            ben4: "Reduce unnecessary recreational use.",
            ben5: "Avoid digital distractions while studying.",
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