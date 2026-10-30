document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const btnComenzar = document.getElementById('btn-comenzar');
    const heroAudio = document.getElementById('hero-audio');

    // Diccionario de traducciones (respetando los nombres exactos de tus archivos)
    const translations = {
        es: {
            pageTitle: "MenteSana - Hábitos Saludables",
            logoText: '<span class="blue">Mente</span><span class="green">Sana</span>',
            mainTitle: '<span class="blue">Mente</span><span class="green">Sana</span>',
            subtitle: "Hábitos saludables para una mejor vida universitaria",
            description: "Explora, aprende y pon en práctica hábitos que mejoran tu bienestar físico, mental, académico y digital.",
            btnComenzar: "Comenzar",
            audioLabel: "Escuchar descripción en audio",
            imgAlt: "Estudiante universitaria trabajando en laptop",
            audioSrc: "Audios/Audio 1.mp3"
        },
        en: {
            pageTitle: "HealthyMind - Healthy Habits",
            logoText: '<span class="blue">Healthy</span><span class="green">Mind</span>',
            mainTitle: '<span class="blue">Healthy</span><span class="green">Mind</span>',
            subtitle: "Healthy habits for a better university life",
            description: "Explore, learn, and practice habits that improve your physical, mental, academic, and digital well-being.",
            btnComenzar: "Get Started",
            audioLabel: "Listen to audio description",
            imgAlt: "University student working on laptop",
            audioSrc: "Audios/audio-1-en.mp3"
        }
    };

    // Función para actualizar el contenido del DOM según el idioma elegido
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        document.title = translations[lang].pageTitle;

        // Recorrer elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Actualizar atributos adicionales
        const heroImg = document.getElementById('hero-img');
        if (heroImg) {
            heroImg.alt = translations[lang].imgAlt;
        }

        // Actualizar la fuente del audio dinámicamente según el idioma
        if (heroAudio && translations[lang].audioSrc) {
            const wasPlaying = !heroAudio.paused; // Detecta si el usuario lo estaba reproduciendo
            heroAudio.src = translations[lang].audioSrc;
            heroAudio.load(); // Carga el nuevo archivo de audio
            
            if (wasPlaying) {
                heroAudio.play().catch(error => console.log("Autoplay bloqueado por el navegador:", error));
            }
        }

        // Sincronizar el estado visual de los botones de idioma
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

    // APLICAR IDIOMA GUARDADO AL CARGAR LA PÁGINA
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    changeLanguage(savedLang);

    // Eventos de selección de idioma
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

    if (btnComenzar) {
        btnComenzar.addEventListener('click', () => {
            console.log("Iniciando la experiencia de MenteSana...");
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