# 🏫 Sitio Web del Centro de Estudiantes - IPET N° 424

> **Portal Institucional Digital, Gestión Escolar e Informática Estudiantil**

[![Estado del Despliegue](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml/badge.svg)](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml)
![Versión](<https://img.shields.io/badge/versi%C3%B3n-0.29%20(Alpha)-blue>)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)
![Tecnologías](<https://img.shields.io/badge/stack-HTML5%20%7C%20CSS3%20%7C%20JS%20(ES6%2B)-orange>)

Portal web institucional desarrollado para concentrar, digitalizar y facilitar el acceso a la información académica, solicitudes, formularios, trámites y herramientas interactivas para la comunidad educativa del **IPET N° 424**.

---

## 📌 Índice de Contenidos

- [Vista General y Propósito](#-vista-general-y-propósito)
- [Estado del Proyecto](#-estado-del-proyecto)
- [Funcionalidades Principales](#-funcionalidades-principales)
- [Arquitectura y Estructura del Proyecto](#-arquitectura-y-estructura-del-proyecto)
- [Tecnologías e Infraestructura](#-tecnologías-e-infraestructura)
- [Automatización y Integración Continua (CI/CD)](#-automatización-y-integración-continua-cicd)
- [Historial de Versiones (Changelog)](#-historial-de-versiones-changelog)
- [Roadmap de Desarrollo](#-roadmap-de-desarrollo)
- [Contacto y Autoría](#-contacto-y-autoría)

---

## 🎯 Vista General y Propósito

El portal del Centro de Estudiantes nace con la necesidad de **centralizar y modernizar los canales de comunicación estudiantiles**. Tradicionalmente, la información sobre trámites, horarios, planes de estudio y solicitudes escolares se encontraba dispersa.

Este proyecto busca resolver dicha problemática mediante una **plataforma accesible, liviana, responsiva y orientada a la experiencia de usuario (UX/UI)**, optimizada para funcionar correctamente en dispositivos móviles y de escritorio.

---

## 🚀 Estado del Proyecto

| Parámetro                      | Detalle                            |
| :----------------------------- | :--------------------------------- |
| **Versión Actual**             | `0.29` (Fase Alpha, en desarrollo) |
| **Inicio de Desarrollo**       | Viernes 7 de agosto de 2026        |
| **Lanzamiento Estable (v1.0)** | Martes 3 de marzo de 2027          |
| **Entorno de Hosting**         | Cloudflare Pages / GitHub Pages    |
| **Mantenimiento**              | Activo (CI/CD Automático)          |

---

## ✨ Funcionalidades Principales

### 🔍 1. Módulo de Horarios Escolar Interactivo (futuro)

- **Buscador/Filtro Dinámico:** Consulta personalizada por curso, división, turno o materia.
- **Visualización Limpia:** Tablas de horarios adaptables con resaltado visual.

### 🌓 2. Sistema de Interfaz Adaptativa (Dark / Light Mode)

- **Modo Oscuro Integrado:** Detección de preferencia del sistema operativo y alternancia dinámica vía JS.
- **Persistencia de Selección:** Guardado de preferencias mediante `localStorage`.

### 📂 3. Centro de Documentación y Descargas

- Acceso directo a formularios institucionales, solicitudes de pase, certificados e instructivos en formato PDF.
- Enlaces organizados por categorías de trámite.

### ✉️ 4. Formulario Institucional y Canal de Sugerencias

- Sistema de contacto directo con la comisión directiva del Centro de Estudiantes.
- Validación de campos en tiempo real mediante JavaScript.

### ❓ 5. Sección FAQ y Mapa Interactivo (futuro)

- Preguntas frecuentes sobre matriculación, régimen de asistencia y convivencia escolar.
- Ubicación y mapa del establecimiento educativo.

---

## 📂 Arquitectura y Estructura del Proyecto

El código está estructurado de forma modular y limpia, facilitando la escalabilidad del sistema:

```text
CE-IPET424/
├── .well-known/                      # Archivos de seguridad e infraestructura
│   └── security.txt                  # Contacto oficial para reportes de seguridad
├── assets/                           # Recursos estáticos del sitio
│   ├── audio/                        # Archivos de audio (comunicados, accesibilidad)
│   ├── data/                         # Archivos de datos estructurados
│   │   ├── events.json               # Datos de eventos y calendario
│   │   ├── faqs.json                 # Preguntas frecuentes
│   │   ├── manifest.json             # Manifiesto para instalación PWA
│   │   ├── news.json                 # Noticias y comunicados
│   │   └── team.json                 # Integrantes del Centro de Estudiantes
│   ├── docs/                         # Documentos descargables (PDFs, autorizaciones)
│   ├── fonts/                        # Tipografías locales
│   ├── img/                          # Imágenes del sitio
│   │   ├── bg/                       # Imágenes tecnológicas de fondo (.jpg)
│   │   ├── cursors/                  # Punteros personalizados (.svg)
│   │   ├── favicons/                 # Favicons para modo claro y oscuro
│   │   ├── gallery/                  # Galería de fotos e instalaciones
│   │   ├── icons/                    # Íconos de interfaz y redes
│   │   ├── logos/                    # Logos e insignias del CE e IPET
│   │   └── mascot/                   # Ilustraciones de la mascota
│   └── videos/                       # Clips y videos institucionales
├── components/                       # Componentes HTML reutilizables
│   ├── _aside-config.html            # Aside desplegable modular
│   ├── _aside-news.html              # Aside desplegable modular
│   ├── _footer.html                  # Pie de página modular
│   ├── _header.html                  # Encabezado y navegación modular
│   └── _modal-whats-new.html         # Modal de novedades de la version
├── css/                              # Hojas de estilos CSS
│   ├── base/                         # Hojas de estilos principales
│   │   ├── accessibility.css         # Estilos para opciones de accesibilidad
│   │   ├── fonts.css                 # Carga y definición de tipografías
│   │   ├── normalize.css             # Normalización entre navegadores
│   │   ├── reset.css                 # Reset y estilos globales del DOM
│   │   ├── themes.css                # Variables CSS de temas de color
│   │   ├── typography.css            # Jerarquía y estilos tipográficos
│   │   └── variables.css             # Variables generales del sistema
│   ├── components/                   # Hojas de estilos por componente
│   │   ├── accordion.css             # Estilos para acordeones desplegables
│   │   ├── banners.css               # Banners informativos
│   │   ├── buttons.css               # Botones e interactividad
│   │   ├── cards.css                 # Tarjetas de contenido
│   │   ├── inputs.css                # Campos de formulario y controles
│   │   ├── loader.css                # Pantalla y animación de carga
│   │   ├── modals.css                # Ventanas modales
│   │   ├── scrollbar.css             # Personalización de la barra de desplazamiento
│   │   ├── toasts.css                # Notificaciones flotantes / mensajes emergentes
│   │   └── widgets.css               # Widgets (clima, accesibilidad, etc.)
│   ├── layout/                       # Hojas de estilos del layout
│   │   ├── asides.css                # Menús y paneles laterales
│   │   ├── content.css               # Disposición del contenedor principal
│   │   ├── footer.css                # Pie de página
│   │   ├── header.css                # Encabezado principal
│   │   └── nav.css                   # Barra de navegación
│   ├── pages/                        # Hojas de estilos específicas por página
│   │   ├── error.css                 # Estilos para la página 404 / errores
│   │   └── home.css                  # Estilos específicos de la página principal
│   └── styles.css                    # Hoja de ruta principal (@import maestro)
├── js/                               # Funciones Javascript
│   ├── ui/                           # Funciones de la interfaz
│   │   ├── banners.js                # Control de banners de aviso
│   │   ├── buttons.js                # Comportamiento e interacción de botones
│   │   ├── components.js             # Control de componentes varios
│   │   ├── modals.js                 # Apertura y cierre de ventanas modales
│   │   └── theme.js                  # Lógica de conmutación de temas (oscuro/claro)
│   ├── utils/                        # Funciones del back
│   │   ├── accessibility.js          # Utilidades generales de accesibilidad
│   │   ├── animations.js             # Efectos y animaciones
│   │   ├── dyslexia.js               # Modo de tipografía accesible (Atkinson)
│   │   ├── font-size.js              # Ajuste dinámico de tamaño de fuente
│   │   ├── shortcuts.js              # Atajos de teclado
│   │   └── sound.js                  # Efectos de audio / feedback sonoro
│   ├── config.js                     # Configuraciones
│   └── main.js                       # Punto de entrada principal e inicializador
├── .gitignore                        # Ignora ciertos archivos al hacer commit
├── .nojekyll                         # Evita que GitHub Pages omita carpetas con guion bajo
├── 404.html                          # Página personalizada de error 404
├── about.html                        # Sub-página institucional ("Sobre Nosotros")
├── changelog.txt                     # Registro de cambios y actualizaciones
├── contact.html                      # Sub-página con formulario y datos de contacto
├── credits.html                      # Sub-página de créditos del equipo de desarrollo
├── humans.txt                        # Créditos e información de autores del proyecto
├── index.html                        # Portal principal (Landing Page)
├── LICENSE                           # Licencia de software libre (Licencia MIT)
├── projects.html                     # Sub-página de proyectos y propuestas
├── README.md                         # Documentación principal del repositorio
├── robots.txt                        # Instrucciones para motores de búsqueda
└── school.html                       # Sub-página sobre la historia e instalaciones de la escuela
```

---

## 🛠️ Tecnologías e Infraestructura

- **Frontend Nativo:** `HTML5` semántico, `CSS3` (utilizando variables nativas CSS y Flexbox/Grid) y `JavaScript (ES6+)` sin dependencias pesadas de terceros para garantizar una carga ultrarrápida.
- **Alojamiento y Servidores:** Infraestructura distribuida en **Cloudflare Pages** y servidor estático en **GitHub Pages**.
- **Control de Versiones:** Git & GitHub Workflow.

---

## ⚙️ Automatización y Integración Continua (CI/CD)

El proyecto cuenta con integración continua configurada mediante **GitHub Actions** (`static.yml`).

Cada commit o pull request realizado sobre la rama principal (`main`) ejecuta un proceso automatizado que:

1. Verifica la integridad de los archivos estáticos.
2. Despliega automáticamente los últimos cambios al servidor de producción en cuestión de segundos.

---

## 📜 Historial de Versiones (Changelog)

- **`v0.29-alpha` (Actual)**
    - Se agregó un nuevo modal de bienvenida y advertencia informando que el sitio está en desarrollo
    - Se agregó un botón en accesibilidad para desactivar las Transiciones
    - Se agregó un botón en accesibilidad para cambiar a una fuente de texto para personas con dislexia
    - Se agregó un controlador para el tamaño de texto del sitio
    - Se agregó un modo de accesibilidad para personas con daltonismo
    - Se agregó un botón en la parte inferior derecha para volver arribba de todo
    - Se agregó un atajo de teclado para el modo daltónico y otro para abrir el aside
    - Se reordenaron los botones del aside de opciones
    - Se cambiaron muchos colores en modo oscuro
    - Ahora el logo del header en modo oscuro y alto contraste
    - Se agregó un atajo de teclado para abrir el aside
    - Se restructuraron las carpetas de css y js, dividiendo los archivos en varias subcarpetas
    - El css ahora se encuentra dividido en módulos por componentes
    - Se eliminaron los archivos base, tablet y desktop.css ya que ahora las propiedades se encuentran repartidas
    - Los módulos de js ahora están divididos en carpetas
    - Se rehizo la función para mostrar los modales
    - Se agregaron muchos comentarios y se eliminaron otros
    - Se renombraron las clases del modal
    - Se modificó el robots.txt para evitar la indexación
    - Se agregó la etiqueta meta name="robots" en los html con el mismo propósito
    - Se expandieron y actualizaron security.txt y humans.txt
- **`v0.28-alpha`**
    - Se expandió el archivo `variables.css` para crear un sistema completo de Design Tokens
    - Se estandarizaron y unificaron las variables para `padding`, `margin`, `border-radius`, escalas tipográficas, sombras y tiempos de transición
    - Estas variables ahora son iguales tanto para celular como para pc
    - Se refactorizaron las propiedades reglas en `base.css` y `desktop.css` eliminando valores estáticos (hardcodeados)
    - Se cambió el color de algunas tarjetas en modo claro
    - Ahora el logo del C.E. del header dirige hacia la página de inicio
    - El spinner de carga ahora es más ancho
    - Se suavizó el color del borde de los botones/inputs y el de las barras de scroll
    - Ahora el toast dura más tiempo
    - Se renombraron muchas clases e ids para mayor claridad
    - Se corrigió la separación de los enlaces a las subpáginas
    - Se eliminaron propiedades innecesarias
    - Se mejoraron algunos comentarios del código
    - Pequeño cambio en la Licencia
    - Se modificó el .gitignore
- **`v0.27-alpha`**
    - Se agregó una ventana modal para mostrar la última versión y las novedades
    - Se agregó whats-new-modal.html y whats-new.js para controlar el funcionamiento
- **`v0.26-alpha`**
    - 0.26 Se agregaron efectos de sonido a los botones, toasts y banners
    - Estos archivos de sonido se encuentran en assets/audio
    - Se separó una nueva sección en el aside: Accesibilidad, que incluye el modo escala de grises y un nuevo botón para controlar desactivar los efectos de sonido
    - Se agregó el archivo sound.js y funciones para controlar el sonido
    - Se agregó más padding vertical al aside
    - Se agregaron variables para controlar el outline de los elementos para la navegación con tab
    - Se eliminó código innecesario
    - Se incluyó un nuevo Roadmap en el archivo README
- **`v0.25-alpha`**
    - Se formatearon todos los archivos js, css y html
    - Se reordenaron las propiedades de todos los archivos css con el enfoque outside-in, este es el orden:
      Posicionamiento y Maquetación (Layout & Position)
      Modelo de Caja y Dimensiones (Box Model & Sizing)
      Espaciado Interno y Bordes (Padding & Border structure)
      Tipografía y Texto (Typography)
      Colores y Estilos Visuales (Visuals & Colors)
      Transiciones y Animaciones (Misc & Transitions)

---

## 🗺️ Roadmap de Desarrollo

### 🚀 Próximas Versiones (Ciclo v0.26 - v0.35)

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
    - Refactorización de reglas en `base.css` y `desktop.css` eliminando valores estáticos (_hardcodeados_).

- [x] **v0.29 - Suite de Accesibilidad Ampliada**
    - Nuevos controles para ajustar el tamaño del texto (+ / -).
    - Selector de alto contraste e indicador de fuentes para dislexia.
    - Mejoras en la navegación por teclado (`:focus-visible`) y atributos ARIA.

- [ ] **v0.30 - Aside Desplegable de Noticias (News Drawer)**
    - Panel lateral deslizante (_drawer_) dedicado a comunicados urgentes e insumos del colegio.
    - Filtrado rápido por etiquetas (_Urgente_, _Centro de Estudiantes_, _Institucional_).

- [ ] **v0.31 - Sección "Sabías qué..." / Datos Curiosos del IPET 424**
    - Widget dinámico de datos curiosos sobre la historia de la escuela, las especialidades técnicas y el Centro de Estudiantes.
    - Generador aleatorio de datos al presionar un botón interactivo.

- [ ] **v0.32 - Efectos Visuales & Micro-interacciones Avanzadas**
    - Integración de animación al hacer scroll (AOS / Animate On Scroll) en tarjetas y proyectos.
    - Efectos de brillo/glow dinámico en bordes al pasar el cursor (Hover UX).

- [ ] **v0.33 - Hub de Utilidades Estudiantiles (Calculadora de Promedios / Materias)**
    - Herramienta interactiva para que los estudiantes calculen sus promedios por trimestre.
    - Indicadores visuales de rendimiento por materia (Técnicas / Físico-Matemáticas / Generales).

- [ ] **v0.34 - Descarga Organizada de Materiales & Formularios**
    - Buscador e indexador de PDFs institucionales (fichas de salud, permisos de salidas de campo, reglamentos).
    - Previsualización rápida de documentos antes de descargar.

- [ ] **v0.35 - Modo Off-Line & Optimización PWA (Progressive Web App)**
    - Registro de _Service Worker_ para habilitar navegación básica sin conexión a Internet.
    - Optimización de caché de recursos estáticos e instalación como app en dispositivos móviles.

---

## 👤 Contacto y Autoría

Proyecto diseñado, programado y mantenido por:

- **Juan Martín Rodríguez**  
  _Presidente del Centro de Estudiantes — IPET N° 424 (Gestión 2026)_
    - **GitHub:** [@JohnMartinRB](https://github.com/JohnMartinRB)
    - **Repositorio oficial:** [CE-IPET424](https://github.com/JohnMartinRB/CE-IPET424)

---
