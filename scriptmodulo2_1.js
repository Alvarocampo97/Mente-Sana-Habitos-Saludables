document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const heroAudio = document.getElementById('hero-audio');

    // Lógica para desplegar / ocultar el menú lateral (Hamburguesa)
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

    // Cerrar el menú al dar clic en un enlace (útil en dispositivos móviles)
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });

    // Diccionario de traducción para la sección 2.1 (incluyendo rutas de audio)
    const translations = {
        es: {
            pageTitle: "MenteSana - 2.1 Beneficios de la actividad física",
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
            lessonTitle: "2.1 Beneficios de la actividad física",
            audioLabel: "Escuchar descripción en audio",
            audioSrc: "Audios/Audio 7.mp3",
            mainDesc: "La actividad física regular contribuye al cuidado de la salud, mejora la condición física y favorece una composición corporal saludable. En los estudiantes universitarios también puede aportar beneficios psicológicos y sociales, además de favorecer el bienestar general y una mayor conciencia sobre los propios hábitos de salud (Galmes-Panades & Vidal-Conti, 2020; Perea-Caballero et al., 2019).",
            omsText: "Mantenerse activo no significa solamente realizar ejercicio; también es importante reducir el tiempo que permanecemos sentados durante el día. Por ello, combinar la práctica de actividad física con pausas y movimiento durante las jornadas académicas puede contribuir a disminuir los efectos asociados al sedentarismo (Perea-Caballero et al., 2019).",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - 2.1 Benefits of Physical Activity",
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
            lessonTitle: "2.1 Benefits of Physical Activity",
            audioLabel: "Listen to audio description",
            audioSrc: "Audios/audio-7-en.mp3",
            mainDesc: "Regular physical activity contributes to health care, improves physical fitness, and promotes a healthy body composition. In university students, it can also provide psychological and social benefits, in addition to promoting overall well-being and greater awareness of one's own health habits (Galmes-Panades & Vidal-Conti, 2020; Perea-Caballero et al., 2019).",
            omsText: "Staying active does not only mean exercising; it is also important to reduce the amount of time spent sitting during the day. Therefore, combining physical activity with movement breaks during academic days can help reduce the effects associated with a sedentary lifestyle (Perea-Caballero et al., 2019).",
            btnPrev: "Previous",
            btnNext: "Next"
        }
    };

    // Función de actualización de idioma y persistencia
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        document.title = translations[lang].pageTitle;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Actualizar la fuente del audio dinámicamente según el idioma
        if (heroAudio && translations[lang].audioSrc) {
            const wasPlaying = !heroAudio.paused;
            heroAudio.src = translations[lang].audioSrc;
            heroAudio.load();
            
            if (wasPlaying) {
                heroAudio.play().catch(error => console.log("Autoplay bloqueado por el navegador:", error));
            }
        }

        // Sincronizar el estado visual de los botones
        if (btnEs && btnEn) {
            if (lang === 'es') {
                btnEs.classList.add('active');
                btnEn.classList.remove('active');
            } else {
                btnEn.classList.add('active');
                btnEs.classList.remove('active');
            }
        }

        // GUARDAR LA PREFERENCIA EN LOCALSTORAGE
        localStorage.setItem('preferredLang', lang);
    }

    // 1. CARGAR IDIOMA PREVIAMENTE SELECCIONADO AL INICIAR ESTA SECCIÓN
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    changeLanguage(savedLang);

    // Eventos del conmutador ES/EN
    if (btnEs) {
        btnEs.addEventListener('click', () => {
            changeLanguage('es');
        });
    }

    if (btnEn) {
        btnEn.addEventListener('click', () => {
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