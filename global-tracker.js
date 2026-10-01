document.addEventListener("DOMContentLoaded", () => {
    // Páginas válidas del sitio
    const validPages = [
        "seccionmenu.html",
        "modulo1.html", "modulo1_1.html", "modulo1_2.html",
        "modulo2.html", "modulo2_1.html", "modulo2_2.html",
        "modulo3.html", "modulo3_1.html", "modulo3_2.html",
        "modulo4.html", "modulo4_1.html", "modulo4_2.html",
        "modulo5.html", "modulo5_1.html", "modulo5_2.html",
        "actividad.html", "progreso.html", "creditos.html"
    ];

    function trackCurrentPage() {
        // Obtener el nombre del archivo actual (si es la raíz o vacío, asigna 'seccionmenu.html')
        let currentPage = window.location.pathname.split('/').pop();
        if (!currentPage || currentPage === "") {
            currentPage = "seccionmenu.html";
        }

        // Si la página actual pertenece a la lista del sitio, la guarda en sessionStorage
        if (validPages.includes(currentPage)) {
            let visitedPages = JSON.parse(sessionStorage.getItem('visitedPages')) || [];
            if (!visitedPages.includes(currentPage)) {
                visitedPages.push(currentPage);
                sessionStorage.setItem('visitedPages', JSON.stringify(visitedPages));
            }
        }
    }

    trackCurrentPage();
});