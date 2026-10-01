document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. DICCIONARIO DE TRADUCCIONES (i18n)
    // -------------------------------------------------------------
    const translations = {
        es: {
            logoText: '<span class="blue">Mente</span><span class="green">Sana</span>',
            navHome: 'Inicio',
            mod1Small: 'Módulo 1',
            mod1Title: 'Sueño',
            mod2Small: 'Módulo 2',
            mod2Title: 'Actividad física',
            mod3Small: 'Módulo 3',
            mod3Title: 'Alimentación',
            mod4Small: 'Módulo 4',
            mod4Title: 'Bienestar emocional',
            mod5Small: 'Módulo 5',
            mod5Title: 'Hábitos digitales',
            navQuiz: 'Actividad de aprendizaje',
            navProgress: 'Mi progreso',
            navCredits: 'Créditos',
            quizTitle: 'Actividad de aprendizaje',
            audioLabel: 'Escuchar descripción en audio',
            quizIntro: 'Lee cuidadosamente cada pregunta y selecciona una sola respuesta entre las opciones disponibles. Elige la alternativa que consideres correcta según la información presentada en los módulos sobre hábitos saludables.',
            
            // Preguntas
            q1Label: 'Pregunta 1:',
            q1Text: '¿Cuál es una de las principales razones por las que dormir adecuadamente es importante para los estudiantes universitarios?',
            q1OptA: 'Permite eliminar completamente el estrés académico',
            q1OptB: 'Evita la necesidad de realizar actividad física',
            q1OptC: 'Favorece la atención y el funcionamiento cerebral',
            q1OptD: 'Aumenta el tiempo disponible para estudiar',

            q2Label: 'Pregunta 2:',
            q2Text: '¿Cuál de las siguientes acciones corresponde a una estrategia para mantenerse activo durante la jornada académica?',
            q2OptA: 'Establecer metas realistas de actividad física',
            q2OptB: 'Permanecer sentado durante largos períodos',
            q2OptC: 'Evitar variar los tipos de ejercicio',
            q2OptD: 'Realizar actividad física únicamente durante los fines de semana',

            q3Label: 'Pregunta 3:',
            q3Text: 'Según los principios de una alimentación saludable presentados, ¿qué opción representa una recomendación adecuada?',
            q3OptA: 'Consumir alimentos de un solo grupo',
            q3OptB: 'Consumir ultra procesados con mayor frecuencia',
            q3OptC: 'Eliminar completamente todos los alimentos con grasas',
            q3OptD: 'Preferir el agua como bebida habitual',

            q4Label: 'Pregunta 4:',
            q4Text: '¿Cuál de las siguientes acciones se recomienda para gestionar el estrés académico?',
            q4OptA: 'Aislarse de las demás personas',
            q4OptB: 'Ignorar las dificultades académicas',
            q4OptC: 'Planificar tareas y fechas de entrega',
            q4OptD: 'Evitar hablar sobre las preocupaciones',

            q5Label: 'Pregunta 5:',
            q5Text: '¿Cuál de las siguientes acciones forma parte de una rutina saludable frente al uso de pantallas?',
            q5OptA: 'Establecer momentos de desconexión de las pantallas',
            q5OptB: 'Permanecer sentado durante toda la jornada académica',
            q5OptC: 'Evitar todas las pausas durante el estudio',
            q5OptD: 'Mantener el uso recreativo de dispositivos antes de dormir',

            q6Label: 'Pregunta 6:',
            q6Text: '¿Qué se recomienda hacer con las siestas para evitar interferir con el sueño nocturno?',
            q6OptA: 'Realizarlas durante varias horas en la tarde',
            q6OptB: 'Hacerlas breves y evitar realizarlas muy tarde',
            q6OptC: 'Evitarlas siempre, incluso cuando sean necesarias',
            q6OptD: 'Realizarlas justo antes de la hora de dormir',

            q7Label: 'Pregunta 7:',
            q7Text: '¿Cuál es una recomendación para cuidar la vista durante las jornadas frente a pantallas?',
            q7OptA: 'Mantener la mirada fija en la pantalla durante todo el estudio',
            q7OptB: 'Aumentar el brillo de la pantalla constantemente',
            q7OptC: 'Realizar pausas periódicas y cambiar el enfoque de la mirada',
            q7OptD: 'Evitar levantarse hasta terminar todas las actividades',

            // Botones e interfaz
            btnVerify: 'Verificar',
            btnRetry: 'Reintentar',
            btnPrev: 'Anterior',
            btnNext: 'Siguiente',

            // Mensajes dinámicos
            feedbackSelect: 'Por favor, selecciona una opción antes de verificar.',
            feedbackCorrect: '¡Correcto! Has seleccionado la respuesta acertada.',
            feedbackIncorrect: 'Incorrecto. Intenta de nuevo haciendo clic en Reintentar.'
        },
        en: {
            logoText: '<span class="blue">Mente</span><span class="green">Sana</span>',
            navHome: 'Home',
            mod1Small: 'Module 1',
            mod1Title: 'Sleep',
            mod2Small: 'Module 2',
            mod2Title: 'Physical Activity',
            mod3Small: 'Module 3',
            mod3Title: 'Nutrition',
            mod4Small: 'Module 4',
            mod4Title: 'Emotional Well-being',
            mod5Small: 'Module 5',
            mod5Title: 'Digital Habits',
            navQuiz: 'Learning Activity',
            navProgress: 'My Progress',
            navCredits: 'Credits',
            quizTitle: 'Learning Activity',
            audioLabel: 'Listen to description in audio',
            quizIntro: 'Read each question carefully and select a single answer among the available options. Choose the alternative you consider correct based on the information presented in the healthy habits modules.',

            q1Label: 'Question 1:',
            q1Text: 'What is one of the main reasons why getting adequate sleep is important for college students?',
            q1OptA: 'It allows complete elimination of academic stress',
            q1OptB: 'It avoids the need for physical activity',
            q1OptC: 'It promotes attention and brain function',
            q1OptD: 'It increases the available time to study',

            q2Label: 'Question 2:',
            q2Text: 'Which of the following actions corresponds to a strategy to stay active during the academic day?',
            q2OptA: 'Set realistic physical activity goals',
            q2OptB: 'Remain seated for long periods',
            q2OptC: 'Avoid varying the types of exercise',
            q2OptD: 'Engage in physical activity only during weekends',

            q3Label: 'Question 3:',
            q3Text: 'According to the principles of healthy eating presented, which option represents a proper recommendation?',
            q3OptA: 'Consume foods from a single food group',
            q3OptB: 'Consume ultra-processed foods more frequently',
            q3OptC: 'Completely eliminate all foods containing fats',
            q3OptD: 'Prefer water as a regular beverage',

            q4Label: 'Question 4:',
            q4Text: 'Which of the following actions is recommended to manage academic stress?',
            q4OptA: 'Isolate yourself from other people',
            q4OptB: 'Ignore academic difficulties',
            q4OptC: 'Plan tasks and delivery dates',
            q4OptD: 'Avoid talking about concerns',

            q5Label: 'Question 5:',
            q5Text: 'Which of the following actions is part of a healthy screen time routine?',
            q5OptA: 'Set moments to disconnect from screens',
            q5OptB: 'Remain seated throughout the entire academic day',
            q5OptC: 'Avoid all breaks during study time',
            q5OptD: 'Maintain recreational use of devices before sleeping',

            q6Label: 'Question 6:',
            q6Text: 'What is recommended regarding naps to avoid interfering with nighttime sleep?',
            q6OptA: 'Take them for several hours in the afternoon',
            q6OptB: 'Keep them short and avoid taking them too late',
            q6OptC: 'Always avoid them, even when necessary',
            q6OptD: 'Take them right before bedtime',

            q7Label: 'Question 7:',
            q7Text: 'What is a recommendation to care for your eyesight during screen sessions?',
            q7OptA: 'Keep your gaze fixed on the screen throughout the study session',
            q7OptB: 'Constantly increase screen brightness',
            q7OptC: 'Take periodic breaks and change your visual focus',
            q7OptD: 'Avoid getting up until finishing all activities',

            btnVerify: 'Verify',
            btnRetry: 'Retry',
            btnPrev: 'Previous',
            btnNext: 'Next',

            feedbackSelect: 'Please select an option before verifying.',
            feedbackCorrect: 'Correct! You have selected the right answer.',
            feedbackIncorrect: 'Incorrect. Try again by clicking Retry.'
        }
    };

    let currentLang = 'es';

    // -------------------------------------------------------------
    // 2. CAMBIO DE IDIOMA E INTERNACIONALIZACIÓN (i18n)
    // -------------------------------------------------------------
    const btnEs = document.getElementById("btn-es");
    const btnEn = document.getElementById("btn-en");

    function setLanguage(lang) {
        currentLang = lang;

        if (btnEs && btnEn) {
            btnEs.classList.toggle("active", lang === "es");
            btnEn.classList.toggle("active", lang === "en");
        }

        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        for (let i = 1; i <= 7; i++) {
            const feedback = document.getElementById(`feedback-${i}`);
            if (feedback && feedback.style.display !== "none" && feedback.textContent !== "") {
                if (feedback.classList.contains("correct")) {
                    feedback.textContent = translations[lang].feedbackCorrect;
                } else if (feedback.classList.contains("incorrect")) {
                    if (feedback.getAttribute("data-reason") === "select") {
                        feedback.textContent = translations[lang].feedbackSelect;
                    } else {
                        feedback.textContent = translations[lang].feedbackIncorrect;
                    }
                }
            }
        }
    }

    if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // -------------------------------------------------------------
    // 3. RESPONSIVIDAD (MENÚ HAMBURGUESA)
    // -------------------------------------------------------------
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    const navItems = document.querySelectorAll(".sidebar-nav .nav-item");

    function toggleMenu() {
        if (sidebar && overlay) {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");
        }
    }

    function closeMenu() {
        if (sidebar && overlay) {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        }
    }

    if (menuToggle) menuToggle.addEventListener("click", toggleMenu);
    if (overlay) overlay.addEventListener("click", closeMenu);

    navItems.forEach(item => {
        item.addEventListener("click", closeMenu);
    });

    // -------------------------------------------------------------
    // 4. PERSISTENCIA DE SESIÓN (GUARDAR Y CARGAR RESPUESTAS)
    // -------------------------------------------------------------
    function getQuizState() {
        return JSON.parse(sessionStorage.getItem('quizAnswersState')) || {};
    }

    function saveQuizState(state) {
        sessionStorage.setItem('quizAnswersState', JSON.stringify(state));
    }

    function loadSavedAnswers() {
        const state = getQuizState();
        
        for (let qNum = 1; qNum <= 7; qNum++) {
            const qData = state[`q${qNum}`];
            if (!qData) continue;

            const card = document.querySelector(`.question-card[data-question="${qNum}"]`);
            if (!card) continue;

            if (qData.selectedValue) {
                const radioToSelect = card.querySelector(`input[name="q${qNum}"][value="${qData.selectedValue}"]`);
                if (radioToSelect) {
                    radioToSelect.checked = true;
                    const parentLabel = radioToSelect.closest('.option-item');
                    if (parentLabel) parentLabel.classList.add('selected');
                }
            }

            if (qData.verified) {
                const radios = card.querySelectorAll(`input[name="q${qNum}"]`);
                radios.forEach(r => r.disabled = true);

                const options = card.querySelectorAll('.option-item');
                options.forEach(opt => {
                    const input = opt.querySelector('input');
                    if (input.hasAttribute('data-correct') || input.getAttribute('data-correct') === "true") {
                        opt.classList.add('correct');
                    } else if (input.checked) {
                        opt.classList.add('incorrect');
                    }
                });

                const feedback = document.getElementById(`feedback-${qNum}`);
                if (feedback) {
                    feedback.style.display = "block";
                    if (qData.isCorrect) {
                        feedback.textContent = translations[currentLang].feedbackCorrect;
                        feedback.className = "feedback-message correct";
                    } else {
                        feedback.textContent = translations[currentLang].feedbackIncorrect;
                        feedback.className = "feedback-message incorrect";
                    }
                }
            }
        }
    }

    const optionLabels = document.querySelectorAll(".option-item");
    optionLabels.forEach(label => {
        label.addEventListener("click", function() {
            const radio = this.querySelector('input[type="radio"]');
            if (radio && !radio.disabled) {
                const groupName = radio.name;
                document.querySelectorAll(`input[name="${groupName}"]`).forEach(r => {
                    const parent = r.closest('.option-item');
                    if (parent) parent.classList.remove('selected');
                });
                this.classList.add('selected');

                const state = getQuizState();
                if (!state[groupName]) state[groupName] = {};
                state[groupName].selectedValue = radio.value;
                saveQuizState(state);
            }
        });
    });

    // -------------------------------------------------------------
    // 5. VERIFICACIÓN Y REINTENTO DE PREGUNTAS
    // -------------------------------------------------------------
    window.verifyQuestion = function(questionNum) {
        const card = document.querySelector(`.question-card[data-question="${questionNum}"]`);
        if (!card) return;

        const selectedRadio = card.querySelector(`input[name="q${questionNum}"]:checked`);
        const feedback = document.getElementById(`feedback-${questionNum}`);
        const options = card.querySelectorAll('.option-item');

        if (!selectedRadio) {
            if (feedback) {
                feedback.textContent = translations[currentLang].feedbackSelect;
                feedback.className = "feedback-message incorrect";
                feedback.setAttribute("data-reason", "select");
                feedback.style.display = "block";
            }
            return;
        }

        const isCorrect = selectedRadio.hasAttribute('data-correct') || selectedRadio.getAttribute('data-correct') === "true";

        const radios = card.querySelectorAll(`input[name="q${questionNum}"]`);
        radios.forEach(r => r.disabled = true);

        options.forEach(opt => {
            const input = opt.querySelector('input');
            if (input.hasAttribute('data-correct') || input.getAttribute('data-correct') === "true") {
                opt.classList.add('correct');
            } else if (input.checked) {
                opt.classList.add('incorrect');
            }
        });

        if (feedback) {
            feedback.style.display = "block";
            if (isCorrect) {
                feedback.textContent = translations[currentLang].feedbackCorrect;
                feedback.className = "feedback-message correct";
                feedback.removeAttribute("data-reason");
            } else {
                feedback.textContent = translations[currentLang].feedbackIncorrect;
                feedback.className = "feedback-message incorrect";
                feedback.removeAttribute("data-reason");
            }
        }

        const state = getQuizState();
        state[`q${questionNum}`] = {
            selectedValue: selectedRadio.value,
            verified: true,
            isCorrect: isCorrect
        };
        saveQuizState(state);
    };

    window.retryQuestion = function(questionNum) {
        const card = document.querySelector(`.question-card[data-question="${questionNum}"]`);
        if (!card) return;

        const radios = card.querySelectorAll(`input[name="q${questionNum}"]`);
        const options = card.querySelectorAll('.option-item');
        const feedback = document.getElementById(`feedback-${questionNum}`);

        radios.forEach(r => {
            r.checked = false;
            r.disabled = false;
        });

        options.forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
        });

        if (feedback) {
            feedback.textContent = "";
            feedback.className = "feedback-message";
            feedback.style.display = "none";
            feedback.removeAttribute("data-reason");
        }

        const state = getQuizState();
        delete state[`q${questionNum}`];
        saveQuizState(state);
    };

    loadSavedAnswers();
});