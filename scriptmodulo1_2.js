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

    // Interacción de volteo de tarjetas (Flip cards)
    const cards = document.querySelectorAll('.interactive-card');

    cards.forEach(card => {
        // Al hacer clic en la tarjeta se invierte
        card.addEventListener('click', (e) => {
            // Si hace clic en la equis de cerrar
            if (e.target.classList.contains('close-card-btn')) {
                e.stopPropagation();
                card.classList.remove('flipped');
            } else {
                card.classList.toggle('flipped');
            }
        });
    });

    // Diccionario de traducción para la sección 1.2
    const translations = {
        es: {
            pageTitle: "MenteSana - 1.2 Hábitos de sueño recomendados",
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
            lessonTitle: "1.2 Rutina de Sueño Saludable",
            audioLabel: "Escuchar descripción en audio",
            cardHint: "Haz clic para ver más",
            card1Tag: "Hábito saludable",
            card1Front: "Cuida las siestas.",
            card1Back: "Si necesitas dormir durante el día, procura que la siesta sea breve y evita realizarla muy tarde para no interferir con el sueño nocturno. (Sanitas, s. f.).",
            card2Tag: "Hábito saludable",
            card2Front: "Mantén un horario regular.",
            card2Back: "Procura acostarte y levantarte aproximadamente a la misma hora para favorecer la regularidad del ciclo sueño-vigilia. (Sanitas, s. f.).",
            card3Tag: "Hábito saludable",
            card3Front: "Cuida el consumo de estimulantes.",
            card3Back: "El consumo de sustancias como la cafeína puede relacionarse con la calidad del sueño. En estudiantes universitarios, Sierra et al. (2002) analizaron específicamente el efecto del consumo de cafeína, alcohol y tabaco sobre la calidad subjetiva del sueño. Mejor consume agua.",
            card4Tag: "Hábito saludable",
            card4Front: "Prepara tu ambiente para dormir.",
            card4Back: "Procura que el espacio de descanso sea tranquilo y adecuado para dormir. Las condiciones ambientales forman parte de los factores relacionados con la higiene del sueño. (Sierra et al., 2002; Sanitas, s. f.).",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 1.2 Recommended Sleep Habits",
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
            lessonTitle: "1.2 Healthy Sleep Routine",
            audioLabel: "Listen to audio description",
            cardHint: "Click to see more",
            card1Tag: "Healthy Habit",
            card1Front: "Mind your naps.",
            card1Back: "If you need to sleep during the day, try to keep naps short and avoid taking them too late so they do not interfere with night sleep. (Sanitas, n. d.).",
            card2Tag: "Healthy Habit",
            card2Front: "Maintain a regular schedule.",
            card2Back: "Try to go to bed and wake up at approximately the same time to promote the regularity of the sleep-wake cycle. (Sanitas, n. d.).",
            card3Tag: "Healthy Habit",
            card3Front: "Watch your intake of stimulants.",
            card3Back: "The consumption of substances such as caffeine can be related to sleep quality. In university students, Sierra et al. (2002) specifically analyzed the effect of caffeine, alcohol, and tobacco consumption on subjective sleep quality. Drinking water is better.",
            card4Tag: "Healthy Habit",
            card4Front: "Prepare your sleeping environment.",
            card4Back: "Ensure that your rest space is quiet and suitable for sleeping. Environmental conditions are part of the factors related to sleep hygiene. (Sierra et al., 2002; Sanitas, n. d.).",
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