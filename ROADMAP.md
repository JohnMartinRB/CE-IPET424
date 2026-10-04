## 🗺️ Roadmap de Desarrollo

> **Planificación de versiones y ciclo de vida del Portal Institucional**
> **Fecha de Lanzamiento Oficial v1.0:** 9 de marzo de 2027 🚀

---

## 🟡 Fase 1: Ciclo Alpha (Versiones v0.26 - v0.39)

_Enfoque: Arquitectura base, modularización, sistema de temas, accesibilidad y componentes interactivos._

### 📦 Historial Reciente (Completado)

- [x] **v0.26 - Feedback Sonoro (UI Sound Effects)**
    - Implementación de motor de audio ligero en JavaScript para interacciones de interfaz.
    - Sonidos para switches (modo oscuro/claro), clics en botones principales y apertura de modales.
    - Control de activación/desactivación de sonido con persistencia en `localStorage`.

- [x] **v0.27 - Sistema de Novedades (What's New Modal)**
    - Ventana emergente (modal/toast) interactiva al detectar una actualización de versión.
    - Lectura dinámica del _changelog_ para mostrar las últimas mejoras al usuario al ingresar al sitio.

- [x] **v0.28 - Arquitectura CSS & Rework de Variables**
    - Expansión de `variables.css` para crear un sistema completo de _Design Tokens_.
    - Estandarización de variables para `padding`, `margin`, `gap`, `border-radius`, escalas tipográficas y tiempos de transición.
    - Refactorización de reglas eliminando valores estáticos (_hardcodeados_).

- [x] **v0.29 - Suite de Accesibilidad Ampliada & Refactorización Modular (Septiembre 2026)**
    - Implementación de controles para ajustar el tamaño del texto (+ / -), alto contraste y fuente para dislexia.
    - Mejoras en la navegación por teclado (`:focus-visible`) y atributos ARIA.
    - **Rework de estructura de archivos y carpetas:** Separación del CSS en arquitectura modular (`base/`, `layout/`, `components/`, `pages/`) unificados por un punto de entrada principal.

- [x] **v0.30 - Aside con Widget de Datos Curiosos & Documentación MD (Septiembre 2026)**
    - Panel lateral desplegable (_aside drawer_) dedicado exclusivamente al widget interactivo "Sabías qué..." con datos curiosos e historia del IPET N° 424.
    - Adición de nuevos archivos `.md` en la raíz para la documentación completa del repositorio y estándar del proyecto.

---

### 🚧 Versiones Alpha en Desarrollo y Próximas

- [ ] **v0.31 - Rediseño de Paleta Base: Tonos Calipso & Tokens Temáticos (Octubre 2026)**
    - Incorporación de los tonos **Calipso** a la paleta de colores cromática principal del sitio.
    - Creación de variables CSS específicas (`--color-theme-*`) para la gestión limpia de temas (Alto Contraste, Modo Code, Daltonismo, etc.).

- [ ] **v0.32 - Menú Hamburguesa Mobile & Panel de Configuración (Octubre 2026)**
    - Implementación de menú de navegación colapsable (_hamburguesa_) pensado para dispositivos móviles.
    - Creación de modal/panel emergente de **Configuración** para centralizar controles de audio, temas y accesibilidad.

- [ ] **v0.33 - Historial Completo en Changelog & Integración Institucional (Octubre 2026)**
    - Ampliación del visor de _Changelog_ para permitir explorar el historial histórico completo de versiones desde los inicios.
    - Vinculación institucional mediante `iframe` interactivo / redirección optimizada hacia la página oficial del colegio.

- [ ] **v0.34 - Tema Estacional: Halloween 2026 (Semana del 31 de Octubre de 2026)**
    - Motor de temas temporales: activación automática de paleta de colores, decoraciones e interacciones visuales por la Semana de Halloween.

- [ ] **v0.35 - Tema Estacional: Navideño 2026 (Semana de Navidad - Diciembre 2026)**
    - Paleta festiva, efectos visuales de temporada y saludo institucional del Centro de Estudiantes para el fin del ciclo lectivo.

- [ ] **v0.36 - Tema Estacional: Verano 2027 (4 de Enero de 2027)**
    - Aplicación del tema de receso estival/verano para el portal escolar durante las vacaciones.

---

## 🔵 Fase 2: Ciclo Beta (Versiones v0.40 - v0.85)

_Enfoque: Carga de contenido institucional real, participación estudiantil y pruebas con alumnos._
_Período: Mediados de Enero de 2027 a Febrero de 2027_

- [ ] **v0.40 - Integración de Contenido Real Institucional (Enero 2027)**
    - Reemplazo de textos de prueba (_Lorem Ipsum_) por información verídica del IPET N° 424: talleres, especialidades, autoridades, horarios y reglamentos.

- [ ] **v0.50 - Módulo de Feedback Estudiantil & Encuestas (Enero 2027)**
    - Formulario e interfaz interactiva para la recolección de opiniones, sugerencias y consultas de los alumnos hacia el Centro de Estudiantes.

- [ ] **v0.70 - Pruebas de Usabilidad & Control de Calidad (Febrero 2027)**
    - Despliegue de versiones Beta cerradas con el alumnado para auditar la experiencia de usuario (UX) en celulares y computadoras de la escuela.

---

## 🟢 Fase 3: Pre-Lanzamiento y Versión Oficial (v0.90 - v1.0)

_Enfoque: Rendimiento extremo, SEO, capacidades PWA offline y publicación final._
_Período: Finales de Febrero de 2027 a Marzo de 2027_

- [ ] **v0.90 - Modo Off-Line & Optimización PWA (Febrero 2027)**
    - Registro de _Service Worker_ (`sw.js`) para garantizar el funcionamiento del sitio sin conexión en zonas del colegio con baja cobertura.
    - Configuración de `manifest.json` y almacenamiento en caché local para permitir la instalación de la web como app nativa en Android/iOS/PC.

- [ ] **v0.95 - Optimización SEO, Indexación & Metadatos OpenGraph (Febrero 2027)**
    - Creación de `sitemap.xml`, `robots.txt` y verificación en Google Search Console.
    - Implementación completa de etiquetas OpenGraph y Twitter Cards para vistas previas en WhatsApp y redes sociales.
    - Auditoría de rendimiento con Google Lighthouse (puntuación objetivo > 90 en Performance, Accesibilidad y SEO).

- [ ] **v1.0 - LANZAMIENTO OFICIAL (9 de Marzo de 2027) 🎓🎉**
    - Despliegue de la versión estable final para el inicio del Ciclo Lectivo 2027.
    - Presentación pública del Portal Web del Centro de Estudiantes a la comunidad educativa del IPET N° 424.
