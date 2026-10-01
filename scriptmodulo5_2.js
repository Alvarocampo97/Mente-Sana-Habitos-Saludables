document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    // Elementos para el Menú Hamburguesa
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    function toggleMenu() {
        if (sidebar && sidebarOverlay) {
            sidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('active');
        }
    }

    function closeMenu() {
        if (sidebar && sidebarOverlay) {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeMenu);
    }

    // Interacción de volteo de tarjetas (Flip cards)
    const cards = document.querySelectorAll('.interactive-card');

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-card-btn')) {
                e.stopPropagation();
                card.classList.remove('flipped');
            } else {
                card.classList.toggle('flipped');
            }
        });
    });

    // Diccionario de traducción para la sección 5.2
    const translations = {
        es: {
            pageTitle: "MenteSana - 5.2 Construcción de una rutina saludable",
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
            lessonTitle: "5.2 Construcción de una rutina saludable",
            audioLabel: "Escuchar descripción en audio",
            introText: "Una rutina saludable permite equilibrar el estudio, el uso de dispositivos, el descanso y la actividad física. No se trata de eliminar las pantallas, sino de utilizarlas de manera consciente y acompañarlas de buenos hábitos.",
            cardHint: "Haz clic para ver más",
            card1Tag: "Estrategia 1",
            card1Front: "🕐 Organiza tu tiempo",
            card1Back: "Establece momentos para estudiar, descansar y realizar otras actividades.",
            card2Tag: "Estrategia 2",
            card2Front: "💻 Cuida tu espacio de estudio",
            card2Back: "Ubica la pantalla de manera que facilite una postura cómoda y evita mantener posiciones incómodas durante períodos prolongados (Bayraktar & Mohammadzadeh, 2026).",
            card3Tag: "Estrategia 3",
            card3Front: "👀 Descansa la vista",
            card3Back: "Realiza pausas periódicas y cambia el enfoque de la mirada durante las jornadas frente a pantallas.",
            card4Tag: "Estrategia 4",
            card4Front: "🚶 Muévete durante el día",
            card4Back: "Levántate, camina o realiza pequeños movimientos después de períodos prolongados sentado (Castro et al., 2020; Bayraktar & Mohammadzadeh, 2026).",
            card5Tag: "Estrategia 5",
            card5Front: "🧘 Haz pausas activas",
            card5Back: "Dedica unos minutos a cambiar de posición y realizar movimientos antes de continuar estudiando.",
            card6Tag: "Estrategia 6",
            card6Front: "📱 Separa lo académico de lo recreativo",
            card6Back: "Evita prolongar innecesariamente el tiempo de pantalla una vez terminadas tus actividades académicas.",
            card7Tag: "Estrategia 7",
            card7Front: "🌙 Prepara tu cuerpo para descansar",
            card7Back: "Establece momentos de desconexión de las pantallas y prioriza el descanso nocturno.",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 5.2 Building a Healthy Routine",
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
            lessonTitle: "5.2 Building a Healthy Routine",
            audioLabel: "Listen to audio description",
            introText: "A healthy routine balances study, screen time, rest, and physical activity. It's not about eliminating screens, but using them mindfully alongside good habits.",
            cardHint: "Click to see more",
            card1Tag: "Strategy 1",
            card1Front: "🕐 Organize your time",
            card1Back: "Set aside specific times for studying, resting, and doing other activities.",
            card2Tag: "Strategy 2",
            card2Front: "💻 Take care of your study space",
            card2Back: "Position the screen to support comfortable posture and avoid holding uncomfortable positions for prolonged periods (Bayraktar & Mohammadzadeh, 2026).",
            card3Tag: "Strategy 3",
            card3Front: "👀 Rest your eyes",
            card3Back: "Take periodic breaks and shift your visual focus during long screen sessions.",
            card4Tag: "Strategy 4",
            card4Front: "🚶 Move throughout the day",
            card4Back: "Stand up, walk around, or perform light movements after long periods of sitting (Castro et al., 2020; Bayraktar & Mohammadzadeh, 2026).",
            card5Tag: "Strategy 5",
            card5Front: "🧘 Take active breaks",
            card5Back: "Spend a few minutes changing positions and moving before resuming your studies.",
            card6Tag: "Strategy 6",
            card6Front: "📱 Separate academic from recreational time",
            card6Back: "Avoid unnecessarily extending screen time once your academic tasks are done.",
            card7Tag: "Strategy 7",
            card7Front: "🌙 Prepare your body to rest",
            card7Back: "Set specific times to disconnect from screens and prioritize night rest.",
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