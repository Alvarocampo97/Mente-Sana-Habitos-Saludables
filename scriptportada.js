document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    const btnComenzar = document.getElementById('btn-comenzar');

    // Diccionario de traducciones
    const translations = {
        es: {
            pageTitle: "MenteSana - Hábitos Saludables",
            logoText: '<span class="blue">Mente</span><span class="green">Sana</span>',
            mainTitle: '<span class="blue">Mente</span><span class="green">Sana</span>',
            subtitle: "Hábitos saludables para una mejor vida universitaria",
            description: "Explora, aprende y pon en práctica hábitos que mejoran tu bienestar físico, mental, académico y digital.",
            btnComenzar: "Comenzar",
            audioLabel: "Escuchar descripción en audio",
            imgAlt: "Estudiante universitaria trabajando en laptop"
        },
        en: {
            pageTitle: "HealthyMind - Healthy Habits",
            logoText: '<span class="blue">Healthy</span><span class="green">Mind</span>',
            mainTitle: '<span class="blue">Healthy</span><span class="green">Mind</span>',
            subtitle: "Healthy habits for a better university life",
            description: "Explore, learn, and practice habits that improve your physical, mental, academic, and digital well-being.",
            btnComenzar: "Get Started",
            audioLabel: "Listen to audio description",
            imgAlt: "University student working on laptop"
        }
    };

    // Función para actualizar el contenido del DOM según el idioma elegido
    function changeLanguage(lang) {
        document.documentElement.lang = lang;
        document.title = translations[lang].pageTitle;

        // Recorrer elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Si la traducción contiene etiquetas HTML (como spans con colores), usar innerHTML
                element.innerHTML = translations[lang][key];
            }
        });

        // Actualizar atributos adicionales
        const heroImg = document.getElementById('hero-img');
        if (heroImg) {
            heroImg.alt = translations[lang].imgAlt;
        }
    }

    // Eventos de selección de idioma
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

    btnComenzar.addEventListener('click', () => {
        console.log("Iniciando la experiencia de MenteSana...");
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