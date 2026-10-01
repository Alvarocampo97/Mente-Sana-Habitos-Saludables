document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    
    // Lógica para el menú hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

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

    // Diccionario de traducción para la sección 1.1
    const translations = {
        es: {
            pageTitle: "MenteSana - 1.1 Importancia del descanso",
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
            lessonTitle: "1.1 Importancia del descanso",
            audioLabel: "Escuchar descripción en audio",
            mainDesc: " El sueño no es un momento de inactividad ni una pérdida de tiempo, es un proceso fundamental para el funcionamiento del organismo y para el bienestar físico y emocional. Durante el sueño se desarrollan procesos esenciales del sistema nervioso y se alternan diferentes fases que contribuyen al adecuado funcionamiento cerebral. (Panseits, 2023). ", 
            omsText: "Según Panseits (2023) dormir bien renueva tus conexiones cerebrales y activa funciones clave que impactan directamente en tu capacidad para concentrarte, tu salud física y tu estado de ánimo.",
            benefitsTitle: "Beneficios de un buen descanso",
            ben1: "Mejora la memoria",
            ben2: "Regula el estado de ánimo",
            ben3: "Fortalece el sistema inmune",
            ben4: "Aumenta la productividad",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 1.1 Importance of Rest",
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
            lessonTitle: "1.1 Importance of Rest",
            audioLabel: "Listen to audio description",
            mainDesc: "Sleep is not a period of inactivity or a waste of time; it is a fundamental process for the proper functioning of the body and for physical and emotional well-being. During sleep, essential processes of the nervous system take place, and different stages alternate, contributing to proper brain function (Panseits, 2023).",
            omsText: "According to Panseits (2023), getting enough sleep renews your brain connections and activates key functions that directly impact your ability to concentrate, your physical health, and your mood.",
            benefitsTitle: "Benefits of Good Rest",
            ben1: "Improves memory",
            ben2: "Regulates mood",
            ben3: "Strengthens immune system",
            ben4: "Boosts productivity",
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