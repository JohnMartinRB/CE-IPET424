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
| **Versión Actual**             | `0.40` (Fase Alpha, en desarrollo) |
| **Inicio de Desarrollo**       | Viernes 7 de agosto de 2026        |
| **Lanzamiento Estable (v1.0)** | Martes 9 de marzo de 2027          |
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

El código está estructurado de forma modular y limpia. Para consultar el árbol completo de archivos y módulos, revisá la [Guía de Arquitectura del Proyecto](./ARCHITECTURE.md).

---

## 📜 Últimos Cambios y Actualizaciones

- **`v0.42-alpha` (Actual)**
    - El número de versión ahora se maneja desde `version.json`
        - Los archivos de README, footer y modals ahora tienen automatizado el numerado de versión
    - La función para extrar los cambios del changelog fue movida a `js/utils/changelog.js` y se rescribió gran parte de la función
    - Los estilos del modal de novedades ahora se encuentran en `modals.js`
    - Se agregó el atributo `defer` a la importación de librerías en calendario y horarios
    - Se corrigió el contenedor de los aside en calendario y horarios
    - Los easter eggs ahora se encuentran en archivos individuales dentro de `js/extras/` y se exportan desde `extras.js`
    - La carpeta `data/` ahora se encuentra en la raíz del proyecto
    - Se actualizaron las rutas
    - La clase `content-card` se renombró a `main-content`
    - Se actualizó el árbol de carpetas

- **`v0.41-alpha` (Anterior)**
    - Se actualizaron completamente los Términos y Condiciones
    - Se agregó la subpágina `noticias.html` (vacía de momento) para evitar los enlaces rotos
    - En el changelog, los números de versiones ya no incluyen corchetes
    - Corregidos muchos errores de ortografía en varios archivos
    - Se actulizó el árbol de carpetas

Consultá el [Historial Completo de Cambios (CHANGELOG.md)](./CHANGELOG.md) para ver la bitácora detallada de todas las versiones y parches.

---

## 🗺️ Roadmap de Desarrollo

### 🚀 Próximas Versiones

Para conocer las funcionalidades en las que está trabajando el equipo, te invitamos a conocer nuestra [Hoja de Ruta de Desarrollo](./ROADMAP.md).

---

## 🤝 ¿Querés colaborar?

Si sos parte del equipo o querés aportar al proyecto, leé nuestra [Guía de Contribución y Convenciones](./CONTRIBUTING.md) antes de enviar tus commits.

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
