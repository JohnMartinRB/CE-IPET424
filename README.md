# 🏫 Sitio Web del Centro de Estudiantes - IPET N° 424

> **Portal Institucional Digital, Gestión Escolar e Informática Estudiantil**

[![Estado del Despliegue](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml/badge.svg)](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml)
![Versión](<https://img.shields.io/badge/versi%C3%B3n-0.25%20(Alpha)-blue>)
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

| Parámetro                      | Detalle                             |
| :----------------------------- | :---------------------------------- |
| **Versión Actual**             | `v0.25` (Fase Alpha, en desarrollo) |
| **Inicio de Desarrollo**       | 7 de agosto de 2026                 |
| **Lanzamiento Estable (v1.0)** | Marzo de 2027                       |
| **Entorno de Hosting**         | Cloudflare Pages / GitHub Pages     |
| **Mantenimiento**              | Activo (CI/CD Automático)           |

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
│   ├── aside-config.html             # Aside desplegable modular
│   ├── footer.html                   # Pie de página modular
│   └── header.html                   # Encabezado y navegación modular
├── css/                              # Estilos e identidades visuales
│   ├── base.css                      # Reset y estilos globales
│   ├── desktop.css                   # Responsive design para pantallas grandes
│   ├── fonts.css                     # Carga y definición de fuentes
│   ├── normalize.css                 # Normalización entre navegadores
│   ├── styles.css                    # Hoja de ruta principal (@import)
│   ├── tablet.css                    # Responsive design para tablets
│   ├── themes.css                    # Variables CSS de temas de color
│   └── variables.css                 # Variables generales del sistema
├── js/                               # Lógica e interactividad del cliente
│   ├── accessibility.js              # Herramientas de accesibilidad
│   ├── banners.js                    # Banners, barras y toasts
│   ├── buttons.js                    # Botones y widgets
│   ├── components.js                 # Carga dinámica de header y footer
│   ├── config.js                     # Configuración general del sitio
│   ├── main.js                       # Inicialización y control global del DOM
│   ├── shortcuts.js                  # Atajos de teclado
│   └── theme.js                      # Control y persistencia del modo oscuro/claro
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

AVISO: Se incluyen únicamente las versiones completas

- **`v0.25-alpha` (Actual)**
    - Se formatearon todos los archivos js, css y html
    - Se reordenaron las propiedades de todos los archivos css con el enfoque outside-in, este es el orden:
      Posicionamiento y Maquetación (Layout & Position)
      Modelo de Caja y Dimensiones (Box Model & Sizing)
      Espaciado Interno y Bordes (Padding & Border structure)
      Tipografía y Texto (Typography)
      Colores y Estilos Visuales (Visuals & Colors)
      Transiciones y Animaciones (Misc & Transitions)
- **`v0.24-alpha`**
    - Se agregaron dos nuevos modos de color: alto contraste y escala de grises (monocromático). El primero modifica toda la paleta de colores y el segundo aplica un filtro a la página. Ambos modifican además el favicon
    - Se reworkeó todo el archivo theme.js y sus funciones para permitir añadir más temas de color en un futuro
    - Se agregaron nuevos atributos a los botones del aside
    - Se cambió el texto del footer-copyright en 404.html
- **`v0.23-alpha`**
    - Se añadió un botón de modo descanso que añade un filtro de color a toda la página
    - Se añadió una barra de scroll al aside de opciones
    - Se renombró la clase modo-oscuro a dark-mode
- **`v0.22-alpha`**
    - Se agregó contenido de placeholder y un menú personalizado a todas las subpáginas con el objetivo de mejorar la navegación
    - Se arreglaron los button-active del menú al fondo de cada página
    - Se corrigió el footer en 404.html
    - Se eliminaron los íconos innecesarios en assets/img/icons, volviendo a tener .gitkeep
- **`v0.21-alpha`**
    - Se separaron correctamente todos los estilos de celular y base (base.css) y los de pc (desktop.css)
    - Se implementó y trabajó correctamente el layout de celular para darle una apariencia ordenada y corregida
    - Se restructuró todo el css del sitio, sepando los selectores y propiedades por secciones de contenido y elementos
    - Se renombraron muchos ids y clases para mas claridad y especificidad
    - Ahora el texto tiene las clases "text" y "Paragraph" para poder centrarlos y hacer que tengan cursor:text. Además, los párrafos tienen text-wrap:balance para tener mejor estructura
    - Ahora el cursor:text es más grande - Ahora el fondo del hero-section ya no se mueve al hacer scroll
    - Se oscureció el color del texto del footer en modo oscuro
    - Ahora la pantalla de carga en modo oscuro es azul en lugar de celeste
    - Se cambiaron muchísimos padding, margin, border-radius y tamaños entre el diseño en pc y en celular
    - Ahora en celular el título no está en uppercase y hay un solo logo en lugar de dos
    - Los enlaces del footer ahora se encuentran divididos en dos columnas: una para redes de contacto y otra para los enlaces del proyecto
    - Se corrigieron muchos ids y clases en los archivos .js

## 🗺️ Roadmap de Desarrollo (Hacia la v1.0)

- [x] Módulo de consulta de horarios.
- [x] Conexión y automatización CI/CD.
- [x] Sistema de modo oscuro persistente.
- [ ] **v0.20:** Integración de un panel de novedades y noticias del colegio en tiempo real.
- [ ] **v0.50:** Sistema de consulta de calendarios de exámenes e integración de turnos.
- [ ] **v1.00:** Lanzamiento oficial optimizado y testeo final de accesibilidad escolar (Marzo 2027).

---

## 👤 Contacto y Autoría

Proyecto diseñado, programado y mantenido por:

- **Juan Martín Rodríguez**  
  _Presidente del Centro de Estudiantes — IPET N° 424 (Gestión 2026)_
    - **GitHub:** [@JohnMartinRB](https://github.com/JohnMartinRB)
    - **Repositorio oficial:** [CE-IPET424](https://github.com/JohnMartinRB/CE-IPET424)

---
