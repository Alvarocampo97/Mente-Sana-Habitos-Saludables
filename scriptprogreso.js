document.addEventListener('DOMContentLoaded', () => {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const resetBtn = document.getElementById('reset-btn');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    }

    const TOTAL_PAGES = 19;

    const pagesInfo = [
        { id: "seccionmenu.html", name: { es: "Inicio", en: "Home" } },
        { id: "modulo1.html", name: { es: "Módulo 1", en: "Module 1" } },
        { id: "modulo1_1.html", name: { es: "Módulo 1.1", en: "Module 1.1" } },
        { id: "modulo1_2.html", name: { es: "Módulo 1.2", en: "Module 1.2" } },
        { id: "modulo2.html", name: { es: "Módulo 2", en: "Module 2" } },
        { id: "modulo2_1.html", name: { es: "Módulo 2.1", en: "Module 2.1" } },
        { id: "modulo2_2.html", name: { es: "Módulo 2.2", en: "Module 2.2" } },
        { id: "modulo3.html", name: { es: "Módulo 3", en: "Module 3" } },
        { id: "modulo3_1.html", name: { es: "Módulo 3.1", en: "Module 3.1" } },
        { id: "modulo3_2.html", name: { es: "Módulo 3.2", en: "Module 3.2" } },
        { id: "modulo4.html", name: { es: "Módulo 4", en: "Module 4" } },
        { id: "modulo4_1.html", name: { es: "Módulo 4.1", en: "Module 4.1" } },
        { id: "modulo4_2.html", name: { es: "Módulo 4.2", en: "Module 4.2" } },
        { id: "modulo5.html", name: { es: "Módulo 5", en: "Module 5" } },
        { id: "modulo5_1.html", name: { es: "Módulo 5.1", en: "Module 5.1" } },
        { id: "modulo5_2.html", name: { es: "Módulo 5.2", en: "Module 5.2" } },
        { id: "actividad.html", name: { es: "Actividad de Aprendizaje", en: "Learning Activity" } },
        { id: "progreso.html", name: { es: "Mi Progreso", en: "My Progress" } },
        { id: "creditos.html", name: { es: "Créditos", en: "Credits" } }
    ];

    let currentLang = 'es';

    function updateProgressUI() {
        const visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || [];

        const pagesCount = Math.min(visitedPages.length, TOTAL_PAGES);
        const pagesPercent = Math.round((pagesCount / TOTAL_PAGES) * 100);

        const percentEl = document.getElementById('pages-percent');
        const countEl = document.getElementById('pages-count');
        const circleEl = document.getElementById('pages-circle');

        if (percentEl) percentEl.innerText = `${pagesPercent}%`;
        if (countEl) countEl.innerText = `${pagesCount} ${currentLang === 'es' ? 'de' : 'of'} ${TOTAL_PAGES} ${currentLang === 'es' ? 'páginas' : 'pages'}`;
        if (circleEl) circleEl.setAttribute('stroke-dasharray', `${pagesPercent}, 100`);

        const pagesListEl = document.getElementById('pages-summary-list');
        if (pagesListEl) {
            pagesListEl.innerHTML = '';
            pagesInfo.forEach(page => {
                const isVisited = visitedPages.includes(page.id);
                const li = document.createElement('li');
                li.className = `summary-item ${isVisited ? 'completed' : 'pending'}`;
                li.innerHTML = `
                    <span>${page.name[currentLang]}</span>
                    <span class="status-badge ${isVisited ? 'done' : 'todo'}">
                        <i class="fa-solid ${isVisited ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
                        ${isVisited ? (currentLang === 'es' ? 'Realizado' : 'Completed') : (currentLang === 'es' ? 'Pendiente' : 'Pending')}
                    </span>
                `;
                pagesListEl.appendChild(li);
            });
        }
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            const confirmMsg = currentLang === 'es' 
                ? '¿Estás seguro de que deseas reiniciar todo tu progreso?' 
                : 'Are you sure you want to reset all your progress?';
                
            if (confirm(confirmMsg)) {
                sessionStorage.removeItem('visitedPages');
                sessionStorage.removeItem('quizAnswersState');
                
                // Vuelve a registrar la página actual de progreso
                let visitedPages = ['progreso.html'];
                sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
                updateProgressUI();
            }
        });
    }

    const translations = {
        es: {
            pageTitle: "MenteSana - Mi progreso",
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
            welcomeTitle: "Mi progreso",
            welcomeSubtitle: "Este es el resumen de lo que haz logrado alcanzar durante todo el recorrido de este recurso educativo.",
            audioLabel: "Escuchar descripción en audio",
            pagesProgressTitle: "Progreso de navegación",
            btnReset: "Reiniciar mi progreso",
            pagesSummaryTitle: "Resumen de Navegación",
            btnPrev: "Anterior",
            btnNext: "Siguiente"
        },
        en: {
            pageTitle: "HealthyMind - My Progress",
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
            welcomeTitle: "My Progress",
            welcomeSubtitle: "This is a summary of what you have achieved throughout this educational resource.",
            audioLabel: "Listen to audio description",
            pagesProgressTitle: "Navigation Progress",
            btnReset: "Reset my progress",
            pagesSummaryTitle: "Navigation Summary",
            btnPrev: "Previous",
            btnNext: "Next"
        }
    };

    function changeLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.title = translations[lang].pageTitle;

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        updateProgressUI();
    }

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

    updateProgressUI();
});