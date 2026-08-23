
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
| **Versión Actual** | `v0.16` (Fase beta - En desarrollo) |
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
CE-IPET-424/
├── .github/
│   └── workflows/
│       └── static.yml          # Workflow de despliegue automático a GitHub Pages
├── assets/                     # Recursos estáticos (Imágenes, SVG, PDFs, íconos)
├── css/                        # Hoja de estilos modularizada
│   ├── main.css                # Estilos generales y variables CSS
│   └── components/             # Estilos de componentes (Modales, Tablas, Menú)
├── js/                         # Lógica de cliente en JS nativo (ES6+)
│   ├── main.js                 # Inicialización y control del DOM
│   ├── theme-toggle.js         # Módulo para el control de modo oscuro/claro
│   └── horarios.js             # Módulo de filtrado y búsqueda de horarios
├── pages/                      # Sub-páginas del sitio (Contacto, Trámites, FAQ)
├── index.html                  # Landing Page / Portal Principal
├── LICENSE                     # Licencia del proyecto
└── README.md                   # Documentación principal

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

* **`v0.15` (Actual)**
  * Implementación del módulo dinámico de consulta de horarios.
  * Automatización del despliegue vía GitHub Actions.
  * Ajustes de accesibilidad y refactorización de hojas de estilo CSS.
* **`v0.10`**
  * Integración del selector de tema visual (Modo Claro / Modo Oscuro) con persistencia en `localStorage`.
  * Incorporación del módulo de descargas de archivos PDF institucionales.
* **`v0.05`**
  * Rediseño de componentes responsive y sub-páginas internas.
* **`v0.01`**
  * Estructura base en HTML5/CSS3 y lanzamiento de la primera versión borrador.

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
  * **Repositorio oficial:** [CE-IPET-424](https://github.com/JohnMartinRB/CE-IPET-424)

---