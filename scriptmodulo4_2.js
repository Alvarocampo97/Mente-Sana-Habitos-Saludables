document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');

    // Control del menú hamburguesa para móviles
    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
    }

    // Diccionario de traducción para la sección 4.2
    const translations = {
        es: {
            pageTitle: "MenteSana - 4.2 Estrategias para gestionar el estrés académico",
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
            lessonTitle: "4.2 Estrategias para gestionar el estrés académico",
            audioLabel: "Escuchar descripción en audio",
            mainDesc: "El estrés académico es una respuesta que puede aparecer cuando las demandas de la vida universitaria son percibidas como difíciles de afrontar. Las evaluaciones, trabajos, responsabilidades y organización del tiempo pueden generar tensión en los estudiantes (Valdivieso-León et al., 2020).",
            rememberText: "<strong>Ten en cuenta:</strong> Desarrollar estrategias de afrontamiento permite responder de manera más adecuada a estas situaciones y favorecer tu bienestar durante la etapa universitaria.",
            benefitsTitle: "Estrategias recomendadas",
            p1Title: "Organiza tu tiempo",
            p1Desc: "Planifica tareas, trabajos y fechas de entrega.",
            p2Title: "Prioriza",
            p2Desc: "Identifica qué debes resolver primero.",
            p3Title: "Busca soluciones",
            p3Desc: "Ante una dificultad académica, piensa en alternativas concretas.",
            p4Title: "Expresa lo que sientes",
            p4Desc: "Hablar sobre tus preocupaciones puede ayudarte a afrontarlas.",
            p5Title: "Replantea la situación",
            p5Desc: "Cambia pensamientos negativos por una mirada más realista y constructiva.",
            p6Title: "Busca apoyo",
            p6Desc: "Acude a docentes, compañeros, familiares o servicios de apoyo cuando lo necesites.",
            p7Title: "Evita aislarte",
            p7Desc: "Alejarte de los demás puede dificultar el manejo de situaciones estresantes.",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 4.2 Strategies for Managing Academic Stress",
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
            lessonTitle: "4.2 Strategies for Managing Academic Stress",
            audioLabel: "Listen to audio description",
            mainDesc: "Academic stress is a response that can appear when the demands of university life are perceived as difficult to cope with. Exams, assignments, responsibilities, and time management can create tension for students (Valdivieso-León et al., 2020).",
            rememberText: "<strong>Keep in mind:</strong> Developing coping strategies allows you to respond more appropriately to these situations and promote your well-being during university life.",
            benefitsTitle: "Recommended Strategies",
            p1Title: "Organize your time",
            p1Desc: "Plan tasks, assignments, and due dates.",
            p2Title: "Prioritize",
            p2Desc: "Identify what you need to solve first.",
            p3Title: "Seek solutions",
            p3Desc: "When facing an academic difficulty, think of concrete alternatives.",
            p4Title: "Express how you feel",
            p4Desc: "Talking about your concerns can help you deal with them.",
            p5Title: "Reframe the situation",
            p5Desc: "Replace negative thoughts with a more realistic and constructive perspective.",
            p6Title: "Seek support",
            p6Desc: "Reach out to teachers, classmates, family, or support services when needed.",
            p7Title: "Avoid isolating yourself",
            p7Desc: "Isolating yourself from others can make managing stressful situations harder.",
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