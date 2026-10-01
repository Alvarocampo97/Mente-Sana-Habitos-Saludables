document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    
    // Elementos del menú hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    // Lógica para abrir/cerrar menú hamburguesa
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

    // Diccionario de traducción para la sección 3.2
    const translations = {
        es: {
            pageTitle: "MenteSana - 3.2 Opciones saludables para los estudiantes universitarios",
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
            lessonTitle: "3.2 Opciones saludables para los estudiantes universitarios",
            audioLabel: "Escuchar descripción en audio",
            mainDesc: "La vida universitaria puede traer poco tiempo, horarios cambiantes y comidas fuera de casa. ¡Pequeñas decisiones pueden marcar la diferencia!",
            benefitsTitle: "🎒 ¿Qué puedes elegir?",
            p1Title: "Para la merienda",
            p1Desc: "Fruta, yogur o frutos secos.",
            p2Title: "Para comer fuera",
            p2Desc: "Prefiere preparaciones con verduras y una fuente de proteína.",
            p3Title: "Para beber",
            p3Desc: "Elige agua con mayor frecuencia.",
            p4Title: "En tus comidas",
            p4Desc: "Incluye frutas y verduras.",
            p5Title: "Ultraprocesados",
            p5Desc: "Consúmelos con menor frecuencia.",
            p6Title: "Organízate",
            p6Desc: "Planifica algunas comidas o meriendas.",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 3.2 Healthy choices for college students",
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
            lessonTitle: "3.2 Healthy choices for college students",
            audioLabel: "Listen to audio description",
            mainDesc: "College life can bring little time, changing schedules, and eating out. Small decisions can make a difference!",
            benefitsTitle: "🎒 What can you choose?",
            p1Title: "For snacks",
            p1Desc: "Fruit, yogurt, or nuts.",
            p2Title: "Eating out",
            p2Desc: "Prefer meals with vegetables and a protein source.",
            p3Title: "To drink",
            p3Desc: "Choose water more frequently.",
            p4Title: "In your meals",
            p4Desc: "Include fruits and vegetables.",
            p5Title: "Ultra-processed foods",
            p5Desc: "Consume them less frequently.",
            p6Title: "Get organized",
            p6Desc: "Plan some meals or snacks.",
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