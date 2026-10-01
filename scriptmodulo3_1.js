document.addEventListener('DOMContentLoaded', () => {
    // Referencias para el Menú Hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    // Función para alternar la visibilidad del menú en móvil
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

    // Diccionario de traducción para la sección 3.1
    const translations = {
        es: {
            pageTitle: "MenteSana - 3.1 Principios básicos de una alimentación saludable",
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
            lessonTitle: "3.1 Principios básicos de una alimentación saludable",
            audioLabel: "Escuchar descripción en audio",
            mainDesc: "Una alimentación saludable aporta los nutrientes y la energía que el cuerpo necesita para funcionar adecuadamente y ayuda a prevenir enfermedades (Calañas-Continente & Bellido, 2006).",
            rememberText: "<strong>Recuerda:</strong> Comer saludable no significa eliminar alimentos, sino aprender a elegir y combinar mejor.",
            benefitsTitle: "Principios clave",
            p1Title: "Variedad",
            p1Desc: "Consume alimentos de diferentes grupos.",
            p2Title: "Equilibrio",
            p2Desc: "Aporta al cuerpo los nutrientes que necesita.",
            p3Title: "Moderación",
            p3Desc: "Evita el exceso de grasas, azúcares y sal.",
            p4Title: "Alimentos naturales",
            p4Desc: "Prioriza frutas, verduras y cereales integrales.",
            p5Title: "Hidratación",
            p5Desc: "Prefiere el agua como bebida habitual.",
            p6Title: "Movimiento",
            p6Desc: "Combina una buena alimentación con actividad física.",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 3.1 Basic Principles of Healthy Eating",
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
            lessonTitle: "3.1 Basic Principles of Healthy Eating",
            audioLabel: "Listen to audio description",
            mainDesc: "Healthy eating provides the nutrients and energy the body needs to function properly and helps prevent diseases (Calañas-Continente & Bellido, 2006).",
            rememberText: "<strong>Remember:</strong> Eating healthy doesn't mean eliminating foods, but learning to choose and combine them better.",
            benefitsTitle: "Key Principles",
            p1Title: "Variety",
            p1Desc: "Eat foods from different food groups.",
            p2Title: "Balance",
            p2Desc: "Provides the body with the nutrients it needs.",
            p3Title: "Moderation",
            p3Desc: "Avoid excess fats, sugars, and salt.",
            p4Title: "Natural Foods",
            p4Desc: "Prioritize fruits, vegetables, and whole grains.",
            p5Title: "Hydration",
            p5Desc: "Prefer water as your regular beverage.",
            p6Title: "Movement",
            p6Desc: "Combine healthy eating with physical activity.",
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