/* ==========================================
    ANIMACIONES DEL SITIO
========================================== */
export function initScrollAnimations() {
    // Seleccionamos todas las tarjetas o elementos que quieras animar
    const animatedElements = document.querySelectorAll(".section-card, .subsection-card, .card");
    if (animatedElements.length === 0) return;
    const observerOptions = {
        root: null, // Usa el viewport del navegador
        rootMargin: "0px 0px -50px 0px", // Activa la animación un poquito antes de llegar al borde inferior
        threshold: 0.1, // Se dispara cuando el 10% del elemento es visible
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Añade la clase que activa la transición en CSS
                entry.target.classList.add("animated");
                // Dejamos de observarlo una vez que ya apareció para optimizar rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    // Ponemos a cada tarjeta bajo supervisión del observer
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}
