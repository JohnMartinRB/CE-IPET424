
# 🏫 Sitio Web del Centro de Estudiantes - IPET N° 424

> **Portal Institucional Digital, Gestión Escolar e Informática Estudiantil**

[![Estado del Despliegue](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml/badge.svg)](https://github.com/JohnMartinRB/CE-IPET-424/actions/workflows/static.yml)
![Versión](https://img.shields.io/badge/versi%C3%B3n-0.15%20(Beta)-blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)
![Tecnologías](https://img.shields.io/badge/stack-HTML5%20%7C%20CSS3%20%7C%20JS%20(ES6%2B)-orange)

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

| Parámetro | Detalle |
| :--- | :--- |
| **Versión Actual** | `v0.20` (Fase alpha - En desarrollo) |
| **Inicio de Desarrollo** | 07 de agosto de 2026 |
| **Lanzamiento Estable (v1.0)** | Marzo de 2027 |
| **Entorno de Hosting** | Cloudflare Pages / GitHub Pages |
| **Mantenimiento** | Activo (CI/CD Automático) |

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

* **Frontend Nativo:** `HTML5` semántico, `CSS3` (utilizando variables nativas CSS y Flexbox/Grid) y `JavaScript (ES6+)` sin dependencias pesadas de terceros para garantizar una carga ultrarrápida.
* **Alojamiento y Servidores:** Infraestructura distribuida en **Cloudflare Pages** y servidor estático en **GitHub Pages**.
* **Control de Versiones:** Git & GitHub Workflow.

---

## ⚙️ Automatización y Integración Continua (CI/CD)

El proyecto cuenta con integración continua configurada mediante **GitHub Actions** (`static.yml`). 

Cada commit o pull request realizado sobre la rama principal (`main`) ejecuta un proceso automatizado que:
1. Verifica la integridad de los archivos estáticos.
2. Despliega automáticamente los últimos cambios al servidor de producción en cuestión de segundos.

---

## 📜 Historial de Versiones (Changelog)

AVISO: Se incluyen únicamente las versiones completas

* **`v0.20` (Actual)**
La actualización más grande hasta el momento: se actualizó casi toda la interfaz de la página (la actu estuvo enfocada en el diseño en pc)
ESTRUCTURA:
  * Ahora el nav se encuentra en una tarjeta aparte del Header
  * Se agregó un subtítulo al header y ahora es más ancho
  * El footer se encuentra en una tarjeta separada, más ancha, al final de la página
  * Se movieron los botones de modo oscuro, copiar enlace y el widget de clima a un aside de opciones, desplegable (el cual se inyecta con fetch al igual que el header y el footer)
  * En este mismo aside, se agregaron dos botones para futuros temas de color
  * En el footer, se agregaron enlaces al repositorio github y a la licencia MIT. Tambien, se separó la línea de copyright de la de desarrollo, haciendo esta ultima un poco mas pequeña (ahora los textos del copyright se manejan por clases)
  * Se agregó la carpeta assets/img/bg para incluir fondos tecnológicos para tarjetas futuras
  * Ahora 404.html no tiene menú, aside y tiene un footer personalizado únicamente con el copyright
  * Se cambió la forma en que se manejan las clases e ids: ahora todos los elementos tienen una clase y un id idénticos y específicos, y clases adicionales para estilos generales
  * CSS ahora trabaja únicamente con las clases genéricas y específicas, reservando los ids unicamente para javascript
DISEÑO:
  * Se cambiaron todos los colores de fondo y tarjetas en modo claro, paasando de gris/blanco a degrades con celeste/blanco
  * Ahora la tarjeta de hero tiene un fondo tecnologico
  * Se agrego más interlineado al texto, el cual tiene una nueva clase "text" . Además, este ahora se encuentra centrado
  * Se agregó un ancho fijo a los botones del aside
  * Ahora el input:focus tiene un borde diferente y además un sombreado (el input ahora se trabaja por clase)
  * Se cambió el ancho de la barra de progreso de lectura
  * Se cambió el padding/margin de muchas tarjetas
FUNCIONES:
  * Se modularizó más el archivo main.js en buttons.js, banners.js y shortcuts.js el primero conteniendo los botones y el widget, el segundo conteniendo el toast, el offline-banner y la barra de lectura, y el ultimo los atajos de teclado
  * Sus funciones ahora se importan
  * Se cambió el funcionamiento del widget del clima
  * Se agregó un atajo de teclado para copiar el enlace de la web, y otros para el modo de escala de grises/alto contraste (aun no implementados)
  * Nueva función para que el aside quede arriba al llegar al footer, de forma que no lo tape.
* **`v0.19`**
  * Se agregó una pantalla de carga sencilla para cubrir el contendio mientras se cargan los componentes de la página.
  * Se agregó un border radius a la barra de progreso de lectura
* **`v0.18`**
  * El header ahora se encuentra en un contenedor aparte de .content, tiene posición sticky por lo que se mantiene al hacer scroll
  * Se añadió una barra del progreso de lectura en el head
  * Se agregó un widget de tiempo atmosférico de Villa Dolores en el header
  * Se reworkeó la función de deshabilitar el menú contextual en imágenes para hacerla mas completa
  * Se personalizó la scrollbar (colores, ancho, etc)
  * Se agregaron más transiciones y animaciones
  * Ahora el boton de modo oscuro y el weather widget están en un contenedor aparte del nav
* **`v0.17`**
  * Se implementó una MIT License
  * Se corrigió el README

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

* **Juan Martín Rodríguez**  
  *Presidente del Centro de Estudiantes — IPET N° 424 (Gestión 2026)*
  * **GitHub:** [@JohnMartinRB](https://github.com/JohnMartinRB)
  * **Repositorio oficial:** [CE-IPET424](https://github.com/JohnMartinRB/CE-IPET424)

---