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

    // Botones de cambio de idioma
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

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

    // Diccionario de traducción para la sección 2.2
    const translations = {
        es: {
            pageTitle: "MenteSana - 2.2 Estrategias para mantenerse activo durante la jornada académica.",
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
            lessonTitle: "2.2 Hábitos de Actividad Física Recomendados",
            audioLabel: "Escuchar descripción en audio",
            cardHint: "Haz clic para ver más",
            card1Tag: "Estrategia 1",
            card1Front: "Planificar la actividad física.",
            card1Back: "Organiza durante la semana momentos destinados a realizar actividad física, teniendo en cuenta el tiempo disponible y las actividades académicas (Galmes-Panades & Vidal-Conti, 2020).",
            card2Tag: "Estrategia 2",
            card2Front: "Establecer metas realistas",
            card2Back: "Define objetivos alcanzables de acuerdo con las necesidades, posibilidades y preferencias personales (Galmes-Panades & Vidal-Conti, 2020).",
            card3Tag: "Estrategia 3",
            card3Front: "Registrar la actividad realizada.",
            card3Back: "Utiliza aplicaciones, relojes o pulseras de actividad, fotografías u otros medios que permitan llevar un seguimiento del ejercicio realizado (Galmes-Panades & Vidal-Conti, 2020).",
            card4Tag: "Estrategia 4",
            card4Front: "Variar las actividades.",
            card4Back: "Combina diferentes tipos de ejercicio, como actividades aeróbicas, ejercicios de fuerza y ejercicios de flexibilidad, para evitar la monotonía y trabajar diferentes capacidades físicas (Perea-Caballero et al., 2019).",
            card5Tag: "Estrategia 5",
            card5Front: "Reducir el tiempo sedentario.",
            card5Back: "Procura no permanecer durante períodos prolongados realizando actividades sedentarias, especialmente durante las jornadas de estudio (Perea-Caballero et al., 2019).",
            card6Tag: "Estrategia 6",
            card6Front: "Realizar actividades con compañeros.",
            card6Back: "Comparte algunas actividades físicas con otros estudiantes puede favorecer la motivación y facilitar la continuidad de la práctica (Galmes-Panades & Vidal-Conti, 2020).",
            card7Tag: "Estrategia 7",
            card7Front: "Revisar los avances.",
            card7Back: "Observa periódicamente el progreso y ajustar las metas cuando sea necesario ayuda a mantener la motivación y favorecer la continuidad de la actividad física (Galmes-Panades & Vidal-Conti, 2020).",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 2.2 Strategies to stay active during the academic day.",
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
            lessonTitle: "2.2 Recommended Physical Activity Habits",
            audioLabel: "Listen to audio description",
            cardHint: "Click to see more",
            card1Tag: "Strategy 1",
            card1Front: "Plan physical activity.",
            card1Back: "Organize time slots throughout the week dedicated to physical activity, taking into account available time and academic duties (Galmes-Panades & Vidal-Conti, 2020).",
            card2Tag: "Strategy 2",
            card2Front: "Set realistic goals",
            card2Back: "Define achievable objectives according to personal needs, possibilities, and preferences (Galmes-Panades & Vidal-Conti, 2020).",
            card3Tag: "Strategy 3",
            card3Front: "Track performed activity.",
            card3Back: "Use applications, smartwatches or fitness trackers, photos, or other means that allow you to track your exercise progress (Galmes-Panades & Vidal-Conti, 2020).",
            card4Tag: "Strategy 4",
            card4Front: "Vary activities.",
            card4Back: "Combine different types of exercise, such as aerobic activities, strength training, and flexibility exercises, to avoid monotony and work on different physical capabilities (Perea-Caballero et al., 2019).",
            card5Tag: "Strategy 5",
            card5Front: "Reduce sedentary time.",
            card5Back: "Try not to remain seated for long periods during sedentary activities, especially during study sessions (Perea-Caballero et al., 2019).",
            card6Tag: "Strategy 6",
            card6Front: "Do activities with classmates.",
            card6Back: "Sharing physical activities with other students can boost motivation and make it easier to maintain the habit (Galmes-Panades & Vidal-Conti, 2020).",
            card7Tag: "Strategy 7",
            card7Front: "Review progress.",
            card7Back: "Periodically monitoring progress and adjusting goals when necessary helps maintain motivation and supports long-term physical activity (Galmes-Panades & Vidal-Conti, 2020).",
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

// Guardar visita de página
let visitedPages = JSON.parse(localStorage.getItem('visitedPages')) || [];
const currentPage = window.location.pathname.split('/').pop();
if (currentPage && !visitedPages.includes(currentPage)) {
    visitedPages.push(currentPage);
    localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
}