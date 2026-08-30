/* ==========================================
    BANNERS / READING-PROGRESS-BAR
   ========================================== */

export function initBanners() {
    // Header Fijo e Indicador de Progreso de Lectura - Mide la altura del scroll y calcula el porcentaje
    window.addEventListener('scroll', () => {
        const bar = document.getElementById('progress-bar');
        if (!bar) return;
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        bar.style.width = scrolled + '%';
    });
    // JS: Añade la clase .scrolled al pasar los 20px de scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header-main');
        if (header) {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    // Banner de sin conexión a internet (offline toast)
    function asegurarBannerOffline() {
        let banner = document.getElementById('offline-banner');
        if (!banner) {
            banner = document.createElement('div');
            banner.id = 'offline-banner';
            banner.className = 'offline-banner';
            banner.textContent = '⚠️ Sin conexión a internet. Mostrando versión guardada.';
            document.body.prepend(banner);
        }
        return banner;
    }
    window.addEventListener('offline', () => {
        const banner = asegurarBannerOffline();
        banner.classList.add('visible');
    });
    window.addEventListener('online', () => {
        const banner = document.getElementById('offline-banner');
        if (banner) banner.classList.remove('visible');
    });
} 