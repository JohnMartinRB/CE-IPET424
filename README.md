
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
| **Versión Actual** | `v0.18` (Fase beta - En desarrollo) |
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
│   │   ├── cursors/                  # Punteros personalizados (.svg)
│   │   ├── favicons/                 # Favicons para modo claro y oscuro
│   │   ├── gallery/                  # Galería de fotos e instalaciones
│   │   ├── icons/                    # Íconos de interfaz y redes
│   │   ├── logos/                    # Logos e insignias del CE e IPET
│   │   └── mascot/                   # Ilustraciones de la mascota
│   └── videos/                       # Clips y videos institucionales
├── components/                       # Componentes HTML reutilizables
│   ├── footer.html                   # Pie de página modular
│   └── header.html                   # Encabezado y navegación modular
├── css/                              # Estilos e identidades visuales
│   ├── base.css                      # Reset y estilos globales
│   ├── dark-mode.css                 # Estilos específicos de modo oscuro
│   ├── desktop.css                   # Responsive design para pantallas grandes
│   ├── fonts.css                     # Carga y definición de fuentes
│   ├── high-contrast.css             # Modo de alto contraste para accesibilidad
│   ├── normalize.css                 # Normalización entre navegadores
│   ├── styles.css                    # Hoja de ruta principal (@import)
│   ├── tablet.css                    # Responsive design para tablets
│   ├── themes.css                    # Variables CSS de temas de color
│   └── variables.css                 # Variables generales del sistema
├── js/                               # Lógica e interactividad del cliente
│   ├── accessibility.js              # Herramientas de accesibilidad
│   ├── components.js                 # Carga dinámica de header y footer
│   ├── config.js                     # Configuración general del sitio
│   ├── main.js                       # Inicialización y control global del DOM
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

* **`v0.18` (Actual)**
  * El header ahora se encuentra en un contenedor aparte de .content, tiene posición sticky por lo que se mantiene al hacer scroll
  * Se añadió una barra del progreso de lectura en el head
  * Se agregó un widget de tiempo atmosférico de Villa Dolores en el header
  * Se reworkeó la función de deshabilitar el menú contextual en imágenes para hacerla mas completa
  * Se personalizó la scrollbar (colores, ancho, etc)
  * Se agregaron más transiciones y animaciones
  * Ahora el boton de modo oscuro y el weather widget están en un contenedor aparte del nav -
* **`v0.17`**
  * Se implementó una MIT License
  * Se corrigió el README
* **`v0.16`**
  * Se cambiaron todas las clases e ids a inglés
  * Se cambió totalmente la forma en que se manejan los botones y enlaces para tener un mejor funcionamiento y coherencia, así como arreglar varios errores
* **`v0.15`**
  * Se agregaron variables para el modo oscuro
* **`v0.14`**
  * Ahora todas las secciones se encuentran en tarjetas con colores (provisorios), sombras y animaciones
  * Se agregaron nuevas clases a todas las secciones
  * Se agregaron variables por elemento para trabajar los colores unicamente desde las variables base (aun no funciona para el modo oscuro)
  * Se agregó un plano general como placeholder del plano de la escuela 
  * Ahora todos los títulos están centrados
  * El texto de los botones está en negrita y posee más padding, además de distinto color de borde
  * Se agregaron animaciones a los details y summary -

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
  * **Repositorio oficial:** [CE-IPET-424](https://github.com/JohnMartinRB/CE-IPET424)

---