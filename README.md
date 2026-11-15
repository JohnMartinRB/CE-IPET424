# 🏫 Sitio Web del Centro de Estudiantes - IPET N° 424

> **Portal Institucional Digital, Gestión Escolar e Informática Estudiantil**

[![Estado del Despliegue](https://github.com/JohnMartinRB/CE-IPET424/actions/workflows/static.yml/badge.svg)](https://github.com/JohnMartinRB/CE-IPET424/actions/workflows/static.yml)
![Versión](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/JohnMartinRB/CE-IPET424/main/data/version.json&query=$.label&label=versi%C3%B3n&color=blue)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)
![Tecnologías](<https://img.shields.io/badge/stack-HTML5%20%7C%20CSS3%20%7C%20JS%20(ES6%2B)-orange>)

Portal web institucional desarrollado para concentrar, digitalizar y facilitar el acceso a la información académica, solicitudes, formularios, trámites y herramientas interactivas para la comunidad educativa del **IPET N° 424**.

---

## 📌 Índice de Contenidos

- [Vista General y Propósito](#-vista-general-y-propósito)
- [Estado del Proyecto](#-estado-del-proyecto)
- [Funcionalidades Principales](#-funcionalidades-principales)
- [Tecnologías e Infraestructura](#-tecnologías-e-infraestructura)
- [Automatización e Integración Continua (CI/CD)](#-automatización-y-integración-continua-cicd)
- [Arquitectura y Estructura del Proyecto](#-arquitectura-y-estructura-del-proyecto)
- [Historial de Versiones (Changelog)](#-últimos-cambios-y-actualizaciones)
- [Roadmap de Desarrollo](#-roadmap-de-desarrollo)
- [¿Querés colaborar?](#-querés-colaborar)
- [Contacto y Autoría](#-contacto-y-autoría)

---

## 🎯 Vista General y Propósito

El portal del Centro de Estudiantes nace con la necesidad de **centralizar y modernizar los canales de comunicación estudiantiles**. Tradicionalmente, la información sobre trámites, horarios, planes de estudio y solicitudes escolares se encontraba dispersa.

Este proyecto busca resolver dicha problemática mediante una **plataforma accesible, liviana, responsiva y orientada a la experiencia de usuario (UX/UI)**, optimizada para funcionar correctamente en dispositivos móviles y de escritorio.

---

## 🚀 Estado del Proyecto

| Parámetro                      | Detalle                            |
| :----------------------------- | :--------------------------------- |
| **Versión Actual**             | `0.47` (Fase Alpha, en desarrollo) |
| **Inicio de Desarrollo**       | Viernes 7 de agosto de 2026        |
| **Lanzamiento Estable (v1.0)** | Martes 16 de marzo de 2027         |
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

## 📂 Arquitectura y Estructura del Proyecto

El código está estructurado de forma modular y limpia. Para consultar el árbol completo de archivos y módulos, revisá la [Guía de Arquitectura del Proyecto](./docs/ARCHITECTURE.md).

---

## 📜 Últimos Cambios y Actualizaciones

- **`v0.47-alpha` (Actual)**
    -   - Se personalizó la meta tag de Description para todas las subpáginas
    - Los archivos `schedules.css`, `calendar.css`, `controls.css` y `members.css` se movieron a `css/modules/` y se quitaron de la importación de `styles.css`
    - Ahora se importan únicamente en las páginas donde se utilizan
    - Los archivos `schedules.js`, `calendar.js` y `members.js` se movieron a `js/modules/` y se quitaron de la importación de `styles.css`
    - Ahora se importan únicamente en las páginas donde se utilizan
    - Se renombró `secret.css` a `extras.css`
    - Se reworkeó la función para subir los asides al llegar al footer
    - Se actualizó humans y el árbol de carpetas

- **`v0.46-alpha` (Anterior)**
    - Se reworkeó la función de los atajos de teclado
    - Se cambiaron todos los atajos de teclado y se eliminaron otros
        - Eliminados: modo código, escala de grises, alto contraste, desactivar sonido y animaciones
        - Mantenidos: modo oscuro, modo descanso, copiar link, abrir asides (todos modificados)
        - Nuevos: abrir panel de configuración, temas, búsqueda, accesibilidad y compartir
    - Nueva sección en `nosotros.html` con los integrantes del C.E. (nombre, curso y cargo)
    - Archivos `members.css` para las tarjetas, `members.js` y `members.json` para guardar y mostrar los nombres
    - El título de pestaña de 404.html ahora no incluye el sufijo de Centro[...]
    - El título de 404.html ahora es 404 Error
    - Carpeta `assets/img/gallery/members` con imágenes placeholder de los miembros del C.E.
    - Carpetas vacías futuras `assets/img/gallery/school` y `/icons/buttons`
    - Se corrigió el nombre de los mapas svg
    - ID de `button-theme` ahora es `button-dark` en todas las funciones

Consultá el [Historial Completo de Cambios (CHANGELOG.md)](./docs/CHANGELOG.md) para ver la bitácora detallada de todas las versiones y parches.

---

## 🗺️ Roadmap de Desarrollo

### 🚀 Próximas Versiones

Para conocer las funcionalidades en las que está trabajando el equipo, te invitamos a conocer nuestra [Hoja de Ruta de Desarrollo](./ROADMAP.md).

---

## 🤝 ¿Querés colaborar?

Si sos parte del equipo o querés aportar al proyecto, leé nuestra [Guía de Contribución y Convenciones](./docs/CONTRIBUTING.md) antes de enviar tus commits.

---

## 👤 Contacto y Autoría

Proyecto diseñado, programado y mantenido por:

- **Juan Martín Rodríguez**  
  _Presidente del Centro de Estudiantes — IPET N° 424 (Gestión 2026)_
    - **GitHub:** [@JohnMartinRB](https://github.com/JohnMartinRB)
        - **Repositorio oficial:** [CE-IPET424](https://github.com/JohnMartinRB/CE-IPET424)
- **Gabriel Campana**  
  _Secretario de RR. EE. del Centro de Estudiantes — IPET N° 424 (Gestión 2026)_
    - **GitHub:** [@campanag721-tech](https://github.com/campanag721-tech)

---
