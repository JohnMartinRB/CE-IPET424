## 🗺️ Roadmap de Desarrollo

> **Planificación de versiones y ciclo de vida del Portal Institucional**
> **Fecha de Lanzamiento Oficial v1.0:** 9 de marzo de 2027 🚀

---

## 🟡 Fase 3: Ciclo Alpha (Versiones v0.26 - v0.30)

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

- [x] **v0.29 - Suite de Accesibilidad Ampliada & Refactorización Modular**
    - Implementación de controles para ajustar el tamaño del texto (+ / -), alto contraste y fuente para dislexia.
    - Mejoras en la navegación por teclado (`:focus-visible`) y atributos ARIA.
    - **Rework de estructura de archivos y carpetas:** Separación del CSS en arquitectura modular (`base/`, `layout/`, `components/`, `pages/`) unificados por un punto de entrada principal.

- [x] **v0.30 - Aside con Widget de Datos Curiosos & Documentación MD**
    - Panel lateral desplegable (_aside drawer_) dedicado exclusivamente al widget interactivo "Sabías qué..." con datos curiosos e historia del IPET N° 424.
    - Adición de nuevos archivos `.md` en la raíz para la documentación completa del repositorio y estándar del proyecto.

---

### 🚧 Fase 3: Ciclo Alpha (Versiones v0.31 - v0.40)

- [x] **v0.31.0-alpha - Consolidación de Nombres e Interfaz Base**
    - Adaptación completa de las subpáginas al español y ampliación de tarjetas principales.
    - Reorganización y optimización de la pantalla de carga (_loader_) dinámica según la subpágina.

- [x] **v0.32.0-alpha - Rediseño Estructural del Footer**
    - Reorganización del pie de página en un esquema limpio de tres columnas (Identidad, Contacto, Proyecto).
    - Estandarización de tipografías, variables de color e incorporación de efectos en el modo interactivo.

- [x] **v0.33.0-alpha - Módulos Interactivos en Aside de Novedades**
    - Incorporación de widgets dinámicos para próximos feriados y frase diaria aleatoria mediante fuentes JSON externas.
    - Integración de un modal para compartir el sitio en redes sociales y nuevos atajos de teclado.

- [x] **v0.34.0-alpha - Nuevas Subpáginas Institucionales**
    - Creación y despliegue inicial de las subpáginas _Recursos_ (descargas), _Escuela_ y _Herramientas_.
    - Implementación de persistencia en `localStorage` para el estado abierto/cerrado de los paneles laterales (_asides_).

- [x] **v0.35.0-alpha - Seguridad Legal y Términos de Uso**
    - Adición de la subpágina de Términos y Condiciones junto a un modal de aceptación obligatoria al ingreso.
    - Integración del enlace legal en el footer corporativo.

- [x] **v0.36.0-alpha - Sistema Dinámico de Temas Estacionales**
    - Implementación de temas personalizados por temporadas (Verano, Mes Rosa, Misterio/Halloween y Festividades/Navidad).
    - Refactorización completa del modo escala de grises como capa visual y optimización de variables globales de color.

* [x] **v0.37 - Módulo de Personalización & Descarga de Horarios / Calendario**
    - Selector interactivo de cursos, divisiones y materias.
    - Personalización de fuentes, paletas de colores y visibilidad de profesores.
    - Exportación e impresión directa a formato PNG/PDF local.

* [ ] **v0.38 - Sistema Dinámico de Fondos Visuales (Background Customizer)**
    - Motor para alternar entre fondos dinámicos, patrones visuales y gradientes institucionales.
    - Opciones de personalización con persistencia en `localStorage`.
    - Ampliación del visor de _Changelog_ para permitir explorar el historial histórico completo de versiones desde los inicios.

* [ ] **v0.39 - Subpágina Institucional de Novedades & Comunicados**
    - Implementación de la sección dedicada a noticias del Centro de Estudiantes.
    - Filtrado por etiquetas de importancia (_Urgente_, _Eventos_, _Institucional_).

* [ ] **v0.40 - Rediseño Integral de Header & Menú de Navegación (Hito Principal)**
    - Reestructuración completa de la cabecera superior (_Header Card_).
    - Nuevo menú de navegación más intuitivo, responsivo y fluido para móviles y escritorio.

---

### 🚧 Fase 4: Ciclo Alpha (Versiones v0.41 - v0.50)

- [ ] **v0.41 - Sistema de Avisos Flotantes & Alertas Rápidas (Toasts Urgentes)**
    - Notificaciones flotantes temporales para asambleas, avisos de preceptoría o cambios de taller.

- [ ] **v0.42 - Widget Contador de Eventos & Exámenes**
    - Reloj interactivo de cuenta regresiva para fechas clave (mesas de examen, entregas de carpetas, feriados o estudiantina).

- [ ] **v0.43 - Subpágina de Guía Escolar & Directorio de Aulas/Talleres**
    - Mapeo y lista estructurada de aulas, talleres de especialidad (Electromecánica e Informática) y horarios de consulta docente.

- [ ] **v0.44 - Buscador Global Rápido por Teclado (`Ctrl + K`)**
    - Modal flotante de búsqueda instantánea para filtrar trámites, archivos PDF, profesores y subpáginas sin recargar.

- [ ] **v0.45 - Galería Multimedia & Archivo Visual de Eventos**
    - Módulo con visor de pantalla completa (_lightbox_) para fotografías de actividades del centro, muestras técnicas y torneos.

- [ ] **v0.46 - Modo Enfoque / Lectura Limpia para Documentos**
    - Botón de lectura sin distracciones para reglamentos (AEC) y estatutos, optimizado para celulares.

- [ ] **v0.47 - Módulo de Sugerencias Categorizado & Votación Estudiantil**
    - Evolución del buzón de contacto: clasificación por categorías (Talleres, Edificio, Deportes) y sistema de propuestas.

- [ ] **v0.48 - Microinteracciones, Animaciones & Transiciones de Navegación**
    - Pulido de efectos de entrada, _hover_ en tarjetas y transiciones suaves entre páginas.

- [ ] **v0.49 - Auditoría de Rendimiento, Limpieza de CSS & Compresión de Assets**
    - Optimización masiva de imágenes, depuración de CSS obsoleto tras los rediseños y preparación final para la PWA.

- [ ] **v0.50 - Rediseño de Paleta Base: Tonos Calipso & Tokens Temáticos**
    - Incorporación de los tonos **Calipso** a la paleta de colores cromática principal del sitio.
    - Creación de variables CSS específicas (`--color-theme-*`) para la gestión limpia de temas (Alto Contraste, Modo Code, Daltonismo, etc.).

---

### 🚧 Fase 5: Ciclo Alpha (Versiones v0.51 - v0.60)

- [ ] **v0.51 - Menú Hamburguesa Mobile & Panel de Configuración**
    - Implementación de menú de navegación colapsable (_hamburguesa_) pensado para dispositivos móviles.
    - Creación de modal/panel emergente de **Configuración** para centralizar controles de audio, temas y accesibilidad.

## 🔵 Fase de Desarrollo Seria: Ciclo Beta

_Enfoque: Carga de contenido institucional real, participación estudiantil y pruebas con alumnos._
_Período: Mediados de Enero de 2027 a Febrero de 2027_

- [ ] **Integración de Contenido Real Institucional (Enero 2027)**
    - Reemplazo de textos de prueba (_Lorem Ipsum_) por información verídica del IPET N° 424: talleres, especialidades, autoridades, horarios y reglamentos.

- [ ] **Módulo de Feedback Estudiantil & Encuestas (Enero 2027)**
    - Formulario e interfaz interactiva para la recolección de opiniones, sugerencias y consultas de los alumnos hacia el Centro de Estudiantes.

- [ ] **Pruebas de Usabilidad & Control de Calidad (Febrero 2027)**
    - Despliegue de versiones Beta cerradas con el alumnado para auditar la experiencia de usuario (UX) en celulares y computadoras de la escuela.

---

## 🟢 Pre-Lanzamiento y Versión Oficial (v0.90 - v1.0)

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
